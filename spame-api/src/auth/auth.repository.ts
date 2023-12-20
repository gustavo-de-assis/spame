import { Injectable } from '@nestjs/common';
import { Roles } from 'src/enums/roles.enum';
import { PrismaService } from 'src/prisma/prisma.service';

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

  async findEmployee(patientId: number) {
    const employee = await this.prisma.employee.findFirst({
      where: {
        userId: patientId,
      },
    });

    return employee;
  }

  async findUser(patientId: number, roleId: number) {
    let user;

    if (roleId === Roles.Admin) {
      user = await this.prisma.administrator.findFirst({
        where: {
          patientId,
        },
      });
    }
    if (roleId === Roles.Doctor) {
      user = await this.prisma.doctor.findFirst({
        where: {
          patientId,
        },
      });
    }
    if (roleId === Roles.Recep) {
      user = await this.prisma.recepcionist.findFirst({
        where: {
          patientId,
        },
      });
    }

    return user;
  }
}
