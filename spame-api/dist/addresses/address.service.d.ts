import { AddressRepository } from './address.repository';
import { CreateAddressDto } from './dto/address.dto';
export declare class AddressService {
    private addressRepository;
    constructor(addressRepository: AddressRepository);
    findAddress(id: number): Promise<import("@prisma/client/runtime").GetResult<{
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
    findAllAdresses(): Promise<(import("@prisma/client/runtime").GetResult<{
        id: number;
        street: string;
        houseNumber: string;
        complement: string;
        district: string;
        city: string;
        state: string;
    }, unknown> & {})[]>;
    addAddress(addressData: CreateAddressDto): Promise<void>;
    findOrCreateAddress(addressData: CreateAddressDto): Promise<number>;
}
