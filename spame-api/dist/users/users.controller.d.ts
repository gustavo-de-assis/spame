import { UsersService } from './users.service';
import { CreateUserDto } from './dto/user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createUser(createUserDto: CreateUserDto): Promise<void>;
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
