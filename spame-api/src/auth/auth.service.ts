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

    const user = await this.authRepository.findUserByEmail(email);
    if (!user) {
      throw new HttpException('Usuário não encontrado!', HttpStatus.NOT_FOUND);
    }

    const res = await this.authRepository.findUserRole(user.id);

    const { role, findRole } = res;

    if (!role) {
      throw new HttpException('Acesso Negado!', HttpStatus.UNAUTHORIZED);
    }

    if (role.password !== password) {
      throw new HttpException('Senha Incorreta!', HttpStatus.UNAUTHORIZED);
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
}
