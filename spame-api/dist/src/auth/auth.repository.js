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
exports.AuthRepository = void 0;
const common_1 = require("@nestjs/common");
const roles_enum_1 = require("../enums/roles.enum");
const prisma_service_1 = require("../prisma/prisma.service");
let AuthRepository = class AuthRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findUserByEmail(email) {
        return this.prisma.patient.findUnique({
            where: {
                email,
            },
        });
    }
    async findEmployee(patientId) {
        const employee = await this.prisma.employee.findFirst({
            where: {
                userId: patientId,
            },
        });
        return employee;
    }
    async findUserRole(patientId, roleId) {
        let user;
        if (roleId === roles_enum_1.Roles.Admin) {
            user = await this.prisma.administrator.findFirst({
                where: {
                    patientId,
                },
            });
        }
        if (roleId === roles_enum_1.Roles.Doctor) {
            user = await this.prisma.doctor.findFirst({
                where: {
                    patientId,
                },
            });
        }
        if (roleId === roles_enum_1.Roles.Recep) {
            user = await this.prisma.recepcionist.findFirst({
                where: {
                    patientId,
                },
            });
        }
        return user;
    }
    async upsertSession(userId, token) {
        const existingSession = await this.prisma.session.findFirst({
            where: {
                userId,
            },
        });
        if (existingSession) {
            return await this.prisma.session.updateMany({
                where: {
                    userId,
                },
                data: {
                    token,
                },
            });
        }
        else {
            return await this.prisma.session.create({
                data: {
                    userId,
                    token,
                },
            });
        }
    }
};
exports.AuthRepository = AuthRepository;
exports.AuthRepository = AuthRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AuthRepository);
//# sourceMappingURL=auth.repository.js.map