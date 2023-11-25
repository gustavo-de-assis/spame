import { Injectable } from '@nestjs/common';
import { CreatePatientDto } from './dto/patient.dto';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class PatientsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async addPatient(patientData: CreatePatientDto, addressId: number) {
    const { address, ...patientWithoutAddress } = patientData;
    const date = new Date(patientData.birthdate);

    await this.prisma.patient.create({
      data: {
        ...patientWithoutAddress,
        birthdate: date,
        Address: {
          connect: { id: addressId },
        },
      },
      include: {
        Address: true,
      },
    });
  }

  async findDuplicate(cpf: string) {
    const patient = await this.prisma.patient.findUnique({
      where: {
        cpf,
      },
    });

    return patient;
  }

  async findAllPatients() {
    return await this.prisma.patient.findMany();
  }

  async findPatientByName(name: string) {
    return await this.prisma.patient.findMany({
      where: {
        name: {
          contains: name,
        },
      },
    });
  }
}
