import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAddressDto } from './dto/address.dto';
export declare class AddressRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAddressById(id: number): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        street: string;
        houseNumber: string;
        complement: string;
        district: string;
        city: string;
        state: string;
    }, unknown> & {}>;
    findAddressByData(addressData: CreateAddressDto): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        street: string;
        houseNumber: string;
        complement: string;
        district: string;
        city: string;
        state: string;
    }, unknown> & {}>;
    addAddress(addressData: CreateAddressDto): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        street: string;
        houseNumber: string;
        complement: string;
        district: string;
        city: string;
        state: string;
    }, unknown> & {}>;
    findAllAdresses(): Promise<(import("@prisma/client/runtime").GetResult<{
        id: number;
        street: string;
        houseNumber: string;
        complement: string;
        district: string;
        city: string;
        state: string;
    }, unknown> & {})[]>;
}
