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
    findEmployee(patientId: number): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        userId: number;
        roleId: number;
        startDate: Date;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {}>;
    findUser(patientId: number, roleId: number): Promise<any>;
}
