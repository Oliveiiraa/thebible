import { Roboto } from "next/font/google"
import Button from "@/components/ui/button"
import Input from "@/components/ui/input"
import { BiBook } from "react-icons/bi"
import { FaLightbulb } from "react-icons/fa"

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] })

export default function Home() {
  return (
    <div className={`flex min-h-screen flex-col items-center justify-between p-24 ${roboto.className}`}>
      <header className="flex flex-row justify-center items-center">
        <div className="flex items-center justify-center w-full">
          <h1 className="text-6xl font-bold">
            <BiBook className="text-6xl inline-block mr-2" />
            The Bible
          </h1>
        </div>
        <p className="text-6xl">|</p>
        <p className="text-sm">Sua IA para ajuda biblica</p>
      </header>
      <main className="flex flex-col items-center justify-center w-full">
        <div className="flex w-full max-w-4xl items-center mb-6">
          <div className="relative flex-grow mr-4">
            <Input
              className="w-full py-2 pl-4 pr-12 rounded-full border border-gray-300"
              style={{ fontSize: "1rem", color: "var(--text-color)" }}
              placeholder="Faça sua pergunta..."
            />
            <Button
              className="absolute inset-y-0 right-0 px-4 text-white rounded-full rounded-l-none"
              style={{ backgroundColor: "rgb(var(--background-start-rgb))", _hover: { opacity: 0.5 } }}
            >
              Perguntar
            </Button>
          </div>
        </div>
        <div className="flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <div>
            <div className="flex items-center">
              <FaLightbulb className="text-3xl" />
              <h2 className="text-2xl font-bold ml-2">Como funciona?</h2>
            </div>
            <p className="ml-2">
              Faça uma pergunta e receba uma resposta baseada na Bíblia. <br />
              <p>
                Exemplo:{" "}
                <b>
                  <q>Estou passando por problemas de ansiedade</q>
                </b>
              </p>
            </p>
          </div>
        </div>
      </main>
      <footer className="flex items-center justify-center w-full">
        <p>© 2024 - Softnation</p>
      </footer>
    </div>
  )
}
