import { Controller, Post, Get, Body } from '@nestjs/common';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/address.dto';

@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Get()
  async findAllAddresses() {
    return this.addressService.findAllAdresses();
  }
}
