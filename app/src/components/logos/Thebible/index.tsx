import { FaBible } from "react-icons/fa"

interface TheBibleLogoProps {
  color: "white" | "black"
}

const TheBibleLogo = ({ color }: TheBibleLogoProps) => {
  const textColor = color === "white" ? "var(--white)" : "rgb(var(--button-color))"

  return (
    <div className="flex">
      <div className="flex items-center justify-center w-full">
        <h1 className="text-4xl sm:text-6xl font-bold" style={{ color: textColor }}>
          <FaBible className="text-4xl sm:text-6xl inline-block mr-2" />
          The Bible
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <p className="text-4xl sm:text-6xl" style={{ color: textColor }}>
          |
        </p>
        <p className="text-sm" style={{ color: textColor }}>
          Sua IA para ajuda bíblica
        </p>
      </div>
    </div>
  )
}

export default TheBibleLogo
