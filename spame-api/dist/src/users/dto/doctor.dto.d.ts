import { CreatePatientDto } from 'src/patients/dto/patient.dto';
export declare class CreateDoctorDto {
    crm: string;
    speciality: string;
    password: string;
    patient: CreatePatientDto;
}
