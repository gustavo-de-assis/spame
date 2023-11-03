import { UsersRepository } from './users.repository';
import { CreateUserDto } from './dto/user.dto';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: UsersRepository);
    addUser(data: CreateUserDto): Promise<void>;
    findAllUsers(): Promise<(import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        birthdate: Date;
        gender: string;
        cpf: string;
        rg: string;
        mother: string;
        father: string;
        email: string;
        phone: string;
        age: string;
        createdAt: Date;
    }, unknown> & {})[]>;
    findUserByName(name: string): Promise<(import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        birthdate: Date;
        gender: string;
        cpf: string;
        rg: string;
        mother: string;
        father: string;
        email: string;
        phone: string;
        age: string;
        createdAt: Date;
    }, unknown> & {})[]>;
}