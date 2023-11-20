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
    findAdmin(): Promise<void>;
    findRecepcionist(): Promise<{
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
}