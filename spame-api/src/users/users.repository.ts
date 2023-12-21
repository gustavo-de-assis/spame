import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDoctorDto } from './dto/doctor.dto';
import { CreateAdminDto } from './dto/admin.dto';
import { CreateRecepcionistDto } from './dto/recepcionist.dto';
import { Roles } from 'src/enums/roles.enum';

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async addDoctor(patientId: number, data: CreateDoctorDto) {
    const { patient, ...doctorWithoutPatient } = data;

    try {
      await this.prisma.$transaction([
        this.prisma.employee.create({
          data: {
            Patient: {
              connect: {
                id: patientId,
              },
            },
            Role: {
              connect: { id: Roles.Doctor },
            },
          },
        }),
        this.prisma.doctor.create({
          data: {
            ...doctorWithoutPatient,
            Patient: {
              connect: {
                id: patientId,
              },
            },
          },
        }),
      ]);
    } catch (error) {
      console.error('Transaction failed:', error);
      throw new HttpException(
        'Transaction failed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async addAdmin(patientId: number, data: CreateAdminDto) {
    const { patient, ...adminWithoutPatient } = data;

    try {
      await this.prisma.$transaction([
        this.prisma.employee.create({
          data: {
            Patient: {
              connect: {
                id: patientId,
              },
            },
            Role: {
              connect: { id: Roles.Admin },
            },
          },
        }),
        this.prisma.administrator.create({
          data: {
            ...adminWithoutPatient,
            Patient: {
              connect: {
                id: patientId,
              },
            },
            Employee: {
              connect: {
                userId: patientId,
              },
            },
          },
        }),
      ]);
    } catch (error) {
      console.error('Transaction failed:', error);
      throw new HttpException(
        'Transaction failed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async addRecepcionist(patientId: number, data: CreateRecepcionistDto) {
    const { patient, ...recepcionistWithoutPatient } = data;

    try {
      await this.prisma.$transaction([
        this.prisma.employee.create({
          data: {
            Patient: {
              connect: {
                id: patientId,
              },
            },
            Role: {
              connect: { id: Roles.Recep },
            },
          },
        }),
        this.prisma.recepcionist.create({
          data: {
            ...recepcionistWithoutPatient,
            Patient: {
              connect: {
                id: patientId,
              },
            },
          },
        }),
      ]);
    } catch (error) {
      console.error('Transaction failed:', error);
      throw new HttpException(
        'Transaction failed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async isEmployee(patientId: number): Promise<boolean> {
    const employeeCount = await this.prisma.employee.count({
      where: {
        userId: patientId,
      },
    });
    return employeeCount > 0;
  }

  async findAllRecepcionist() {
    return await this.prisma.recepcionist.findMany({
      select: {
        id: true,
        password: true,
        Patient: {
          select: {
            name: true,
            cpf: true,
            email: true,
          },
        },
      },
    });
  }

  async findAllDoctors() {
    return await this.prisma.doctor.findMany({
      select: {
        id: true,
        crm: true,
        speciality: true,
        password: true,
        Patient: {
          select: {
            name: true,
            cpf: true,
            email: true,
          },
        },
      },
    });
  }

  async findAllAdmin() {
    return await this.prisma.administrator.findMany({
      select: {
        id: true,
        password: true,
        Patient: {
          select: {
            name: true,
            cpf: true,
            email: true,
          },
        },
      },
    });
  }
}
