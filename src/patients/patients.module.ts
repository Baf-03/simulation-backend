import { Module } from '@nestjs/common';
import { PatientsController } from './controllers/patients/patients.controller';
import { PatientsService } from './services/patients/patients.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Patient } from './Entites/patient.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Patient])],
  controllers: [PatientsController],
  providers: [PatientsService]
})
export class PatientsModule {}
