import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateDoctorDto } from './dto/doctor.dto';
import { CreateAdminDto } from './dto/admin.dto';
import { CreateRecepcionistDto } from './dto/recepcionist.dto';
import { UsersRepository } from './users.repository';
import { PatientsService } from 'src/patients/patients.service';
import { Roles } from 'src/enums/roles.enum';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
    private usersRepository: UsersRepository,
    private readonly patientsService: PatientsService,
  ) {}

  async addDoctor(data: CreateDoctorDto) {
    const { patient } = data;

    let patientId = 0;
    const doctorOnDb = await this.patientsService.findPatientByCpf(patient.cpf);

    if (doctorOnDb) {
      if (
        doctorOnDb.name !== patient.name ||
        doctorOnDb.mother !== patient.mother ||
        doctorOnDb.birthdate !== patient.birthdate
      ) {
        throw new HttpException(
          'Cpf pertence à outra pessoa!',
          HttpStatus.CONFLICT,
        );
      }
      patientId = doctorOnDb.id;
    } else {
      await this.patientsService.addPatient(patient);
      const newDoctor = await this.patientsService.findPatientByCpf(
        patient.cpf,
      );
      patientId = newDoctor.id;
    }
    const isEmployee = await this.usersRepository.isEmployee(patientId);

    if (isEmployee) {
      throw new HttpException(
        'Profissional já cadastrado!',
        HttpStatus.CONFLICT,
      );
    }

    try {
      await this.prisma.$transaction(async () => [
        this.usersRepository.addDoctor(patientId, data),
        this.usersRepository.addEmployee(patientId, Roles.Doctor),
      ]);
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

    let patientId = 0;
    const recepcionistOnDb = await this.patientsService.findPatientByCpf(
      patient.cpf,
    );

    if (recepcionistOnDb) {
      if (
        recepcionistOnDb.name !== patient.name ||
        recepcionistOnDb.mother !== patient.mother ||
        recepcionistOnDb.birthdate !== patient.birthdate
      ) {
        throw new HttpException(
          'Cpf pertence à outra pessoa!',
          HttpStatus.CONFLICT,
        );
      }
      patientId = recepcionistOnDb.id;
    } else {
      await this.patientsService.addPatient(patient);
      const newRecepcionist = await this.patientsService.findPatientByCpf(
        patient.cpf,
      );
      patientId = newRecepcionist.id;
    }
    const isEmployee = await this.usersRepository.isEmployee(patientId);

    if (isEmployee) {
      throw new HttpException(
        'Profissional já cadastrado!',
        HttpStatus.CONFLICT,
      );
    }

    try {
      await this.prisma.$transaction(async () => [
        this.usersRepository.addRecepcionist(patientId, data),
        this.usersRepository.addEmployee(patientId, Roles.Recep),
      ]);
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

    let patientId = 0;
    const adminOnDb = await this.patientsService.findPatientByCpf(patient.cpf);

    if (adminOnDb) {
      if (
        adminOnDb.name !== patient.name ||
        adminOnDb.mother !== patient.mother
      ) {
        throw new HttpException(
          'Cpf pertence à outra pessoa!',
          HttpStatus.CONFLICT,
        );
      }
      patientId = adminOnDb.id;
    } else {
      await this.patientsService.addPatient(patient);
      const newAdmin = await this.patientsService.findPatientByCpf(patient.cpf);
      patientId = newAdmin.id;
    }

    const isEmployee = await this.usersRepository.isEmployee(patientId);

    if (isEmployee) {
      throw new HttpException(
        'Profissional já cadastrado!',
        HttpStatus.CONFLICT,
      );
    }

    try {
      await this.usersRepository.addEmployee(patientId, Roles.Admin);
      await this.usersRepository.addAdmin(patientId, data);
    } catch (error) {
      console.log('Transação falhou!\n', error);
      throw new HttpException(
        'Erro ao cadastrar profissional!',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
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
