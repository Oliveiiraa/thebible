import { BiBook } from "react-icons/bi"

export default function TheBibleLogo({ color }: { color: "white" | "black" }) {
  return (
    <div className="flex">
      <div className="flex items-center justify-center w-full">
        <h1
          className="text-4xl sm:text-6xl font-bold"
          style={{ color: color === "white" ? "var(--white)" : "rgb(var(--button-color))" }}
        >
          <BiBook className="text-4xl sm:text-6xl inline-block mr-2" />
          The Bible
        </h1>
      </div>
      <p
        className="text-4xl sm:text-6xl"
        style={{ color: color === "white" ? "var(--white)" : "rgb(var(--button-color))" }}
      >
        |
      </p>
      <p className="text-sm" style={{ color: color === "white" ? "var(--white)" : "rgb(var(--button-color))" }}>
        Sua IA para ajuda bíblica
      </p>
    </div>
  )
}
