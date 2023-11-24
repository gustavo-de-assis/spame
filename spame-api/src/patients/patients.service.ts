import { Injectable } from '@nestjs/common';
import { PatientsRepository } from './patients.repository';
import { CreatePatientDto } from './dto/patient.dto';

@Injectable()
export class PatientsService {
  constructor(private patientsRepository: PatientsRepository) {}

  async addPatient(data: CreatePatientDto) {
    const duplicate = await this.patientsRepository.findDuplicate(data.cpf);
    if (duplicate) {
      console.log('Paciente já cadastrado!');
      return;
    }

    await this.patientsRepository.addPatient(data);
  }

  async findAllPatients() {
    const users = await this.patientsRepository.findAllPatients();
    return users;
  }

  async findPatientByName(name: string) {
    const users = await this.patientsRepository.findPatientByName(name);
    return users;
  }
}
