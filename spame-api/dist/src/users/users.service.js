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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const users_repository_1 = require("./users.repository");
const patients_service_1 = require("../patients/patients.service");
let UsersService = class UsersService {
    constructor(usersRepository, patientsService) {
        this.usersRepository = usersRepository;
        this.patientsService = patientsService;
    }
    async addDoctor(data) {
        const { patient, ...doctorWithoutPatient } = data;
        let patientId = 0;
        const doctorOnDb = await this.patientsService.findPatientByCpf(patient.cpf);
        if (doctorOnDb) {
            if (doctorOnDb.name !== patient.name) {
                console.log('Este cpf pertence à outra pessoa!');
                return;
            }
            patientId = doctorOnDb.id;
        }
        else {
            await this.patientsService.addPatient(patient);
            const newDoctor = await this.patientsService.findPatientByCpf(patient.cpf);
            patientId = newDoctor.id;
        }
        await this.usersRepository.addDoctor(patientId, data);
    }
    async addRecepcionist(data) {
        const { patient } = data;
        let patientId = 0;
        const recepcionistOnDb = await this.patientsService.findPatientByCpf(patient.cpf);
        if (recepcionistOnDb) {
            if (recepcionistOnDb.name !== patient.name) {
                console.log('Este cpf pertence à outra pessoa!');
                return;
            }
            patientId = recepcionistOnDb.id;
        }
        else {
            await this.patientsService.addPatient(patient);
            const newRecepcionist = await this.patientsService.findPatientByCpf(patient.cpf);
            patientId = newRecepcionist.id;
        }
        await this.usersRepository.addRecepcionist(patientId, data);
    }
    async addAdmin(data) {
        const { patient } = data;
        let patientId = 0;
        const adminOnDb = await this.patientsService.findPatientByCpf(patient.cpf);
        if (adminOnDb) {
            if (adminOnDb.name !== patient.name) {
                console.log('Este cpf pertence à outra pessoa!');
                return;
            }
            patientId = adminOnDb.id;
        }
        else {
            await this.patientsService.addPatient(patient);
            const newAdmin = await this.patientsService.findPatientByCpf(patient.cpf);
            patientId = newAdmin.id;
        }
        await this.usersRepository.addAdmin(patientId, data);
    }
    async findAllRecepcionist() {
        const recepcionists = await this.usersRepository.findAllRecepcionist();
        return recepcionists;
    }
    async findAllAdmin() {
        const admins = await this.usersRepository.findAllAdmin();
        return admins;
    }
    async findAllDoctors() {
        const doctors = await this.usersRepository.findAllDoctors();
        return doctors;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_repository_1.UsersRepository,
        patients_service_1.PatientsService])
], UsersService);
//# sourceMappingURL=users.service.js.map