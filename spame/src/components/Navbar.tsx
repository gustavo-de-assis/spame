import Image from "next/image";

export default function Navbar() {
  return (
    <main>
      <nav className="flex flex-row bg-[#071952] h-16 justify-between items-center px-3 fixed top-0 right-0 z-10 w-full">
        <div>
          <Image src={"/assets/logo.png"} width={60} height={38} alt="logo" />
        </div>

        <div className="flex gap-3 font-semibold text-lg text-[#A5F1E9]">
          <p>Olá Beltrano!</p>
          <p>Logout</p>
        </div>
      </nav>
    </main>
  );
}
