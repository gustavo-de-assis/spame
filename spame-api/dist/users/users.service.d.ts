import { CreateDoctorDto } from './dto/doctor.dto';
import { CreateAdminDto } from './dto/admin.dto';
import { CreateRecepcionistDto } from './dto/recepcionist.dto';
import { UsersRepository } from './users.repository';
import { PatientsService } from 'src/patients/patients.service';
export declare class UsersService {
    private usersRepository;
    private readonly patientsService;
    constructor(usersRepository: UsersRepository, patientsService: PatientsService);
    addDoctor(data: CreateDoctorDto): Promise<void>;
    addRecepcionist(data: CreateRecepcionistDto): Promise<void>;
    addAdmin(data: CreateAdminDto): Promise<void>;
    findAllRecepcionist(): Promise<{
        id: number;
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
    findAllAdmin(): Promise<{
        id: number;
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
