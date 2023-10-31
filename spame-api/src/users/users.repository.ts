import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async addUser(data: CreateUserDto) {
    await this.prisma.user.create({ data });
  }

  async findAllUsers() {
    return await this.prisma.user.findMany();
  }

  async findUserByName(name: string) {
    return await this.prisma.user.findMany({
      where: {
        name,
      },
    });
  }
}
