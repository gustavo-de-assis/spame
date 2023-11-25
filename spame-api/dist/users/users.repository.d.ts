import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDoctorDto } from './dto/doctor.dto';
import { CreateAdminDto } from './dto/admin.dto';
import { CreateRecepcionistDto } from './dto/recepcionist.dto';
export declare class UsersRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    addDoctor(data: CreateDoctorDto): Promise<void>;
    addAdmin(data: CreateAdminDto): Promise<void>;
    addRecepcionist(data: CreateRecepcionistDto): Promise<void>;
    findAllAdmin(): Promise<{
        id: number;
        Patient: {
            name: string;
            cpf: string;
            email: string;
        };
        password: string;
        Role: {
            name: string;
            accessLevel: number;
        };
    }[]>;
    findAllRecepcionist(): Promise<{
        id: number;
        Patient: {
            name: string;
            cpf: string;
            email: string;
        };
        password: string;
        Role: {
            name: string;
            accessLevel: number;
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
        Role: {
            name: string;
            accessLevel: number;
        };
    }[]>;
}