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
exports.PatientsService = void 0;
const common_1 = require("@nestjs/common");
const patients_repository_1 = require("./patients.repository");
const address_service_1 = require("../addresses/address.service");
let PatientsService = class PatientsService {
    constructor(patientsRepository, addressService) {
        this.patientsRepository = patientsRepository;
        this.addressService = addressService;
    }
    async addPatient(data) {
        const { address, ...patient } = data;
        const duplicate = await this.patientsRepository.findDuplicate(patient.cpf);
        if (duplicate) {
            console.log('Paciente já cadastrado!');
            return;
        }
        const addressId = await this.addressService.findOrCreateAddress(address);
        await this.patientsRepository.addPatient(data, addressId);
    }
    async findAllPatients() {
        const users = await this.patientsRepository.findAllPatients();
        return users;
    }
    async findPatientByName(name) {
        const users = await this.patientsRepository.findPatientByName(name);
        return users;
    }
    async findPatientByCpf(cpf) {
        const patient = await this.patientsRepository.findDuplicate(cpf);
        return patient;
    }
};
exports.PatientsService = PatientsService;
exports.PatientsService = PatientsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [patients_repository_1.PatientsRepository,
        address_service_1.AddressService])
], PatientsService);
//# sourceMappingURL=patients.service.js.map