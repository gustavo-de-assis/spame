"use client";
import { AuthContext } from "@/app/context/authContext";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

export default function Navbar() {
  const { user } = useContext(AuthContext);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    setUserName(user.name.split(" ")[0]);
  }, [userName]);

  return (
    <main>
      <nav className="flex flex-row bg-[#071952] h-16 justify-between items-center px-3 fixed top-0 right-0 z-10 w-full">
        <div className=" gap-1">
          <Image src={"/assets/logo.png"} width={60} height={38} alt="logo" />
          <p>{user.role.toUpperCase()}</p>
        </div>

        <div className="flex gap-3 font-semibold text-lg text-[#A5F1E9]">
          <p>Olá {userName}!</p>
          <p>Logout</p>
        </div>
      </nav>
    </main>
  );
}
