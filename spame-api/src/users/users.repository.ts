import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDoctorDto } from './dto/doctor.dto';
import { CreateAdminDto } from './dto/admin.dto';
import { CreateRecepcionistDto } from './dto/recepcionist.dto';

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async addDoctor(data: CreateDoctorDto) {
    throw new Error('Method not implemented.');
  }

  async addAdmin(data: CreateAdminDto) {
    const { patient, ...administratorWithoutPatient } = data;

    const existingPatient = await this.prisma.patient.findFirst({
      where: {
        cpf: patient.cpf,
      },
    });
    /* 
    const patientToConnectOrCreate = existingPatient
      ? { where: { id: existingPatient.id } }
      : { create: { ...patient } }; */

    const roleId = 1;

    const existingAdministrator = await this.prisma.administrator.findFirst({
      where: {
        patientId: existingPatient.id,
      },
    });

    const { address, ...patientWithoutAddress } = patient;
    const date = new Date(patientWithoutAddress.birthdate);

    const findAddress = await this.prisma.address.findFirst({
      where: {
        ...address,
      },
    });

    await this.prisma.administrator.create({
      data: {
        ...administratorWithoutPatient,
        Patient: {
          connectOrCreate: {
            where: { id: existingPatient.id },
            create: {
              ...patientWithoutAddress,
              birthdate: date,
              Address: {
                connectOrCreate: {
                  where: { id: findAddress.id },
                  create: {
                    ...address,
                  },
                },
              },
            },
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

  async addRecepcionist(data: CreateRecepcionistDto) {
    throw new Error('Method not implemented.');
  }
}
