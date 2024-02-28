import { useState, useEffect } from "react"
import { FaWhatsapp } from "react-icons/fa"
import { FiCopy } from "react-icons/fi"
import { Tooltip } from "react-tooltip"

const AnswerModal = ({ answer }: { answer: string }) => {
  const [copied, setCopied] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const handleCopy = () => {
    navigator.clipboard.writeText(answer)
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <>
      <Tooltip id="copy" />
      <Tooltip id="whats" />

      <div
        className="flex justify-center border-b border-neutral-800 bg-zinc-800/60 from-inherit static w-auto rounded-xl borderp-4 p-4"
        style={{ maxHeight: "15em", overflowY: "auto", maxWidth: isDesktop ? "50vw" : "none" }}
      >
        <div>
          <div className="flex items-center">
            <p>{answer}</p>
          </div>
          <div className="flex justify-between items-center">
            <blockquote className="mt-4 text-sm border-l-4 border-slate-300 pl-3 text-slate-200">The Bible</blockquote>
            <div className="flex">
              <a
                className="ml-2 text-slate-200 hover:text-slate-300 cursor-pointer"
                data-tooltip-content="Compartilhar no WhatsApp"
                data-tooltip-id="whats"
                data-tooltip-place="bottom"
                href={`https://api.whatsapp.com/send?text=Ol%C3%A1%2C%20encontrei%20uma%20resposta%20interessante%20no%20The%20Bible%3A%20https%3A%2F%2Fthebible.com.br%2F%20${answer}`}
              >
                <FaWhatsapp />
              </a>
              <a
                className="ml-2 text-slate-200 hover:text-slate-300 cursor-pointer"
                onClick={handleCopy}
                data-tooltip-content={copied ? "Copiado!" : "Copiar"}
                data-tooltip-id="copy"
                data-tooltip-place="bottom"
              >
                <FiCopy />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AnswerModal
