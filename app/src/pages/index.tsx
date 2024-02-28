import React, { useCallback, useEffect, useState } from "react"
import { Roboto } from "next/font/google"
import Button from "@/components/ui/Button"
import Input from "@/components/ui/Input"
import HelpModal from "@/components/modals/Help"
import AnswerModal from "@/components/modals/Answer"
import { useChat } from "ai/react"
import WelcomeScreen from "@/components/screens/Welcome"
import TheBibleLogo from "@/components/logos/Thebible"
import Head from "next/head"
import { toast } from "react-toastify"
import InitialModal from "@/components/modals/Initial"
import InfoModal from "@/components/modals/Info"

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] })

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true)
  const [showModalHelp, setShowModalHelp] = useState(true)
  const [showModalAnswer, setShowModalAnswer] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [answer, setAnswer] = useState("")

  const onError = useCallback(() => {
    toast.error(
      "Ocorreu um erro ao processar a sua pergunta e fomos notificados. Por favor, tente novamente mais tarde."
    )
  }, [])

  const { messages, handleSubmit, input, handleInputChange } = useChat({
    api: "/api/answer",
    onError,
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
      setAnswer(
        messages[messages.length - 1].role === "user" ? "Estou pensando..." : messages[messages.length - 1].content
      )
    }
  }, [messages])

  useEffect(() => {
    const preventScroll = (e: TouchEvent) => {
      e.preventDefault();
    };
  
    const enableScroll = () => {
      document.body.removeEventListener("touchmove", preventScroll);
    };
  
    const disableScroll = () => {
      document.body.addEventListener("touchmove", preventScroll, { passive: false });
    };
  
    if (modalOpen) {
      enableScroll();
    } else {
      disableScroll();
    }
  
    return () => {
      document.body.removeEventListener("touchmove", preventScroll);
    };
  }, [modalOpen])

  return (
    <>
      <Head>
        <title>The Bible | Sua IA para ajuda biblica</title>
      </Head>
      {showWelcome && <WelcomeScreen />}
      <InfoModal setModalOpen={setModalOpen} />
      <InitialModal setModalOpen={setModalOpen} />
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
                className="w-full py-2 pl-4 pr-12 rounded-full text-white border border-neutral-800 outline-none bg-zinc-800/60 shadow-lg"
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
          {showModalHelp && <HelpModal />}
          {showModalAnswer && <AnswerModal answer={answer} />}
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
