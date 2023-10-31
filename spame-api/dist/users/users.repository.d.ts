import { CreateUserDto } from './dto/user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class UsersRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    addUser(data: CreateUserDto): Promise<void>;
    findAllUsers(): Promise<(import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        cpf: string;
        mother: string;
        father: string;
        email: string;
        phone: string;
        createdAt: Date;
    }, unknown> & {})[]>;
    findUserByName(name: string): Promise<(import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        cpf: string;
        mother: string;
        father: string;
        email: string;
        phone: string;
        createdAt: Date;
    }, unknown> & {})[]>;
}
