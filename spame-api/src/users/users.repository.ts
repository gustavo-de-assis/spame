import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async addUser(userData: CreateUserDto) {
    const age = ageCalculator(new Date(userData.birthdate)).toString();
    const birthdate = new Date(userData.birthdate).toISOString();
    const data = { ...userData, birthdate, age };
    await this.prisma.user.create({ data });
  }

  async findAllUsers() {
    return await this.prisma.user.findMany();
  }

  async findUserByName(name: string) {
    foo();
    return await this.prisma.user.findMany({
      where: {
        name: {
          contains: name,
        },
      },
    });
  }
}

function ageCalculator(birthdate: Date) {
  const months = Date.now() - birthdate.getTime();
  const age = new Date(months);

  return Math.abs(age.getUTCFullYear() - 1970);
}

function foo() {
  console.log('AAAAA');
}
