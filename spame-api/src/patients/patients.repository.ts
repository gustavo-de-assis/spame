import { Injectable } from '@nestjs/common';
import { CreatePatientDto } from './dto/patient.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PatientsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async addPatient(patientData: CreatePatientDto) {
    //const age = ageCalculator(new Date(patientData.birthdate)).toString();
    const birthdate = new Date(patientData.birthdate).toISOString();
    const data = { ...patientData, birthdate };
    await this.prisma.patient.create({ data });
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

/* function ageCalculator(birthdate: Date) {
  const months = Date.now() - birthdate.getTime();
  const age = new Date(months);

  return Math.abs(age.getUTCFullYear() - 1970);
}
 */
