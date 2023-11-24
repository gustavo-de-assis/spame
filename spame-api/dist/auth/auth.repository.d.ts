import { PrismaService } from 'src/prisma/prisma.service';
export declare class AuthRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findUserByEmail(email: string): Promise<import("@prisma/client/runtime").GetResult<{
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
        createdAt: Date;
        addressId: number;
    }, unknown> & {}>;
    findUserRole(patientId: number): Promise<{
        findRole: import("@prisma/client/runtime").GetResult<{
            id: number;
            name: string;
            accessLevel: number;
        }, unknown> & {};
        role: import("@prisma/client/runtime").GetResult<{
            id: number;
            patientId: number;
            password: string;
            roleId: number;
        }, unknown> & {};
    }>;
}
