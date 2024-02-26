import React, { useEffect, useState } from "react"
import { Roboto } from "next/font/google"
import Button from "@/components/ui/button"
import Input from "@/components/ui/input"
import HelpModal from "@/components/modals/help"
import AnswerModal from "@/components/modals/answer"
import { useChat } from "ai/react"
import WelcomeScreen from "@/components/screens/welcome"
import TheBibleLogo from "@/components/logo/thebible"
import Head from "next/head"

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] })

export default function Home() {
  const [state, setState] = useState({
    showWelcome: true,
    showModalHelp: true,
    showModalAnswer: false,
    answer: "",
  })
  const { messages, handleSubmit, input, handleInputChange } = useChat({
    api: "/api/answer",
  })

  useEffect(() => {
    const displayTime = 3000
    const timer = setTimeout(() => {
      setState(prevState => ({ ...prevState, showWelcome: false }))
    }, displayTime)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (messages.length > 0) {
      setState(prevState => ({
        ...prevState,
        showModalAnswer: true,
        showModalHelp: false,
        answer:
          messages[messages.length - 1].role === "user" ? "Estou pensando..." : messages[messages.length - 1].content,
      }))
    }
  }, [messages])

  useEffect(() => {
    const preventScroll = (e: TouchEvent) => {
      e.preventDefault()
    }
    document.body.addEventListener("touchmove", preventScroll, { passive: false })

    return () => {
      document.body.removeEventListener("touchmove", preventScroll)
    }
  }, [])

  return (
    <>
      <Head>
        <title>The Bible | Sua IA para ajuda biblica</title>
      </Head>
      {state.showWelcome && <WelcomeScreen />}
      <div
        className={`flex h-screen flex-col items-center justify-around md:justify-between p-8 sm:p-24 ${roboto.className}`}
        style={{ overflowY: "auto" }}
      >
        <header className="fixed justify-center items-center top-20">
          <TheBibleLogo color="white" />
        </header>
        <main className="flex flex-col items-center justify-center w-full flex-grow">
          <div className="flex w-full max-w-4xl items-center mb-6">
            <form className="relative flex-grow mr-4" onSubmit={handleSubmit}>
              <Input
                className="w-full py-2 pl-4 pr-12 rounded-full text-white border border-neutral-800 bg-zinc-800/60 shadow-md"
                style={{ _hover: { opacity: 0.5 } }}
                placeholder="Como posso te ajudar hoje?"
                value={input}
                onChange={handleInputChange}
              />
              <Button
                className="absolute inset-y-0 right-0 px-4 text-white rounded-full rounded-l-none border-r border-t border-b border-neutral-800"
                style={{ backgroundColor: "rgb(var(--button-color))", _hover: { opacity: 0.5 } }}
                type="submit"
              >
                Perguntar
              </Button>
            </form>
          </div>
          {state.showModalHelp && <HelpModal />}
          {state.showModalAnswer && <AnswerModal answer={state.answer} />}
        </main>
        <footer className="fixed bottom-10">
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
