import { IsNotEmpty, IsString } from 'class-validator';
import { CreatePatientDto } from 'src/patients/dto/patient.dto';

export class CreateDoctorDto {
  @IsString()
  @IsNotEmpty()
  crm: string;

  @IsString()
  @IsNotEmpty()
  speciality: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  patient: CreatePatientDto;
}
