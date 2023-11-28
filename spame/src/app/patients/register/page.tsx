"use client";

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BsPersonFillAdd } from "react-icons/bs";

type Address = {
  street: string;
  houseNumber: string;
  complement: string;
  district: string;
  city: string;
  state: string;
  cep: string;
};

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
  useEffect(() => {
    if (address.cep.length > 0) {
      searchAddress();
    }
  }, [address.cep]);

  async function searchAddress() {
    const url = `https://viacep.com.br/ws/${address.cep}/json/`;
    console.log("cep: ", address.cep);
    if (address.cep.length !== 8) {
      return;
    }
    try {
      const res = await axios.get(url);

      console.log(res.data);

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

  return (
    <main>
      <nav className="flex flex-row bg-[#071952] h-11 justify-between items-center px-3 mb-5">
        <div>
          <Image src={"/assets/logo.png"} width={60} height={38} alt="logo" />
        </div>

        <div className="flex gap-3 font-normal text-[#A5F1E9]">
          <p>Olá Beltrano!</p>
          <p>Logout</p>
        </div>
      </nav>

      <section className="mt-8 p-4 flex flex-col w-9/12">
        <h1 className="text-4xl mb-4">INFORMAÇÕES DE CADASTRO</h1>
        <form className="flex flex-col w-full">
          <h1 className="text-2xl mb-3"> Informações Gerais</h1>
          <div className="relative mb-4">
            <p className="text-sm absolute z-1 bottom-10 px-1">Nome</p>
            <input
              className="h-12 rounded w-full bg-gray-100 px-3 outline-none focus:bg-gray-200"
              type="text"
              placeholder="Nome Completo"
            />
          </div>

          <div className="flex flex-row gap-3">
            <div className="relative mb-4">
              <p className="text-sm absolute z-1 bottom-10 px-1">Data Nasc.</p>
              <input
                className="h-12 rounded bg-gray-100 px-3 outline-none focus:bg-gray-200"
                type="date"
              />
            </div>
            <div className="relative mb-4">
              <p className="text-sm absolute z-1 bottom-10 px-1">Sexo</p>
              <input
                className="h-12 rounded bg-gray-100 px-3 outline-none focus:bg-gray-200"
                type="text"
                placeholder="Sexo"
              />
            </div>
          </div>

          <div className="relative mb-4">
            <p className="text-sm absolute z-1 bottom-10 px-1">Filiação 1</p>
            <input
              className="h-12 rounded w-full bg-gray-100 px-3 outline-none focus:bg-gray-200"
              type="text"
              placeholder="Nome da Mãe"
            />
          </div>

          <div className="relative mb-4">
            <p className="text-sm absolute z-1 bottom-10 px-1">Filiação 2</p>
            <input
              className="h-12 rounded w-full bg-gray-100 px-3 outline-none focus:bg-gray-200"
              type="text"
              placeholder="Nome do Pai"
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
              />
            </div>
            <div className="relative w-full mb-4">
              <p className="text-sm absolute z-1 bottom-10 px-1">Email</p>
              <input
                className="h-12 rounded w-11/12 bg-gray-100 px-3 outline-none focus:bg-gray-200"
                type="email"
                placeholder="email@email.com"
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
