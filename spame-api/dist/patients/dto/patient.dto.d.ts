import { CreateAddressDto } from 'src/addresses/dto/address.dto';
export declare class CreatePatientDto {
    name: string;
    birthdate: Date;
    gender: string;
    cpf: string;
    rg: string;
    mother: string;
    father: string;
    email: string;
    phone: string;
    address: CreateAddressDto;
}
