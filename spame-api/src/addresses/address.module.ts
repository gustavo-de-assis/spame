import { Module } from '@nestjs/common';
import { AddressRepository } from './address.repository';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';

@Module({
  controllers: [AddressController],
  providers: [AddressService, AddressRepository],
})
export class AddressModule {}
