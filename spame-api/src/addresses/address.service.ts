import { Injectable } from '@nestjs/common';
import { AddressRepository } from './address.repository';
import { CreateAddressDto } from './dto/address.dto';

@Injectable()
export class AddressService {
  constructor(private addressRepository: AddressRepository) {}

  async findAddress(id: number) {
    return this.addressRepository.findAddressById(id);
  }

  async findAddressByData(addressData: CreateAddressDto) {
    return await this.addressRepository.findAddressByData(addressData);
  }

  async findAllAdresses() {
    return await this.addressRepository.findAllAdresses();
  }

  async addAddress(addressData: CreateAddressDto) {
    try {
      await this.addressRepository.addAddress(addressData);
    } catch (error) {
      console.log(error);
      return;
    }
  }

  async findOrCreateAddress(addressData: CreateAddressDto) {
    const address = await this.findAddressByData(addressData);
    let addressId = 0;

    if (address) {
      addressId = address.id;
    } else {
      await this.addAddress(addressData);
      //addressId = (await this.findAddressByData(addressData)).id;
      const newAddress = await this.findAddressByData(addressData);
      addressId = newAddress.id;
    }

    return addressId;
  }
}
