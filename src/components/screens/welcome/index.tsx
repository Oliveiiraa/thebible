import TheBibleLogo from "@/components/logo/thebible"
import { motion } from "framer-motion"

const WelcomeScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1, backgroundColor: "var(--white)" }}
      transition={{ duration: 1 }}
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 100,
      }}
    >
      <div className="flex flex-row justify-center items-center w-full h-full t-50 b-50">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 0.5 }}>
          <TheBibleLogo color="black" />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default WelcomeScreen
