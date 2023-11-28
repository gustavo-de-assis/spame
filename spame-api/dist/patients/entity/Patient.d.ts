export declare class Patient {
    private _name;
    private _birthdate;
    private _cpf;
    private _gender;
    readonly ID: string;
    private _age;
    constructor(_name: string, _birthdate: Date, _cpf: string, _gender: string, ID?: string);
    private calculateAge;
}
