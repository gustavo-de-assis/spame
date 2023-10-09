"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(email, password) {
        this.setEmail(email);
        this.setPassword(password);
    }
    getEmail() {
        return this._email;
    }
    getPassword() {
        return this._password;
    }
    setEmail(email) {
        this._email = email;
    }
    setPassword(password) {
        this._password = password;
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map