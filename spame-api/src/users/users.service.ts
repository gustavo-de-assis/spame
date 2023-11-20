import { Injectable } from '@nestjs/common';
import { CreateDoctorDto } from './dto/doctor.dto';
import { CreateAdminDto } from './dto/admin.dto';
import { CreateRecepcionistDto } from './dto/recepcionist.dto';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  async addRecepcionist(data: CreateRecepcionistDto) {
    await this.usersRepository.addRecepcionist(data);
  }

  async addAdmin(data: CreateAdminDto) {
    await this.usersRepository.addAdmin(data);
  }
  async addDoctor(data: CreateDoctorDto) {
    await this.usersRepository.addDoctor(data);
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
