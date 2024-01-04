"use client";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./context/authContext";
import { useRouter } from "next/navigation";

export default function Home() {
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
  const { signInUser, user } = useContext(AuthContext);
  const redirect = useRouter();

  useEffect(() => {
    console.log(user);
  }, [user]);

  async function loginUser(
    event: React.ChangeEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();
    await signInUser(loginInfo);
    if (user.employeeId > 0) {
      redirect.push("/dashboard");
    } else {
      alert("Credenciais inválidas!");
    }
  }

  return (
    <main className="flex flex-row w-screen h-screen">
      <aside className="flex h-full w-8/12 justify-center items-center">
        <Image src={"/assets/logo.png"} width={500} height={300} alt="logo" />
      </aside>

      <aside className="flex flex-col h-full w-4/12 items-center bg-[#A5F1E9]">
        <header className="m-36">
          <h1 className=" font-medium text-7xl text-[#071952]">Login</h1>
        </header>
        <form
          onSubmit={loginUser}
          className="flex flex-col justify-center items-center m-8 gap-5"
        >
          <div className="relative">
            <p className="text-sm absolute z-1 bottom-10 px-1">Email</p>
            <input
              className="h-12 rounded bg-gray-100 px-3 outline-none focus:bg-gray-200"
              type="email"
              placeholder="Email"
              value={loginInfo.email}
              onChange={(e) => {
                setLoginInfo({ ...loginInfo, email: e.target.value });
              }}
              required
            />
          </div>

          <div className="relative">
            <p className="text-sm absolute z-1 bottom-10 px-1">Senha</p>
            <input
              className="h-12 rounded bg-gray-100 px-3 outline-none focus:bg-gray-200"
              type="password"
              placeholder="Senha"
              value={loginInfo.password}
              onChange={(e) => {
                setLoginInfo({ ...loginInfo, password: e.target.value });
              }}
              required
            />
          </div>

          <button
            className="h-12 rounded bg-[#071952] text-gray-300 font-normal text-2xl hover:opacity-80 px-12"
            type="submit"
          >
            Entrar
          </button>
        </form>
      </aside>
    </main>
  );
}
