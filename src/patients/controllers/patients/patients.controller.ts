import { Controller, Get, Param, Post } from '@nestjs/common';
import { PatientsService } from 'src/patients/services/patients/patients.service';

@Controller('patients')
export class PatientsController {
    constructor(private readonly patientService: PatientsService) {}

  @Get()
  getAll() {
    return this.patientService.getAllPatients();
  }

  @Post()
  addPatient() {
    return this.patientService.addPatient();
  }

  @Post(':id/start')
  startService(@Param('id') id: number) {
    return this.patientService.startService(id);
  }

  @Post(':id/end')
  endService(@Param('id') id: number) {
    return this.patientService.endService(id);
  } 
}
