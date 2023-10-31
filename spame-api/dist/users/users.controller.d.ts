import { UsersService } from './users.service';
import { CreateUserDto } from './dto/user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createUser(createUserDto: CreateUserDto): Promise<void>;
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
}
