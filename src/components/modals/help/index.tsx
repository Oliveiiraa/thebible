import { FaLightbulb } from "react-icons/fa"

export default function HelpModal() {
  return (
    <div className="flex justify-center border-b border-neutral-800 bg-zinc-800/60 from-inherit static w-auto rounded-xl borderp-4 p-4">
      <div className="w-auto">
        <div className="flex items-center mb-4">
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
  )
}
