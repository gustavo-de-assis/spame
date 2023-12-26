import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/auth.dto';
import { AuthRepository } from './auth.repository';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private authRepository: AuthRepository,
    private jwtService: JwtService,
  ) {}

  async logInUser(data: CreateAuthDto) {
    const { email, password } = data;

    const patient = await this.authRepository.findUserByEmail(email);
    if (!patient) {
      throw new HttpException('Usuário não encontrado!', HttpStatus.NOT_FOUND);
    }

    const employee = await this.authRepository.findEmployee(patient.id);

    if (!employee) {
      throw new HttpException('Acesso Negado!', HttpStatus.UNAUTHORIZED);
    }

    const userRole = await this.authRepository.findUserRole(
      employee.userId,
      employee.roleId,
    );

    if (userRole.password !== password) {
      throw new HttpException('Senha Incorreta!', HttpStatus.UNAUTHORIZED);
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
}
