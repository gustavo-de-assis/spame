import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { PatientsModule } from './patients/patients.module';
import { AddressModule } from './addresses/address.module';

@Module({
  imports: [PatientsModule, AddressModule, PrismaModule],
})
export class AppModule {}
