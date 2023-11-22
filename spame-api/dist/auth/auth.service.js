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
        const user = await this.authRepository.findUserByEmail(email);
        if (!user) {
            console.log('Usuário não encontrado!');
            return;
        }
        const res = await this.authRepository.findUserRole(user.id);
        const { role, findRole } = res;
        if (!role) {
            console.log('Acesso não autorizado!');
            return;
        }
        if (role.password !== password) {
            console.log('Senha Incorreta!');
        }
        else {
            console.log(`Seja Bem-vindo(a) ${user.name}`, findRole);
        }
        const payload = { sub: user.id, username: user.email };
        const token = await this.jwtService.signAsync(payload);
        const response = {
            name: user.name,
            accessLevel: findRole.accessLevel,
            role: findRole.name,
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