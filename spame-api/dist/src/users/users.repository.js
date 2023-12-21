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
const roles_enum_1 = require("../enums/roles.enum");
let UsersRepository = class UsersRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async addDoctor(patientId, data) {
        const { patient, ...doctorWithoutPatient } = data;
        try {
            await this.prisma.$transaction([
                this.prisma.employee.create({
                    data: {
                        Patient: {
                            connect: {
                                id: patientId,
                            },
                        },
                        Role: {
                            connect: { id: roles_enum_1.Roles.Admin },
                        },
                    },
                }),
                this.prisma.doctor.create({
                    data: {
                        ...doctorWithoutPatient,
                        Patient: {
                            connect: {
                                id: patientId,
                            },
                        },
                    },
                }),
            ]);
        }
        catch (error) {
            console.error('Transaction failed:', error);
            throw new common_1.HttpException('Transaction failed', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async addAdmin(patientId, data) {
        const { patient, ...adminWithoutPatient } = data;
        try {
            await this.prisma.$transaction([
                this.prisma.employee.create({
                    data: {
                        Patient: {
                            connect: {
                                id: patientId,
                            },
                        },
                        Role: {
                            connect: { id: roles_enum_1.Roles.Admin },
                        },
                    },
                }),
                this.prisma.administrator.create({
                    data: {
                        ...adminWithoutPatient,
                        Patient: {
                            connect: {
                                id: patientId,
                            },
                        },
                        Employee: {
                            connect: {
                                userId: patientId,
                            },
                        },
                    },
                }),
            ]);
        }
        catch (error) {
            console.error('Transaction failed:', error);
            throw new common_1.HttpException('Transaction failed', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async addRecepcionist(patientId, data) {
        const { patient, ...recepcionistWithoutPatient } = data;
        try {
            await this.prisma.$transaction([
                this.prisma.employee.create({
                    data: {
                        Patient: {
                            connect: {
                                id: patientId,
                            },
                        },
                        Role: {
                            connect: { id: roles_enum_1.Roles.Admin },
                        },
                    },
                }),
                this.prisma.recepcionist.create({
                    data: {
                        ...recepcionistWithoutPatient,
                        Patient: {
                            connect: {
                                id: patientId,
                            },
                        },
                    },
                }),
            ]);
        }
        catch (error) {
            console.error('Transaction failed:', error);
            throw new common_1.HttpException('Transaction failed', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async isEmployee(patientId) {
        const employeeCount = await this.prisma.employee.count({
            where: {
                userId: patientId,
            },
        });
        return employeeCount > 0;
    }
    async findAllRecepcionist() {
        return await this.prisma.recepcionist.findMany({
            select: {
                id: true,
                password: true,
                Patient: {
                    select: {
                        name: true,
                        cpf: true,
                        email: true,
                    },
                },
            },
        });
    }
    async findAllDoctors() {
        return await this.prisma.doctor.findMany({
            select: {
                id: true,
                crm: true,
                speciality: true,
                password: true,
                Patient: {
                    select: {
                        name: true,
                        cpf: true,
                        email: true,
                    },
                },
            },
        });
    }
    async findAllAdmin() {
        return await this.prisma.administrator.findMany({
            select: {
                id: true,
                password: true,
                Patient: {
                    select: {
                        name: true,
                        cpf: true,
                        email: true,
                    },
                },
            },
        });
    }
};
exports.UsersRepository = UsersRepository;
exports.UsersRepository = UsersRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersRepository);
//# sourceMappingURL=users.repository.js.map