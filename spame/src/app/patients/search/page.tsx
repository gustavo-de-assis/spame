import Image from "next/image";
import Link from "next/link";
import { BsSearch, BsPersonFillAdd } from "react-icons/bs";

export default function patientSearch() {
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

      <section className="flex flex-row gap-1 items-center">
        <form className="flex flex-row gap-3 p-2">
          <input
            className="w-[600px] h-9 px-1"
            type="text"
            placeholder="Digite o nome, cpf ou ID do paciente"
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
    </main>
  );
}
