import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { PatientsModule } from './patients/patients.module';
import { AddressModule } from './addresses/address.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    PatientsModule,
    AddressModule,
    PrismaModule,
    UsersModule,
    AuthModule,
  ],
})
export class AppModule {}
