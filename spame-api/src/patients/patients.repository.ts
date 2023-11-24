import { Injectable } from '@nestjs/common';
import { AddressDto, CreatePatientDto } from './dto/patient.dto';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class PatientsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async addPatient(patientData: CreatePatientDto) {
    const { address, ...patientWithoutAddress } = patientData;
    const date = new Date(patientData.birthdate);

    const foundOrCreatedAddress = await this.findOrCreateAddress(address);

    await this.prisma.patient.create({
      data: {
        ...patientWithoutAddress,
        birthdate: date,
        Address: {
          connect: { id: foundOrCreatedAddress.id },
        },
      },
      include: {
        Address: true,
      },
    });
  }

  async findOrCreateAddress(addressData: AddressDto) {
    const existingAddress = await this.prisma.address.findFirst({
      where: {
        street: addressData.street,
        houseNumber: addressData.houseNumber,
        complement: addressData.complement,
        district: addressData.district,
        city: addressData.city,
        state: addressData.state,
      },
    });

    if (existingAddress) {
      return existingAddress;
    }

    return this.prisma.address.create({ data: addressData });
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
