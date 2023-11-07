import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { CreatePatientDto } from './dto/patient.dto';

@Controller('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Post()
  async createPatient(@Body() createPatientDto: CreatePatientDto) {
    return this.patientsService.addPatient(createPatientDto);
  }
  @Get()
  async findAllUsers() {
    return this.patientsService.findAllPatients();
  }
  @Get(':name')
  async findUserByName(@Param('name') name: string) {
    return this.patientsService.findPatientByName(name);
  }
}
