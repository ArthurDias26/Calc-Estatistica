'use client'

import "./globals.css";
import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }) {

  const pathName = usePathname()

  return (
    <html lang="pt-br">
      <body>
        <div className="font-sans bg-background">
      <header className="mt-6 mb-16">
        <h1 className="text-center font-bold underline text-4xl">CALCULADORA ESTATÍSTICA</h1>

        <p className="text-center mt-4 mb-6">Escolha uma operação:</p>

        <nav>
          <ul className="grid grid-cols-2 grid-rows-1 gap-4 m-auto max-w-[95vw] xl:max-w-[80vw] lg:grid-cols-4 justify-items-center px-3">
            <li className={`max-w-[240px] text-center py-1.5 px-4 border-2 border-white rounded-3xl transition-all duration-500 font-bold hover:bg-white hover:text-black ${pathName == "/ICMedia" ? "bg-white text-black": ""}`}>
              <Link className="block" href={"/ICMedia"}>Intervalo de Confiança (Média)</Link>
            </li>
            
            <li className={`max-w-[240px] text-center py-1.5 px-4 border-2 border-white rounded-3xl transition-all duration-500 font-bold hover:bg-white hover:text-black ${pathName == "/ICProporcao" ? "bg-white text-black": ""}`}>
              <Link className="block" href={"/ICProporcao"}>Intervalo de Confiança (Proporção)</Link>
            </li>

            <li className={`max-w-[240px] text-center py-1.5 px-4 border-2 border-white rounded-3xl transition-all duration-500 font-bold hover:bg-white hover:text-black ${pathName == "/TAMedia" ? "bg-white text-black": ""}`}>
              <Link className="block" href={"/TAMedia"}>Tamanho da Amostra (Média)</Link>
            </li>

            <li className={`max-w-[240px] text-center py-1.5 px-4 border-2 border-white rounded-3xl transition-all duration-500 font-bold hover:bg-white hover:text-black ${pathName == "/TAProporcao" ? "bg-white text-black": ""}`}>
              <Link className="block" href={"/TAProporcao"}>Tamanho da Amostra (Proporção)</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <div className=" w-[320px]  md:w-[600px] m-auto  rounded-xl bg-[#1a1a1a] text-white">
          <div className=" z-10 rounded-[11px] bg-[#1a1a1a] shadow-[0_0_20px_#3b82f6aa] px-6 py-8">
            {children}
          </div>
        </div>
      </main>

      <footer className="h-12 w-full flex justify-center items-center mt-12">
            <p className="text-center">Copyrigth Arthur Dias e Samuel Bispo 2025 &copy;</p>
      </footer>
    </div>
      </body>
    </html>
  );
}
