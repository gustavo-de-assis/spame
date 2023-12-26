import { CreateAuthDto } from './dto/auth.dto';
import { AuthRepository } from './auth.repository';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private authRepository;
    private jwtService;
    constructor(authRepository: AuthRepository, jwtService: JwtService);
    logInUser(data: CreateAuthDto): Promise<{
        name: string;
        employeeId: number;
        roleId: number;
        token: string;
    }>;
}
