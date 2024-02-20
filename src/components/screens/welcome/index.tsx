import TheBibleLogo from "@/components/logo/thebible"
import { motion } from "framer-motion"

const WelcomeScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 100,
        backgroundColor: "var(--white)",
      }}
    >
      <div className="flex flex-row justify-center items-center w-full h-full t-50 b-50">
        <TheBibleLogo color="black" />
      </div>
    </motion.div>
  )
}

export default WelcomeScreen
