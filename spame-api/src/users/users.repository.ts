import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDoctorDto } from './dto/doctor.dto';
import { CreateAdminDto } from './dto/admin.dto';
import { CreateRecepcionistDto } from './dto/recepcionist.dto';

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async addDoctor(data: CreateDoctorDto) {
    const { patient, ...doctorWithoutPatient } = data;

    const existingPatient = await this.prisma.patient.findFirst({
      where: {
        cpf: patient.cpf,
      },
    });

    const roleId = 2;

    const { address, ...patientWithoutAddress } = patient;
    const date = new Date(patientWithoutAddress.birthdate);

    const findAddress = await this.prisma.address.findFirst({
      where: {
        ...address,
      },
    });

    let addressId;

    if (findAddress) {
      addressId = findAddress.id;
    } else {
      const newAddress = await this.prisma.address.create({
        data: {
          ...address,
        },
      });

      addressId = newAddress.id;
    }

    if (!existingPatient) {
      await this.prisma.patient.create({
        data: {
          ...patientWithoutAddress,
          birthdate: date,
          Address: {
            connectOrCreate: {
              where: { id: addressId },
              create: {
                ...address,
              },
            },
          },
        },
      });
    }

    await this.prisma.doctor.create({
      data: {
        ...doctorWithoutPatient,
        Patient: {
          connect: {
            cpf: patient.cpf,
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

  async addAdmin(data: CreateAdminDto) {
    const { patient, ...administratorWithoutPatient } = data;

    const existingPatient = await this.prisma.patient.findFirst({
      where: {
        cpf: patient.cpf,
      },
    });

    const roleId = 1;

    const { address, ...patientWithoutAddress } = patient;
    const date = new Date(patientWithoutAddress.birthdate);

    const findAddress = await this.prisma.address.findFirst({
      where: {
        ...address,
      },
    });

    let addressId;

    if (findAddress) {
      addressId = findAddress.id;
    } else {
      const newAddress = await this.prisma.address.create({
        data: {
          ...address,
        },
      });

      addressId = newAddress.id;
    }

    if (!existingPatient) {
      await this.prisma.patient.create({
        data: {
          ...patientWithoutAddress,
          birthdate: date,
          Address: {
            connectOrCreate: {
              where: { id: addressId },
              create: {
                ...address,
              },
            },
          },
        },
      });
    }

    await this.prisma.administrator.create({
      data: {
        ...administratorWithoutPatient,
        Patient: {
          connect: {
            cpf: patient.cpf,
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

  async addRecepcionist(data: CreateRecepcionistDto) {
    const { patient, ...recepcionistWithoutPatient } = data;

    const existingPatient = await this.prisma.patient.findFirst({
      where: {
        cpf: patient.cpf,
      },
    });

    const roleId = 3;

    const { address, ...patientWithoutAddress } = patient;
    const date = new Date(patientWithoutAddress.birthdate);

    const findAddress = await this.prisma.address.findFirst({
      where: {
        ...address,
      },
    });

    let addressId;

    if (findAddress) {
      addressId = findAddress.id;
    } else {
      const newAddress = await this.prisma.address.create({
        data: {
          ...address,
        },
      });

      addressId = newAddress.id;
    }

    if (!existingPatient) {
      await this.prisma.patient.create({
        data: {
          ...patientWithoutAddress,
          birthdate: date,
          Address: {
            connectOrCreate: {
              where: { id: addressId },
              create: {
                ...address,
              },
            },
          },
        },
      });
    }

    await this.prisma.recepcionist.create({
      data: {
        ...recepcionistWithoutPatient,
        Patient: {
          connect: {
            cpf: patient.cpf,
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

  async findAllAdmin() {
    return await this.prisma.administrator.findMany({
      select: {
        id: true,
        Patient: {
          select: {
            name: true,
            cpf: true,
            email: true,
          },
        },
        password: true,
        Role: {
          select: {
            name: true,
            accessLevel: true,
          },
        },
      },
    });
  }

  async findAllRecepcionist() {
    return await this.prisma.recepcionist.findMany({
      select: {
        id: true,
        Patient: {
          select: {
            name: true,
            cpf: true,
            email: true,
          },
        },
        password: true,
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
}
