"use client";

import axios from "axios";
import { setCookie } from "nookies";
import { createContext, useState } from "react";

type User = {
  name: string;
  email: string;
  accessLevel: number;
  role: string;
};

type SignInData = {
  email: string;
  password: string;
};

type AuthContextType = {
  isAuthenticated: boolean;
  user: User;
  signInUser: (data: SignInData) => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    role: "",
    accessLevel: -1,
  });
  const isAuthenticated = !!user;

  async function signInUser({ email, password }: SignInData) {
    const url = "http://localhost:4000/auth/login";
    const body = { email, password };

    try {
      const res = await axios.post(url, body);
      const userData = {
        name: res.data.name,
        role: res.data.role,
        accessLevel: res.data.accessLevel,
        email: email,
      };
      const token = res.data.token;

      setUser(userData);
      console.log(user, token);

      setCookie(undefined, "spame.token", token, {
        maxAge: 60 * 60 * 1, //1 hora
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signInUser }}>
      {children}
    </AuthContext.Provider>
  );
}
