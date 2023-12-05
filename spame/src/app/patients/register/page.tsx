"use client";

import Navbar from "@/components/Navbar";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BsPersonFillAdd } from "react-icons/bs";

export default function register() {
  const [address, setAddress] = useState<Address>({
    street: "",
    houseNumber: "",
    complement: "",
    district: "",
    city: "",
    state: "",
    cep: "",
  });

  const [patient, setPatient] = useState<Patient>({
    name: "",
    birthdate: "",
    gender: "",
    mother: "",
    father: "",
    rg: "",
    cpf: "",
    email: "",
    phone: "",
  });

  const redirect = useRouter();

  useEffect(() => {
    if (address.cep.length > 0) {
      searchAddress();
    }
  }, [address.cep]);

  async function searchAddress() {
    const url = `https://viacep.com.br/ws/${address.cep}/json/`;
    if (address.cep.length !== 8) {
      return;
    }
    try {
      const res = await axios.get(url);
      setAddress({
        ...address,
        street: res.data.logradouro,
        district: res.data.bairro,
        city: res.data.localidade,
        state: res.data.uf,
      });
    } catch (error) {
      console.log("Erro ao buscar dados de endereço", error);
    }
  }

  async function signUser(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    const url = `http://localhost:4000/patients`;
    const { cep, ...addressInfo } = address;
    const body = { ...patient, address: addressInfo };

    try {
      await axios.post(url, body);
      alert("paciente cadastrado com sucesso!");
      redirect.push("/patients/search");
    } catch (error) {
      console.log("Erro! \n", error);
    }
  }

  return (
    <main>
      <Navbar />

      <section className="mt-8 p-4 flex flex-col w-9/12">
        <h1 className="text-4xl mb-4">INFORMAÇÕES DE CADASTRO</h1>
        <form onSubmit={signUser} className="flex flex-col w-full">
          <h1 className="text-2xl mb-3"> Informações Gerais</h1>
          <div className="relative mb-4">
            <p className="text-sm absolute z-1 bottom-10 px-1">Nome</p>
            <input
              className="h-12 rounded w-full bg-gray-100 px-3 outline-none focus:bg-gray-200"
              type="text"
              placeholder="Nome Completo"
              value={patient.name}
              onChange={(e) => {
                setPatient({ ...patient, name: e.target.value.toUpperCase() });
              }}
              required
            />
          </div>

          <div className="flex flex-row gap-3">
            <div className="relative mb-4">
              <p className="text-sm absolute z-1 bottom-10 px-1">Data Nasc.</p>
              <input
                className="h-12 rounded bg-gray-100 px-3 outline-none focus:bg-gray-200"
                type="date"
                value={patient.birthdate}
                onChange={(e) => {
                  setPatient({ ...patient, birthdate: e.target.value });
                }}
                required
              />
            </div>
            <div className="relative mb-4">
              <p className="text-sm absolute z-1 bottom-10 px-1">Sexo</p>
              <input
                className="h-12 rounded bg-gray-100 px-3 outline-none focus:bg-gray-200"
                type="text"
                placeholder="Sexo"
                value={patient.gender}
                onChange={(e) => {
                  setPatient({
                    ...patient,
                    gender: e.target.value.toUpperCase(),
                  });
                }}
                required
              />
            </div>
          </div>

          <div className="relative mb-4">
            <p className="text-sm absolute z-1 bottom-10 px-1">Filiação 1</p>
            <input
              className="h-12 rounded w-full bg-gray-100 px-3 outline-none focus:bg-gray-200"
              type="text"
              placeholder="Nome da Mãe"
              value={patient.mother}
              onChange={(e) => {
                setPatient({
                  ...patient,
                  mother: e.target.value.toUpperCase(),
                });
              }}
              required
            />
          </div>

          <div className="relative mb-4">
            <p className="text-sm absolute z-1 bottom-10 px-1">Filiação 2</p>
            <input
              className="h-12 rounded w-full bg-gray-100 px-3 outline-none focus:bg-gray-200"
              type="text"
              placeholder="Nome do Pai"
              value={patient.father}
              onChange={(e) => {
                setPatient({
                  ...patient,
                  father: e.target.value.toUpperCase(),
                });
              }}
            />
          </div>

          <h1 className="text-2xl mb-3">Documentação</h1>

          <div className="flex flex-row gap-3">
            <div className="relative mb-4">
              <p className="text-sm absolute z-1 bottom-10 px-1">CPF</p>
              <input
                className="h-12 rounded bg-gray-100 px-3 outline-none focus:bg-gray-200"
                type="text"
                placeholder="000.000.000-00"
                value={patient.cpf}
                onChange={(e) => {
                  setPatient({ ...patient, cpf: e.target.value });
                }}
                required
              />
            </div>

            <div className="relative mb-4">
              <p className="text-sm absolute z-1 bottom-10 px-1">
                Registro Geral
              </p>
              <input
                className="h-12 rounded bg-gray-100 px-3 outline-none focus:bg-gray-200"
                type="text"
                placeholder="00.000.000-0 / DETRAN"
                value={patient.rg}
                onChange={(e) => {
                  setPatient({ ...patient, rg: e.target.value });
                }}
              />
            </div>

            <div className="relative mb-4">
              <p className="text-sm absolute z-1 bottom-10 px-1">CADSUS</p>
              <input
                className="h-12 rounded bg-gray-100 px-3 outline-none focus:bg-gray-200"
                type="text"
                placeholder="000 0000 0000 0000"
              />
            </div>
          </div>

          <h1 className="text-2xl mb-3">Endereço</h1>
          <div className="flex flex-row w-full gap-3">
            <div className="relative w-full mb-4">
              <p className="text-sm absolute z-1 bottom-10 px-1">Rua</p>
              <input
                className="h-12 rounded w-full bg-gray-100 px-3 outline-none focus:bg-gray-200"
                type="text"
                placeholder="Av. João das Couves"
                value={address.street}
                onChange={(e) => {
                  setAddress({ ...address, street: e.target.value });
                }}
                required
              />
            </div>
            <div className="relative mb-4">
              <p className="text-sm absolute z-1 bottom-10 px-1">Número</p>
              <input
                className="h-12 rounded w-16 bg-gray-100 px-3 outline-none focus:bg-gray-200"
                type="text"
                placeholder="0"
                value={address.houseNumber}
                onChange={(e) => {
                  setAddress({ ...address, houseNumber: e.target.value });
                }}
                required
              />
            </div>
            <div className="relative mb-4">
              <p className="text-sm absolute z-1 bottom-10 px-1">Complemento</p>
              <input
                className="h-12  w-52 rounded bg-gray-100 px-3 outline-none focus:bg-gray-200"
                type="text"
                placeholder="Lt, Qd, etc..."
                value={address.complement}
                onChange={(e) => {
                  setAddress({ ...address, complement: e.target.value });
                }}
              />
            </div>
          </div>

          <div className="flex flex-row w-full gap-3">
            <div className="relative w-full mb-4">
              <p className="text-sm absolute z-1 bottom-10 px-1">Bairro</p>
              <input
                className="h-12 rounded w-full bg-gray-100 px-3 outline-none focus:bg-gray-200"
                type="text"
                placeholder=""
                value={address.district}
                onChange={(e) => {
                  setAddress({ ...address, district: e.target.value });
                }}
                required
              />
            </div>
            <div className="relative w-full mb-4">
              <p className="text-sm absolute z-1 bottom-10 px-1">Município</p>
              <input
                className="h-12 rounded w-full bg-gray-100 px-3 outline-none focus:bg-gray-200"
                type="text"
                placeholder=""
                value={address.city}
                onChange={(e) => {
                  setAddress({ ...address, city: e.target.value });
                }}
                required
              />
            </div>
            <div className="relative mb-4">
              <p className="text-sm absolute z-1 bottom-10 px-1">UF</p>
              <input
                className="h-12 rounded w-16 bg-gray-100 px-3 outline-none focus:bg-gray-200"
                type="text"
                placeholder=""
                value={address.state}
                onChange={(e) => {
                  setAddress({ ...address, state: e.target.value });
                }}
                required
              />
            </div>
          </div>
          <div className="relative mb-4">
            <p className="text-sm absolute z-1 bottom-10 px-1">Pesquisar CEP</p>
            <input
              className="h-12 rounded bg-gray-100 px-3 outline-none focus:bg-gray-200"
              type="text"
              placeholder="00.000-000"
              value={address.cep}
              onChange={(e) => {
                setAddress({ ...address, cep: e.target.value });
              }}
            />
          </div>

          <h1 className="text-2xl mb-3">Informações de Contato</h1>
          <div className="flex flex-row gap-3">
            <div className="relative mb-4">
              <p className="text-sm absolute z-1 bottom-10 px-1">Telefone</p>
              <input
                className="h-12 rounded bg-gray-100 px-3 outline-none focus:bg-gray-200"
                type="text"
                placeholder="(00) 00000-0000"
                value={patient.phone}
                onChange={(e) => {
                  setPatient({ ...patient, phone: e.target.value });
                }}
                required
              />
            </div>
            <div className="relative w-full mb-4">
              <p className="text-sm absolute z-1 bottom-10 px-1">Email</p>
              <input
                className="h-12 rounded w-11/12 bg-gray-100 px-3 outline-none focus:bg-gray-200"
                type="email"
                placeholder="email@email.com"
                value={patient.email}
                onChange={(e) => {
                  setPatient({ ...patient, email: e.target.value });
                }}
                required
              />
            </div>
          </div>

          <button
            className="flex flex-row gap-2 p-8 h-12 w-56 text-xl items-center justify-center rounded bg-gray-400 hover:bg-[#071952] hover:text-[#A5F1E9]"
            type="submit"
          >
            <BsPersonFillAdd />
            <p> Cadastrar</p>
          </button>
        </form>
      </section>
    </main>
  );
}

type Address = {
  street: string;
  houseNumber: string;
  complement: string;
  district: string;
  city: string;
  state: string;
  cep: string;
};

type Patient = {
  name: string;
  birthdate: string;
  gender: string;
  cpf: string;
  rg: string;
  mother: string;
  father: string;
  email: string;
  phone: string;
};
