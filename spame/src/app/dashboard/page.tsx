import Image from "next/image";
import { GrSchedule } from "react-icons/gr";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { MdPersonalInjury, MdSettings } from "react-icons/md";

export default function dashboard() {
  return (
    <main>
      <nav className="flex flex-row bg-[#071952] h-11 justify-between items-center px-3">
        <div>
          <Image src={"/assets/logo.png"} width={60} height={38} alt="logo" />
        </div>

        <div className="flex gap-3 font-normal text-[#A5F1E9]">
          <p>Olá Beltrano!</p>
          <p>Logout</p>
        </div>
      </nav>

      <section className="flex flex-row w-75% justify-evenly">
        <button className="flex flex-col items-center mt-16 gap-4 hover:bg-[#071952] hover:text-[#A5F1E9] hover:font-medium p-3 rounded ">
          <div className=" text-6xl">
            <GrSchedule />
          </div>
          <p>Agenda</p>
        </button>

        <button className="flex flex-col items-center mt-16 gap-4 hover:bg-[#071952] hover:text-[#A5F1E9] hover:font-medium p-3 rounded">
          <div className=" text-6xl">
            <BsFillPersonVcardFill />
          </div>
          <p>Funcionários</p>
        </button>

        <button className="flex flex-col items-center mt-16 gap-4 hover:bg-[#071952] hover:text-[#A5F1E9] hover:font-medium p-3 rounded">
          <div className=" text-6xl">
            <MdPersonalInjury />
          </div>
          <p>Pacientes</p>
        </button>

        <button className="flex flex-col items-center mt-16 gap-4 hover:bg-[#071952] hover:text-[#A5F1E9] hover:font-medium p-3 rounded">
          <div className=" text-6xl">
            <MdSettings />
          </div>
          <p>Configurações</p>
        </button>
      </section>
    </main>
  );
}
