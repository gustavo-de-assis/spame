"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Patient = void 0;
const crypto_1 = require("crypto");
class Patient {
    constructor(_name, _birthdate, _cpf, _gender, ID = (0, crypto_1.randomUUID)()) {
        this._name = _name;
        this._birthdate = _birthdate;
        this._cpf = _cpf;
        this._gender = _gender;
        this.ID = ID;
        this._age = this.calculateAge(_birthdate);
    }
    calculateAge(birthdate) {
        const birthDate = new Date(birthdate);
        const currentDate = new Date();
        const yearsDiff = currentDate.getFullYear() - birthDate.getFullYear();
        const monthsDiff = currentDate.getMonth() - birthDate.getMonth();
        const daysDiff = currentDate.getDate() - birthDate.getDate();
        if (monthsDiff < 0 || (monthsDiff === 0 && daysDiff < 0)) {
            return yearsDiff - 1;
        }
        else {
            return yearsDiff;
        }
    }
}
exports.Patient = Patient;
//# sourceMappingURL=Patient.js.map