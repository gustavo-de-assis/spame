import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.addUser(createUserDto);
  }
  @Get()
  async findAllUsers() {
    return this.usersService.findAllUsers();
  }
  @Get(':name')
  async findUserByName(@Param('name') name: string) {
    return this.usersService.findUserByName(name);
  }
}
