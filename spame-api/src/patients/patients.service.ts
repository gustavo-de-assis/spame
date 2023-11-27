import { Injectable } from '@nestjs/common';
import { PatientsRepository } from './patients.repository';
import { CreatePatientDto } from './dto/patient.dto';
import { AddressService } from 'src/addresses/address.service';

@Injectable()
export class PatientsService {
  constructor(
    private patientsRepository: PatientsRepository,
    private readonly addressService: AddressService,
  ) {}

  async addPatient(data: CreatePatientDto) {
    const { address, ...patient } = data;

    const duplicate = await this.patientsRepository.findDuplicate(patient.cpf);

    if (duplicate) {
      console.log('Paciente já cadastrado!');
      return;
    }

    const addressId = await this.addressService.findOrCreateAddress(address);

    await this.patientsRepository.addPatient(data, addressId);
  }

  async findAllPatients() {
    const users = await this.patientsRepository.findAllPatients();
    return users;
  }

  async findPatientByName(name: string) {
    const users = await this.patientsRepository.findPatientByName(name);
    return users;
  }

  async findPatientByCpf(cpf: string) {
    const patient = await this.patientsRepository.findDuplicate(cpf);
    return patient;
  }
}
