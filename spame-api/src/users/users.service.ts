import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateDoctorDto } from './dto/doctor.dto';
import { CreateAdminDto } from './dto/admin.dto';
import { CreateRecepcionistDto } from './dto/recepcionist.dto';
import { UsersRepository } from './users.repository';
import { PatientsService } from 'src/patients/patients.service';
import { CreatePatientDto } from 'src/patients/dto/patient.dto';

@Injectable()
export class UsersService {
  constructor(
    private usersRepository: UsersRepository,
    private readonly patientsService: PatientsService,
  ) {}

  async addDoctor(data: CreateDoctorDto) {
    const { patient } = data;

    const patientId = await this.getPatientId(patient);

    const isEmployee = await this.usersRepository.isEmployee(patientId);

    if (isEmployee) {
      throw new HttpException(
        'Profissional já cadastrado!',
        HttpStatus.CONFLICT,
      );
    }

    try {
      await this.usersRepository.addDoctor(patientId, data);
    } catch (error) {
      console.log('Transação Falhou!\n', error);
      throw new HttpException(
        'Erro ao cadastrar profisisonal!',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async addRecepcionist(data: CreateRecepcionistDto) {
    const { patient } = data;

    const patientId = await this.getPatientId(patient);

    const isEmployee = await this.usersRepository.isEmployee(patientId);

    if (isEmployee) {
      throw new HttpException(
        'Profissional já cadastrado!',
        HttpStatus.CONFLICT,
      );
    }

    try {
      await this.usersRepository.addRecepcionist(patientId, data);
    } catch (error) {
      console.log('Transação falhou!\n', error);
      throw new HttpException(
        'Erro ao cadastrar profissional!',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async addAdmin(data: CreateAdminDto) {
    const { patient } = data;

    const patientId = await this.getPatientId(patient);

    const isEmployee = await this.usersRepository.isEmployee(patientId);

    if (isEmployee) {
      throw new HttpException(
        'Profissional já cadastrado!',
        HttpStatus.CONFLICT,
      );
    }

    try {
      await this.usersRepository.addAdmin(patientId, data);
    } catch (error) {
      console.log('Transação falhou!\n', error);
      throw new HttpException(
        'Erro ao cadastrar profissional!',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getPatientId(patient: CreatePatientDto): Promise<number> {
    let patientId = 0;
    const patientOnDb = await this.patientsService.findPatientByCpf(
      patient.cpf,
    );

    if (patientOnDb) {
      if (
        patientOnDb.name !== patient.name ||
        patientOnDb.mother !== patient.mother
      ) {
        throw new HttpException(
          'Cpf pertence à outra pessoa!',
          HttpStatus.CONFLICT,
        );
      }
      patientId = patientOnDb.id;
    } else {
      await this.patientsService.addPatient(patient);
      const newPatient = await this.patientsService.findPatientByCpf(
        patient.cpf,
      );
      patientId = newPatient.id;
    }

    return patientId;
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
