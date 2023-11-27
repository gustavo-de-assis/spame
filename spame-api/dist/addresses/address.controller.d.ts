import { AddressService } from './address.service';
export declare class AddressController {
    private readonly addressService;
    constructor(addressService: AddressService);
    findAllAddresses(): Promise<(import("@prisma/client/runtime").GetResult<{
        id: number;
        street: string;
        houseNumber: string;
        complement: string;
        district: string;
        city: string;
        state: string;
    }, unknown> & {})[]>;
}
