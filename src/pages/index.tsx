import React, { ChangeEvent, useState } from "react"
import { Roboto } from "next/font/google"
import { BiBook } from "react-icons/bi"
import Button from "@/components/ui/button"
import Input from "@/components/ui/input"
import HelpModal from "@/components/modals/help"
import AnswerModal from "@/components/modals/answer"

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] })

export default function Home() {
  const [showModalHelp, setShowModalHelp] = useState(true)
  const [showModalAnswer, setShowModalAnswer] = useState(false)
  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")

  const handleQuestion = () => {
    setAnswer("A resposta para a sua pergunta é...")

    setShowModalHelp(false)
    setShowModalAnswer(true)
  }

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
              value={question}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setQuestion(e.target.value)}
            />
            <Button
              className="absolute inset-y-0 right-0 px-4 text-white rounded-full rounded-l-none border border-gray-300"
              style={{ backgroundColor: "rgb(var(--button-color))", _hover: { opacity: 0.5 } }}
              onClick={() => handleQuestion()}
            >
              Perguntar
            </Button>
          </div>
        </div>
        {showModalHelp && <HelpModal />}
        {showModalAnswer && <AnswerModal answer={answer} />}
      </main>
      <footer className="flex items-center justify-center w-full">
        <p>
          © {new Date().getFullYear()} -{" "}
          <a href="https://www.linkedin.com/in/gabriel-h-oliveira" target="_blank">
            Gabriel Oliveira
          </a>
        </p>
      </footer>
    </div>
  )
}
