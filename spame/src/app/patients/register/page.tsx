import Image from "next/image";
import { BsPersonFillAdd } from "react-icons/bs";

export default function register() {
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

      <section className="mt-8">
        <h1 className="text-4xl mb-4">INFORMAÇÕES DE CADASTRO</h1>
        <form className="">
          <h1 className="text-2xl mb-3"> Informações Gerais</h1>
          <div className="relative mb-4">
            <p className="text-sm absolute z-1 bottom-10 px-1">Nome</p>
            <input
              className="h-12 rounded bg-gray-100 px-3 outline-none focus:bg-gray-200"
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
              className="h-12 rounded bg-gray-100 px-3 outline-none focus:bg-gray-200"
              type="text"
              placeholder="Nome da Mãe"
            />
          </div>

          <div className="relative mb-4">
            <p className="text-sm absolute z-1 bottom-10 px-1">Filiação 2</p>
            <input
              className="h-12 rounded bg-gray-100 px-3 outline-none focus:bg-gray-200"
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
              <p className="text-sm absolute z-1 bottom-10 px-1">CADSUS</p>
              <input
                className="h-12 rounded bg-gray-100 px-3 outline-none focus:bg-gray-200"
                type="text"
                placeholder="000 0000 0000 0000"
              />
            </div>
          </div>

          <h1 className="text-2xl mb-3">Endereço</h1>

          <div className="flex flex-row gap-3">
            <div className="relative mb-4">
              <p className="text-sm absolute z-1 bottom-10 px-1">Rua</p>
              <input
                className="h-12 rounded bg-gray-100 px-3 outline-none focus:bg-gray-200"
                type="text"
                placeholder="Av. João das Couves"
              />
            </div>
            <div className="relative mb-4">
              <p className="text-sm absolute z-1 bottom-10 px-1">Número</p>
              <input
                className="h-12 rounded bg-gray-100 px-3 outline-none focus:bg-gray-200"
                type="text"
                placeholder="0"
              />
            </div>
            <div className="relative mb-4">
              <p className="text-sm absolute z-1 bottom-10 px-1">Complemento</p>
              <input
                className="h-12 rounded bg-gray-100 px-3 outline-none focus:bg-gray-200"
                type="text"
                placeholder="Lt, Qd, etc..."
              />
            </div>
            <div className="relative mb-4">
              <p className="text-sm absolute z-1 bottom-10 px-1">CEP</p>
              <input
                className="h-12 rounded bg-gray-100 px-3 outline-none focus:bg-gray-200"
                type="text"
                placeholder="00.000-000"
              />
            </div>
          </div>
          <div className="flex flex-row gap-3">
            <div className="relative mb-4">
              <p className="text-sm absolute z-1 bottom-10 px-1">Bairro</p>
              <input
                className="h-12 rounded bg-gray-100 px-3 outline-none focus:bg-gray-200"
                type="text"
                placeholder=""
              />
            </div>
            <div className="relative mb-4">
              <p className="text-sm absolute z-1 bottom-10 px-1">Município</p>
              <input
                className="h-12 rounded bg-gray-100 px-3 outline-none focus:bg-gray-200"
                type="text"
                placeholder=""
              />
            </div>
            <div className="relative mb-4">
              <p className="text-sm absolute z-1 bottom-10 px-1">Estado</p>
              <input
                className="h-12 rounded bg-gray-100 px-3 outline-none focus:bg-gray-200"
                type="text"
                placeholder=""
              />
            </div>
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
            <div className="relative mb-4">
              <p className="text-sm absolute z-1 bottom-10 px-1">Email</p>
              <input
                className="h-12 rounded bg-gray-100 px-3 outline-none focus:bg-gray-200"
                type="email"
                placeholder="email@email.com"
              />
            </div>
          </div>

          <button
            className="flex flex-row gap-2 p-8 h-12 text-xl items-center rounded bg-gray-400 hover:bg-[#071952] hover:text-[#A5F1E9]"
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
