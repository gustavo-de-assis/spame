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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const doctor_dto_1 = require("./dto/doctor.dto");
const admin_dto_1 = require("./dto/admin.dto");
const recepcionist_dto_1 = require("./dto/recepcionist.dto");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async createDoctor(createDoctorDto) {
        return this.usersService.addDoctor(createDoctorDto);
    }
    async createAdmin(createAdminDto) {
        return this.usersService.addAdmin(createAdminDto);
    }
    async createRecepcionist(createRecepcionistDto) {
        return this.usersService.addRecepcionist(createRecepcionistDto);
    }
    async findAllAdmins() {
        return this.usersService.findAllAdmin();
    }
    async findAllRecepcionists() {
        return this.usersService.findAllRecepcionist();
    }
    async findAllDoctors() {
        return this.usersService.findAllDoctors();
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Post)('doctor'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [doctor_dto_1.CreateDoctorDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createDoctor", null);
__decorate([
    (0, common_1.Post)('admin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_dto_1.CreateAdminDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createAdmin", null);
__decorate([
    (0, common_1.Post)('recepcionist'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [recepcionist_dto_1.CreateRecepcionistDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createRecepcionist", null);
__decorate([
    (0, common_1.Get)('admin'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findAllAdmins", null);
__decorate([
    (0, common_1.Get)('recepcionist'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findAllRecepcionists", null);
__decorate([
    (0, common_1.Get)('doctor'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findAllDoctors", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map