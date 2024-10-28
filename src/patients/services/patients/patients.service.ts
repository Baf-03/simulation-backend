import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Patient } from 'src/patients/Entites/patient.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PatientsService {
    constructor(
        @InjectRepository(Patient)
        private patientRepository: Repository<Patient>,
      ) {}
    
      async getAllPatients(): Promise<Patient[]> {
        return this.patientRepository.find();
      }
    
      async addPatient(): Promise<Patient> {
        const newPatient = this.patientRepository.create({ arrivalTime: new Date() });
        return this.patientRepository.save(newPatient);
      }
    
      async startService(id: number): Promise<Patient> {
        const patient = await this.patientRepository.findOneBy({ id });
        patient.serviceStartTime = new Date();
        return this.patientRepository.save(patient);
      }
    
      async endService(id: number): Promise<Patient> {
        const patient = await this.patientRepository.findOneBy({ id });
        patient.serviceEndTime = new Date();
        return this.patientRepository.save(patient);
      }
}
