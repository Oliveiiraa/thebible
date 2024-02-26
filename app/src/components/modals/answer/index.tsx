import { useState } from "react"
import { FiCopy } from "react-icons/fi"
import { Tooltip } from "react-tooltip"

export default function AnswerModal({ answer }: { answer: string }) {
  const [copied, setCopied] = useState(false)

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

    <div
      className="flex justify-center border-b border-neutral-800 bg-zinc-800/60 from-inherit static w-auto rounded-xl borderp-4 p-4"
      style={{ maxHeight: "15em", overflowY: "auto", maxWidth: "50vw" }}
    >
      <div>
        <div className="flex items-center">
          <p>{answer}</p>
        </div>
        <div className="flex justify-between items-center">
          <blockquote className="mt-4 text-sm border-l-4 border-slate-300 pl-3 text-slate-200">The Bible</blockquote>
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
    </>
  )
}
