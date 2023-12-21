import { CreateDoctorDto } from './dto/doctor.dto';
import { CreateAdminDto } from './dto/admin.dto';
import { CreateRecepcionistDto } from './dto/recepcionist.dto';
import { UsersRepository } from './users.repository';
import { PatientsService } from 'src/patients/patients.service';
import { CreatePatientDto } from 'src/patients/dto/patient.dto';
export declare class UsersService {
    private usersRepository;
    private readonly patientsService;
    constructor(usersRepository: UsersRepository, patientsService: PatientsService);
    addDoctor(data: CreateDoctorDto): Promise<void>;
    addRecepcionist(data: CreateRecepcionistDto): Promise<void>;
    addAdmin(data: CreateAdminDto): Promise<void>;
    getPatientId(patient: CreatePatientDto): Promise<number>;
    findAllRecepcionist(): Promise<{
        id: number;
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
}
