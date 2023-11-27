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
    async addDoctor(patientId, data) {
        const roleId = 2;
        const { patient, ...doctorWithoutPatient } = data;
        await this.prisma.doctor.create({
            data: {
                ...doctorWithoutPatient,
                Patient: {
                    connect: {
                        id: patientId,
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
    async addAdmin(patientId, data) {
        const roleId = 1;
        const { patient, ...adminWithoutPatient } = data;
        await this.prisma.administrator.create({
            data: {
                ...adminWithoutPatient,
                Patient: {
                    connect: {
                        id: patientId,
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
    async addRecepcionist(patientId, data) {
        const roleId = 3;
        const { patient, ...recepcionistWithoutPatient } = data;
        await this.prisma.recepcionist.create({
            data: {
                ...recepcionistWithoutPatient,
                Patient: {
                    connect: {
                        id: patientId,
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
                Role: {
                    select: {
                        name: true,
                        accessLevel: true,
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
                Role: {
                    select: {
                        name: true,
                        accessLevel: true,
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
                Role: {
                    select: {
                        name: true,
                        accessLevel: true,
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