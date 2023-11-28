import { PatientsRepository } from './patients.repository';
import { CreatePatientDto } from './dto/patient.dto';
import { AddressService } from 'src/addresses/address.service';
export declare class PatientsService {
  private patientsRepository;
  private readonly addressService;
  constructor(
    patientsRepository: PatientsRepository,
    addressService: AddressService,
  );
  addPatient(data: CreatePatientDto): Promise<void>;
  findAllPatients(): Promise<
    (import('@prisma/client/runtime').GetResult<
      {
        id: number;
        name: string;
        birthdate: Date;
        gender: string;
        cpf: string;
        rg: string;
        mother: string;
        father: string;
        email: string;
        phone: string;
        createdAt: Date;
        addressId: number;
      },
      unknown
    > & {})[]
  >;
  findPatientByName(name: string): Promise<
    (import('@prisma/client/runtime').GetResult<
      {
        id: number;
        name: string;
        birthdate: Date;
        gender: string;
        cpf: string;
        rg: string;
        mother: string;
        father: string;
        email: string;
        phone: string;
        createdAt: Date;
        addressId: number;
      },
      unknown
    > & {})[]
  >;
  findPatientByCpf(cpf: string): Promise<
    import('@prisma/client/runtime').GetResult<
      {
        id: number;
        name: string;
        birthdate: Date;
        gender: string;
        cpf: string;
        rg: string;
        mother: string;
        father: string;
        email: string;
        phone: string;
        createdAt: Date;
        addressId: number;
      },
      unknown
    > & {}
  >;
}
