"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressService = void 0;
const common_1 = require("@nestjs/common");
const address_repository_1 = require("./address.repository");
let AddressService = class AddressService {
    constructor(addressRepository) {
        this.addressRepository = addressRepository;
    }
    async findAddress(id) {
        return this.addressRepository.findAddressById(id);
    }
    async findAddressByData(addressData) {
        return await this.addressRepository.findAddressByData(addressData);
    }
    async findAllAdresses() {
        return await this.addressRepository.findAllAdresses();
    }
    async addAddress(addressData) {
        try {
            await this.addressRepository.addAddress(addressData);
        }
        catch (error) {
            console.log(error);
            return;
        }
    }
    async findOrCreateAddress(addressData) {
        const address = await this.findAddressByData(addressData);
        let addressId = 0;
        if (address) {
            addressId = address.id;
        }
        else {
            await this.addAddress(addressData);
            const newAddress = await this.findAddressByData(addressData);
            addressId = newAddress.id;
        }
        return addressId;
    }
};
exports.AddressService = AddressService;
exports.AddressService = AddressService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [address_repository_1.AddressRepository])
], AddressService);
//# sourceMappingURL=address.service.js.map