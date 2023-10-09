export declare class User {
    private _email;
    private _password;
    constructor(email: string, password: string);
    getEmail(): string;
    getPassword(): string;
    setEmail(email: string): void;
    setPassword(password: string): void;
}
