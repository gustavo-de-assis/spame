import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDoctorDto } from './dto/doctor.dto';
import { CreateAdminDto } from './dto/admin.dto';
import { CreateRecepcionistDto } from './dto/recepcionist.dto';
export declare class UsersRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    addDoctor(patientId: number, data: CreateDoctorDto): Promise<void>;
    addAdmin(patientId: number, data: CreateAdminDto): Promise<void>;
    addRecepcionist(patientId: number, data: CreateRecepcionistDto): Promise<void>;
    addEmployee(patientId: number, roleId: number): Promise<void>;
    isEmployee(patientId: number): Promise<boolean>;
    findAllRecepcionist(): Promise<{
        id: number;
        password: string;
        Patient: {
            name: string;
            cpf: string;
            email: string;
        };
    }[]>;
    findAllDoctors(): Promise<{
        id: number;
        crm: string;
        speciality: string;
        password: string;
        Patient: {
            name: string;
            cpf: string;
            email: string;
        };
    }[]>;
    findAllAdmin(): Promise<{
        id: number;
        password: string;
        Patient: {
            name: string;
            cpf: string;
            email: string;
        };
    }[]>;
}
