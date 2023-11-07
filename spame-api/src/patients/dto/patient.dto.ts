import {
  IsString,
  IsEmail,
  IsPhoneNumber,
  IsNotEmpty,
  MaxLength,
  IsDateString,
} from 'class-validator';

export class CreatePatientDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsDateString()
  @IsNotEmpty()
  birthdate: Date;

  @IsString()
  @IsNotEmpty()
  @MaxLength(1)
  gender: string;

  @IsString()
  @IsNotEmpty()
  cpf: string;

  @IsString()
  rg: string;

  @IsString()
  @IsNotEmpty()
  mother: string;

  @IsString()
  father: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsPhoneNumber('BR')
  @IsNotEmpty()
  phone: string;
}
