import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAddressDto } from './dto/address.dto';

@Injectable()
export class AddressRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAddressById(id: number) {
    return await this.prisma.address.findUnique({
      where: {
        id,
      },
    });
  }

  async findAddressByData(addressData: CreateAddressDto) {
    return await this.prisma.address.findFirst({
      where: {
        ...addressData,
      },
    });
  }

  async addAddress(addressData: CreateAddressDto) {
    return await this.prisma.address.create({
      data: {
        ...addressData,
      },
    });
  }

  async findAllAdresses() {
    return await this.prisma.address.findMany();
  }
}
