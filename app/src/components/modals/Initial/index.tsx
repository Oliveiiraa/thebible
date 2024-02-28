import { useEffect, useState } from "react"

const InitialModal = () => {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const firstAccess = localStorage.getItem("firstAccess")
    if (firstAccess === null) {
      localStorage.setItem("firstAccess", "true")

      setTimeout(() => {
        setShowModal(true)
      }, 3500)
    }
  }, [])

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div
                className="border-0 rounded-lg shadow-lg relative flex flex-col w-fu outline-none focus:outline-none"
                style={{ backgroundColor: "var(--white" }}
              >
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold" style={{ color: "var(--text-color)" }}>
                    Olá! 👋
                  </h3>
                </div>
                <hr
                  style={{
                    width: "100%",
                    height: "1px",
                    border: "none",
                    backgroundColor: "var(--text-color)",
                    opacity: 0.2,
                  }}
                />
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed" style={{ color: "var(--text-color)" }}>
                    Bem-vindo(a) à nossa aplicação de assistência bíblica! Estou aqui para ajudá-lo a explorar e
                    compreender as riquezas da Palavra de Deus. É importante ressaltar que este projeto é sem fins
                    lucrativos e está em constante desenvolvimento, com o objetivo de fornecer uma ferramenta valiosa
                    para aqueles que buscam orientação espiritual.
                    <br />
                    <br /> Estamos sempre abertos a feedbacks e sugestões para melhorar a experiência do usuário. Por
                    favor, envie seus comentários para{" "}
                    <a href="mailto:gvbriel.oliveira@gmail.com?subject=Feedback TheBible" className="text-red-800">
                      gvbriel.oliveira@gmail.com
                    </a>
                    . Sua opinião é fundamental para nós enquanto continuamos aprimorando esta plataforma para servir
                    melhor à comunidade.
                  </p>
                </div>

                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-whitefont-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    style={{ backgroundColor: "rgb(var(--button-color))" }}
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Fechar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  )
}

export default InitialModal
