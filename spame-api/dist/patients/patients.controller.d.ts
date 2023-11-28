import { PatientsService } from './patients.service';
import { CreatePatientDTO } from './dto/create-patient.dto';
export declare class PatientsController {
    private readonly patientsService;
    constructor(patientsService: PatientsService);
    getPatients(): any[];
    registerPatient(body: CreatePatientDTO): void;
}
