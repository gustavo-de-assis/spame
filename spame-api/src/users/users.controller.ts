import { Body, Controller, Post, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateDoctorDto } from './dto/doctor.dto';
import { CreateAdminDto } from './dto/admin.dto';
import { CreateRecepcionistDto } from './dto/recepcionist.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('doctor')
  async createDoctor(@Body() createDoctorDto: CreateDoctorDto) {
    return this.usersService.addDoctor(createDoctorDto);
  }

  @Post('admin')
  async createAdmin(@Body() createAdminDto: CreateAdminDto) {
    return this.usersService.addAdmin(createAdminDto);
  }

  @Post('recepcionist')
  async createRecepcionist(
    @Body() createRecepcionistDto: CreateRecepcionistDto,
  ) {
    return this.usersService.addRecepcionist(createRecepcionistDto);
  }

  @Get('admin')
  async findAdmin() {
    return this.usersService.findAdmin();
  }

  @Get('recepcionist')
  async findRecepcionist() {
    return this.usersService.findRecepcionist();
  }
}
