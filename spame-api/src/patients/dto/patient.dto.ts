import { Type } from 'class-transformer';
import { CreateAddressDto } from 'src/addresses/dto/address.dto';
import {
  IsString,
  IsEmail,
  IsPhoneNumber,
  IsNotEmpty,
  MaxLength,
  IsDate,
} from 'class-validator';
export class CreatePatientDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsDate()
  @Type(() => Date)
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

  address: CreateAddressDto;
}
