import { Module } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { PatientsController } from './patients.controller';
import { PatientsRepository } from './patients.repository';
import { AddressService } from 'src/addresses/address.service';
import { AddressRepository } from 'src/addresses/address.repository';

@Module({
  controllers: [PatientsController],
  providers: [
    PatientsService,
    AddressService,
    PatientsRepository,
    AddressRepository,
  ],
})
export class PatientsModule {}
