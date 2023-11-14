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
    address: AddressDto;
}
export declare class AddressDto {
    street: string;
    houseNumber: string;
    complement: string;
    district: string;
    city: string;
    state: string;
}
