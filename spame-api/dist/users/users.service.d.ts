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
}
