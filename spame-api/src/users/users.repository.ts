import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDoctorDto } from './dto/doctor.dto';
import { CreateAdminDto } from './dto/admin.dto';
import { CreateRecepcionistDto } from './dto/recepcionist.dto';

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async addDoctor(patientId: number, data: CreateDoctorDto) {
    const roleId = 2;
    const { patient, ...doctorWithoutPatient } = data;

    await this.prisma.doctor.create({
      data: {
        ...doctorWithoutPatient,
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

  async addAdmin(patientId: number, data: CreateAdminDto) {
    const roleId = 1;
    const { patient, ...adminWithoutPatient } = data;

    await this.prisma.administrator.create({
      data: {
        ...adminWithoutPatient,
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

  async addRecepcionist(patientId: number, data: CreateRecepcionistDto) {
    const roleId = 3;
    const { patient, ...recepcionistWithoutPatient } = data;

    await this.prisma.recepcionist.create({
      data: {
        ...recepcionistWithoutPatient,
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
        Role: {
          select: {
            name: true,
            accessLevel: true,
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
        Role: {
          select: {
            name: true,
            accessLevel: true,
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
        Role: {
          select: {
            name: true,
            accessLevel: true,
          },
        },
      },
    });
  }
}
