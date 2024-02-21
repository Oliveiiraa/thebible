import "@/styles/globals.css"
import { Metadata } from "next"
import type { AppProps } from "next/app"

export const metadata: Metadata = {
  title: "The Bible | Sua IA para ajuda biblica",
  description: "Inteligência artificial para guia espiritual.",
  icons: [
    {
      url: "/favicon.png",
      type: "image/png",
    },
  ],
}

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
