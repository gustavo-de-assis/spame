import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersRepository } from './users.repository';
import { PatientsService } from 'src/patients/patients.service';
import { PatientsRepository } from 'src/patients/patients.repository';
import { AddressRepository } from 'src/addresses/address.repository';
import { AddressService } from 'src/addresses/address.service';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    PatientsService,
    AddressService,
    UsersRepository,
    PatientsRepository,
    AddressRepository,
  ],
})
export class UsersModule {}
