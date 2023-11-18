import { IsNotEmpty, IsString } from 'class-validator';

export class CreateRecepcionistDto {
  @IsString()
  @IsNotEmpty()
  password: string;
}
