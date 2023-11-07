import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { PatientsModule } from './patients/patients.module';

@Module({
  imports: [PatientsModule, PrismaModule],
})
export class AppModule {}
