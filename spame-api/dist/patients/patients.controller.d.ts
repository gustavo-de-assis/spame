import { PatientsService } from './patients.service';
import { CreatePatientDto } from './dto/patient.dto';
export declare class PatientsController {
    private readonly patientsService;
    constructor(patientsService: PatientsService);
    createPatient(createPatientDto: CreatePatientDto): Promise<void>;
    findAllUsers(): Promise<(import("@prisma/client/runtime").GetResult<{
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
    findUserByName(name: string): Promise<(import("@prisma/client/runtime").GetResult<{
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
