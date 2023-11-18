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
exports.UsersRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let UsersRepository = class UsersRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async addDoctor(data) {
        throw new Error('Method not implemented.');
    }
    async addAdmin(data) {
        const { patient, ...administratorWithoutPatient } = data;
        const existingPatient = await this.prisma.patient.findFirst({
            where: {
                cpf: patient.cpf,
            },
        });
        const roleId = 1;
        const existingAdministrator = await this.prisma.administrator.findFirst({
            where: {
                patientId: existingPatient.id,
            },
        });
        const { address, ...patientWithoutAddress } = patient;
        const date = new Date(patientWithoutAddress.birthdate);
        const findAddress = await this.prisma.address.findFirst({
            where: {
                ...address,
            },
        });
        await this.prisma.administrator.create({
            data: {
                ...administratorWithoutPatient,
                Patient: {
                    connectOrCreate: {
                        where: { id: existingPatient.id },
                        create: {
                            ...patientWithoutAddress,
                            birthdate: date,
                            Address: {
                                connectOrCreate: {
                                    where: { id: findAddress.id },
                                    create: {
                                        ...address,
                                    },
                                },
                            },
                        },
                    },
                },
                Role: {
                    connect: { id: roleId },
                },
            },
            include: {
                Patient: true,
                Role: true,
            },
        });
    }
    async addRecepcionist(data) {
        throw new Error('Method not implemented.');
    }
};
exports.UsersRepository = UsersRepository;
exports.UsersRepository = UsersRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersRepository);
//# sourceMappingURL=users.repository.js.map