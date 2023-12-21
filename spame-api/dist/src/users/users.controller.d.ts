import { UsersService } from './users.service';
import { CreateDoctorDto } from './dto/doctor.dto';
import { CreateAdminDto } from './dto/admin.dto';
import { CreateRecepcionistDto } from './dto/recepcionist.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createDoctor(createDoctorDto: CreateDoctorDto): Promise<void>;
    createAdmin(createAdminDto: CreateAdminDto): Promise<void>;
    createRecepcionist(createRecepcionistDto: CreateRecepcionistDto): Promise<void>;
    findAllAdmins(): Promise<{
        id: number;
        password: string;
        Patient: {
            name: string;
            cpf: string;
            email: string;
        };
    }[]>;
    findAllRecepcionists(): Promise<{
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
