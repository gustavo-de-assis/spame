import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDoctorDto } from './dto/doctor.dto';
import { CreateAdminDto } from './dto/admin.dto';
import { CreateRecepcionistDto } from './dto/recepcionist.dto';

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async addDoctor(patientId: number, data: CreateDoctorDto) {
    const { patient, ...doctorWithoutPatient } = data;

    await this.prisma.doctor.create({
      data: {
        ...doctorWithoutPatient,
        Patient: {
          connect: {
            id: patientId,
          },
        },
      },
      include: {
        Patient: true,
      },
    });
  }

  async addAdmin(patientId: number, data: CreateAdminDto) {
    const { patient, ...adminWithoutPatient } = data;

    await this.prisma.administrator.create({
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
      include: {
        Patient: true,
        Employee: true,
      },
    });
  }

  async addRecepcionist(patientId: number, data: CreateRecepcionistDto) {
    const { patient, ...recepcionistWithoutPatient } = data;

    await this.prisma.recepcionist.create({
      data: {
        ...recepcionistWithoutPatient,
        Patient: {
          connect: {
            id: patientId,
          },
        },
      },
      include: {
        Patient: true,
      },
    });
  }

  async addEmployee(patientId: number, roleId: number) {
    await this.prisma.employee.create({
      data: {
        Patient: {
          connect: {
            id: patientId,
          },
        },
        Role: {
          connect: { id: roleId },
        },
      },
      include: {
        Patient: true,
        Role: true,
      },
    });
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
