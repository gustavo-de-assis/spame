import { AddressDto, CreatePatientDto } from './dto/patient.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class PatientsRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    addPatient(patientData: CreatePatientDto): Promise<void>;
    findOrCreateAddress(addressData: AddressDto): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        street: string;
        houseNumber: string;
        complement: string;
        district: string;
        city: string;
        state: string;
    }, unknown> & {}>;
    findDuplicate(cpf: string): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        birthdate: Date;
        gender: string;
        cpf: string;
        rg: string;
        mother: string;
        father: string;
        email: string;
        phone: string;
        createdAt: Date;
        addressId: number;
    }, unknown> & {}>;
    findAllPatients(): Promise<(import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        birthdate: Date;
        gender: string;
        cpf: string;
        rg: string;
        mother: string;
        father: string;
        email: string;
        phone: string;
        createdAt: Date;
        addressId: number;
    }, unknown> & {})[]>;
    findPatientByName(name: string): Promise<(import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        birthdate: Date;
        gender: string;
        cpf: string;
        rg: string;
        mother: string;
        father: string;
        email: string;
        phone: string;
        createdAt: Date;
        addressId: number;
    }, unknown> & {})[]>;
}
