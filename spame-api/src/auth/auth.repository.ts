import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAuthDto } from './dto/auth.dto';

@Injectable()
export class AuthRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findUserByEmail(email: string) {
    return this.prisma.patient.findUnique({
      where: {
        email,
      },
    });
  }

  async findUserRole(patientId: number) {
    let role = await this.prisma.administrator.findFirst({
      where: {
        patientId,
      },
    });

    if (!role) {
      role = await this.prisma.doctor.findFirst({
        where: {
          patientId,
        },
      });
    }

    if (!role) {
      role = await this.prisma.recepcionist.findFirst({
        where: {
          patientId,
        },
      });
    }

    const findRole = await this.prisma.role.findFirst({
      where: {
        id: role.roleId,
      },
    });

    return { findRole, role };
  }
}
