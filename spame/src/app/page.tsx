import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-row w-screen h-screen">
      <aside className="flex h-full w-8/12 justify-center items-center">
        <Image src={"/assets/logo.png"} width={500} height={300} alt="logo" />
      </aside>

      <aside className="flex flex-col h-full w-4/12 justify-center items-center bg-[#A5F1E9]">
        <header>
          <h1>Login</h1>
        </header>
        <form className="flex flex-col justify-center items-center m-8 gap-3">
          <input type="email" placeholder="Email"></input>
          <input type="password" placeholder="Senha"></input>

          <button>Entrar</button>
        </form>
      </aside>
    </main>
  );
}
