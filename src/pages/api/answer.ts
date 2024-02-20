import { OpenAIStream, StreamingTextResponse } from "ai"
import OpenAI from "openai"

if (!process.env.OPENAI_API_KEY) {
  throw new Error("OPENAI_API_KEY is not set")
}

export const runtime = "edge"

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

export default async function handler(req: Request) {
  const { messages } = await req.json()

  if (!messages) {
    return new Response("A propriedade 'messages' não foi encontrada no corpo da solicitação.", { status: 400 })
  }

  const content = `I want you to act like an Answered Bible. You will respond based on your knowledge of biblical principles, carefully following user instructions with a biblical and modern point of view. Answer in Portuguese and give a verse for the person to read based on the question. ${messages[0].content}`

  const response = await client.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: content,
      },
    ],
    temperature: 0.7,
    stream: true,
    max_tokens: 100,
  })

  const stream = OpenAIStream(response)

  return new StreamingTextResponse(stream)
}
