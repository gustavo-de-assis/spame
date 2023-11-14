import { PatientsRepository } from './patients.repository';
import { CreatePatientDto } from './dto/patient.dto';
export declare class PatientsService {
    private patientsRepository;
    constructor(patientsRepository: PatientsRepository);
    addPatient(data: CreatePatientDto): Promise<void>;
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
