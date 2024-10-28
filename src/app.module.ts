import { Module } from '@nestjs/common';
import { PatientsModule } from './patients/patients.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { pgConfig } from '../pg.config';

@Module({
  imports: [PatientsModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(pgConfig)
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
