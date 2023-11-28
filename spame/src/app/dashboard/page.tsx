import MenuButton from "@/components/MenuButton";
import Navbar from "@/components/Navbar";

import {
  BsFillPersonVcardFill,
  BsCalendarDateFill,
  BsGraphUp,
} from "react-icons/bs";

import { MdPersonalInjury, MdSettings } from "react-icons/md";

export default function dashboard() {
  return (
    <main className="relative ">
      <Navbar />
      <section className="flex flex-row w-75% justify-evenly mt-10">
        <MenuButton icon={BsCalendarDateFill} text="Agenda" />
        <MenuButton icon={BsFillPersonVcardFill} text="Funcionários" />
        <MenuButton icon={MdPersonalInjury} text="Pacientes" />
        <MenuButton icon={BsGraphUp} text="Relatórios" />
        <MenuButton icon={MdSettings} text="Configurações" />
      </section>
    </main>
  );
}
