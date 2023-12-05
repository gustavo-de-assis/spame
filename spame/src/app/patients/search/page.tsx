"use client";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsSearch, BsPersonFillAdd } from "react-icons/bs";
import axios from "axios";
import Patient from "@/components/Patient";

type PatientInfo = {
  name: string;
  birthdate: string;
  mother: string;
  cpf: string;
};

export default function patientSearch() {
  const [patients, setPatients] = useState<PatientInfo[]>([]);
  const [searchParam, setSearchParam] = useState("");

  useEffect(() => {
    searchPatients();
  }, [searchParam]);

  async function searchPatients(): Promise<void> {
    if (searchParam === "") {
      setPatients([]);
      return;
    }

    const url = `http://localhost:4000/patients/${searchParam}`;
    try {
      const patients = await axios.get(url);
      setPatients(patients.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main>
      <Navbar />

      <section className="flex flex-row gap-1 items-center mt-20">
        <form className="flex flex-row gap-3 p-2">
          <input
            className="w-[600px] h-9 px-1"
            type="text"
            placeholder="Digite o nome, cpf ou ID do paciente"
            value={searchParam}
            onChange={(e) => {
              setSearchParam(e.target.value);
            }}
          />
          <button className="flex items-center justify-center h-10 w-10 rounded bg-gray-300 hover:bg-[#071952] hover:text-[#A5F1E9]">
            <BsSearch />
          </button>
        </form>

        <Link href={"register"}>
          <button className="flex flex-row gap-2 p-2 h-10 items-center rounded bg-gray-300 hover:bg-[#071952] hover:text-[#A5F1E9]">
            <BsPersonFillAdd />
            <p> Cadastrar</p>
          </button>
        </Link>
      </section>

      <section>
        {patients.map((p, idx) => (
          <Patient
            key={idx}
            name={p.name}
            mother={p.mother}
            birthdate={new Date(p.birthdate)}
            cpf={p.cpf}
          />
        ))}
      </section>
    </main>
  );
}
