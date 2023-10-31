import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { CreateUserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  async addUser(data: CreateUserDto) {
    await this.usersRepository.addUser(data);
  }

  async findAllUsers() {
    const users = await this.usersRepository.findAllUsers();
    return users;
  }
}
