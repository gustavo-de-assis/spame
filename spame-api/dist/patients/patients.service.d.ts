import { CreatePatientDTO } from './dto/create-patient.dto';
export declare class PatientsService {
    patients: any[];
    registerPatient({ name, birthdate, cpf, gender }: CreatePatientDTO): void;
    getPatients(): any[];
}
