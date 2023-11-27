import { Injectable } from '@nestjs/common';
import { CreateDoctorDto } from './dto/doctor.dto';
import { CreateAdminDto } from './dto/admin.dto';
import { CreateRecepcionistDto } from './dto/recepcionist.dto';
import { UsersRepository } from './users.repository';
import { PatientsService } from 'src/patients/patients.service';

@Injectable()
export class UsersService {
  constructor(
    private usersRepository: UsersRepository,
    private readonly patientsService: PatientsService,
  ) {}

  async addDoctor(data: CreateDoctorDto) {
    const { patient, ...doctorWithoutPatient } = data;

    let patientId = 0;
    const doctorOnDb = await this.patientsService.findPatientByCpf(patient.cpf);

    if (doctorOnDb) {
      //talvez com o throw no patientService isso se resolva
      //sem necessidade dessa checagem.
      if (doctorOnDb.name !== patient.name) {
        console.log('Este cpf pertence à outra pessoa!');
        return;
      }
      patientId = doctorOnDb.id;
    } else {
      await this.patientsService.addPatient(patient);
      const newDoctor = await this.patientsService.findPatientByCpf(
        patient.cpf,
      );
      patientId = newDoctor.id;
    }

    await this.usersRepository.addDoctor(patientId, data);
  }

  async addRecepcionist(data: CreateRecepcionistDto) {
    const { patient } = data;

    let patientId = 0;
    const recepcionistOnDb = await this.patientsService.findPatientByCpf(
      patient.cpf,
    );

    if (recepcionistOnDb) {
      //talvez com o throw no patientService isso se resolva
      //sem necessidade dessa checagem.
      if (recepcionistOnDb.name !== patient.name) {
        console.log('Este cpf pertence à outra pessoa!');
        return;
      }
      patientId = recepcionistOnDb.id;
    } else {
      await this.patientsService.addPatient(patient);
      const newRecepcionist = await this.patientsService.findPatientByCpf(
        patient.cpf,
      );
      patientId = newRecepcionist.id;
    }

    await this.usersRepository.addRecepcionist(patientId, data);
  }

  async addAdmin(data: CreateAdminDto) {
    const { patient } = data;

    let patientId = 0;
    const adminOnDb = await this.patientsService.findPatientByCpf(patient.cpf);

    if (adminOnDb) {
      //talvez com o throw no patientService isso se resolva
      //sem necessidade dessa checagem.
      if (adminOnDb.name !== patient.name) {
        console.log('Este cpf pertence à outra pessoa!');
        return;
      }
      patientId = adminOnDb.id;
    } else {
      await this.patientsService.addPatient(patient);
      const newAdmin = await this.patientsService.findPatientByCpf(patient.cpf);
      patientId = newAdmin.id;
    }

    await this.usersRepository.addAdmin(patientId, data);
  }

  async findAllRecepcionist() {
    const recepcionists = await this.usersRepository.findAllRecepcionist();
    return recepcionists;
  }

  async findAllAdmin() {
    const admins = await this.usersRepository.findAllAdmin();
    return admins;
  }

  async findAllDoctors() {
    const doctors = await this.usersRepository.findAllDoctors();
    return doctors;
  }
}
