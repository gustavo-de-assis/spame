import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-row w-screen h-screen">
      <aside className="flex h-full w-8/12 justify-center items-center">
        <Image src={"/assets/logo.png"} width={500} height={300} alt="logo" />
      </aside>

      <aside className="flex flex-col h-full w-4/12 items-center bg-[#A5F1E9]">
        <header className="m-36">
          <h1 className=" font-medium text-7xl text-[#071952]">Login</h1>
        </header>
        <form className="flex flex-col justify-center items-center m-8 gap-5">
          <div className="relative">
            <p className="text-sm absolute z-1 bottom-10 px-1">Email</p>
            <input
              className="h-12 rounded bg-gray-100 px-3 outline-none focus:bg-gray-200"
              type="email"
              placeholder="Email"
            />
          </div>

          <div className="relative">
            <p className="text-sm absolute z-1 bottom-10 px-1">Senha</p>
            <input
              className="h-12 rounded bg-gray-100 px-3 outline-none focus:bg-gray-200"
              type="password"
              placeholder="Senha"
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
