import { IsString, IsEmail, IsPhoneNumber, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  cpf: string;

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
