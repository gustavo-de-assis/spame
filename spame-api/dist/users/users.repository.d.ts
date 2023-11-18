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
}
