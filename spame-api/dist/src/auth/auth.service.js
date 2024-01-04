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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const auth_repository_1 = require("./auth.repository");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(authRepository, jwtService) {
        this.authRepository = authRepository;
        this.jwtService = jwtService;
    }
    async logInUser(data) {
        const { email, password } = data;
        const patient = await this.authRepository.findUserByEmail(email);
        if (!patient) {
            throw new common_1.HttpException('Usuário não encontrado!', common_1.HttpStatus.NOT_FOUND);
        }
        const employee = await this.authRepository.findEmployee(patient.id);
        if (!employee) {
            throw new common_1.HttpException('Acesso Negado!', common_1.HttpStatus.UNAUTHORIZED);
        }
        const userRole = await this.authRepository.findUserRole(employee.userId, employee.roleId);
        if (userRole.password !== password) {
            throw new common_1.HttpException('Senha Incorreta!', common_1.HttpStatus.UNAUTHORIZED);
        }
        const payload = { sub: patient.id, username: patient.email };
        const token = await this.jwtService.signAsync(payload);
        await this.authRepository.upsertSession(patient.id, token);
        const response = {
            name: patient.name,
            employeeId: employee.id,
            roleId: employee.roleId,
            token,
        };
        return response;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_repository_1.AuthRepository,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map