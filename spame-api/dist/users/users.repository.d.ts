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
    findAdmin(): Promise<(import("@prisma/client/runtime").GetResult<{
        id: number;
        patientId: number;
        password: string;
        roleId: number;
    }, unknown> & {})[]>;
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
