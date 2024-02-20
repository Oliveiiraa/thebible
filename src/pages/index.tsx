import React, { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { Roboto } from "next/font/google"
import { BiBook } from "react-icons/bi"
import Button from "@/components/ui/button"
import Input from "@/components/ui/input"
import HelpModal from "@/components/modals/help"
import AnswerModal from "@/components/modals/answer"
import { useChat } from "ai/react"
import WelcomeScreen from "@/components/screens/welcome"
import TheBibleLogo from "@/components/logo/thebible"

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] })

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true)
  const [showModalHelp, setShowModalHelp] = useState(true)
  const [showModalAnswer, setShowModalAnswer] = useState(false)
  const [answer, setAnswer] = useState("")
  const { messages, handleSubmit, input, handleInputChange } = useChat({
    api: "/api/answer",
  })

  useEffect(() => {
    const displayTime = 3000

    const timer = setTimeout(() => {
      setShowWelcome(false)
    }, displayTime)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (messages.length > 0) {
      setShowModalAnswer(true)
      setShowModalHelp(false)

      const lastMessage = messages[messages.length - 1]
      if (lastMessage.role === "user") {
        setAnswer("Estou pensando...")
      } else {
        setAnswer(lastMessage.content)
      }
    }
  }, [messages])

  return (
    <>
      {showWelcome && <WelcomeScreen />}
      <div className={`flex h-screen flex-col items-center justify-between p-8 sm:p-24 ${roboto.className}`}>
        <header className="flex flex-row justify-center items-center">
          <TheBibleLogo color="white" />
        </header>
        <main className="flex flex-col items-center justify-center w-full">
          <div className="flex w-full max-w-4xl items-center mb-6">
            <form className="relative flex-grow mr-4" onSubmit={handleSubmit}>
              <Input
                className="w-full py-2 pl-4 pr-12 rounded-full border border-gray-300"
                style={{ fontSize: "1rem", color: "var(--text-color)" }}
                placeholder="Faça sua pergunta..."
                value={input}
                onChange={handleInputChange}
              />
              <Button
                className="absolute inset-y-0 right-0 px-4 text-white rounded-full rounded-l-none border border-gray-300"
                style={{ backgroundColor: "rgb(var(--button-color))", _hover: { opacity: 0.5 } }}
                type="submit"
              >
                Perguntar
              </Button>
            </form>
          </div>
          {showModalHelp && <HelpModal />}
          {showModalAnswer && <AnswerModal answer={answer} />}
        </main>
        <footer className="flex items-center justify-center w-full">
          <p>
            © {new Date().getFullYear()} -{" "}
            <a href="https://www.linkedin.com/in/gabriel-h-oliveira" target="_blank" rel="noopener noreferrer">
              Gabriel Oliveira
            </a>
          </p>
        </footer>
      </div>
    </>
  )
}
