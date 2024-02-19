import { Roboto } from "next/font/google"
import { BiBook } from "react-icons/bi"
import { FaLightbulb } from "react-icons/fa"
import Button from "@/components/ui/button"
import Input from "@/components/ui/input"

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] })

export default function Home() {
  return (
    <div className={`flex h-screen flex-col items-center justify-between p-8 sm:p-24 ${roboto.className}`}>
      <header className="flex flex-row justify-center items-center">
        <div className="flex items-center justify-center w-full">
          <h1 className="text-4xl sm:text-6xl font-bold">
            <BiBook className="text-4xl sm:text-6xl inline-block mr-2" />
            The Bible
          </h1>
        </div>
        <p className="text-4xl sm:text-6xl">|</p>
        <p className="text-sm">Sua IA para ajuda bíblica</p>
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
              className="absolute inset-y-0 right-0 px-4 text-white rounded-full rounded-l-none border border-gray-300"
              style={{ backgroundColor: "rgb(var(--button-color))", _hover: { opacity: 0.5 } }}
            >
              Perguntar
            </Button>
          </div>
        </div>
        <div className="flex justify-center border-b border-neutral-800 bg-zinc-800/60 from-inherit static w-auto rounded-xl borderp-4 p-4">
          <div>
            <div className="flex items-center">
              <FaLightbulb className="text-2xl sm:text-3xl" />
              <h2 className="text-xl sm:text-2xl font-bold ml-2">Como funciona?</h2>
            </div>
            <div>
              <p>
                Faça uma pergunta e receba uma resposta baseada na Bíblia. <br />
              </p>
              <p>
                Exemplo:{" "}
                <b>
                  <q>Estou passando por problemas de ansiedade</q>
                </b>
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer className="flex items-center justify-center w-full">
        <p>© {new Date().getFullYear()} - Softnation</p>
      </footer>
    </div>
  )
}
