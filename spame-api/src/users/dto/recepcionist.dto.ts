import { IsNotEmpty, IsString } from 'class-validator';
import { CreatePatientDto } from 'src/patients/dto/patient.dto';

export class CreateRecepcionistDto {
  @IsString()
  @IsNotEmpty()
  password: string;

  patient: CreatePatientDto;
}
