import { Injectable } from '@nestjs/common';
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
    } else {
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
}
