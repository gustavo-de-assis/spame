import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    logInUser(createAuthDto: CreateAuthDto): Promise<{
        name: string;
        accessLevel: number;
        role: string;
        token: string;
    }>;
}