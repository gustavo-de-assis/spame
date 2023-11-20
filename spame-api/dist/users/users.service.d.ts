import { CreateDoctorDto } from './dto/doctor.dto';
import { CreateAdminDto } from './dto/admin.dto';
import { CreateRecepcionistDto } from './dto/recepcionist.dto';
import { UsersRepository } from './users.repository';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: UsersRepository);
    addRecepcionist(data: CreateRecepcionistDto): Promise<void>;
    addAdmin(data: CreateAdminDto): Promise<void>;
    addDoctor(data: CreateDoctorDto): Promise<void>;
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
