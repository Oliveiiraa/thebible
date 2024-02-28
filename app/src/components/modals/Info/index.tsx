import { useState, useEffect } from "react"
import { FaBible, FaInfoCircle } from "react-icons/fa"
import { Tooltip } from "react-tooltip"

type InfoModalProps = {
  setModalOpen: (isOpen: boolean) => void
}

const InfoModal = ({ setModalOpen }: InfoModalProps) => {
  const [showModal, setShowModal] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    if (showModal) {
      setModalOpen(true)
    } else {
      setModalOpen(false)
    }
  }, [showModal])

  return (
    <>
      <Tooltip id="info" />

      <FaInfoCircle
        className={`inline-block absolute top-8 ${isMobile ? "right-4" : "right-8"} cursor-pointer text-3xl`}
        onClick={() => setShowModal(true)}
        data-tooltip-content="Sobre o The Bible"
        data-tooltip-id="info"
        data-tooltip-place="left"
      />
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className={`relative w-auto my-6 mx-auto max-w-3xl`}>
              <div
                className="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none"
                style={{ backgroundColor: "var(--white)" }}
              >
                <div className="flex items-start justify-between p-5 rounded-t">
                  <h3 className="text-3xl font-semibold" style={{ color: "var(--text-color)" }}>
                    <FaBible className="inline-block mr-2" />
                    Sobre o The Bible
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
                <div
                  className="relative p-6 flex-auto"
                  style={{ maxHeight: isMobile ? "60vh" : "none", overflowY: isMobile ? "scroll" : "auto" }}
                >
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed" style={{ color: "var(--text-color)" }}>
                    Bem-vindo(a) ao nosso projeto de assistência bíblica! Estamos comprometidos em fornecer uma
                    plataforma acessível e informativa para aqueles que desejam explorar a Bíblia e aprofundar sua
                    compreensão espiritual.
                    <br />
                    <br />
                    Nossa missão é disponibilizar uma variedade de recursos, incluindo busca de versículos, estudos
                    bíblicos, reflexões e muito mais, tudo com o objetivo de ajudar você em sua jornada de fé.
                    <br />
                    <br />
                    É importante destacar que este projeto está em constante evolução. Estamos trabalhando arduamente
                    para adicionar novos recursos, aprimorar a usabilidade e garantir que a experiência do usuário seja
                    enriquecedora e satisfatória.
                    <br />
                    <br />
                    Se você tiver alguma sugestão, comentário ou encontrar algum problema enquanto navega em nossa
                    aplicação, não hesite em nos informar. Sua opinião é extremamente valiosa para nós enquanto buscamos
                    melhorar e expandir este projeto. O email para contato é:{" "}
                    <a href="mailto:gvbriel.oliveira@gmail.com?subject=Feedback TheBible" className="text-red-800">
                      gvbriel.oliveira@gmail.com
                    </a>
                    .
                    <br />
                    <br />
                    Compartilhe agora e faça parte dessa missão de difundir a luz da Palavra! Espero que você aproveite
                    sua jornada conosco! 📖
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
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  )
}

export default InfoModal
