export default function AnswerModal({ answer }: { answer: string }) {
  return (
    <div className="flex border-b border-neutral-800 bg-zinc-800/60 from-inherit static w-full max-w-4xl rounded-xl borderp-4 p-4">
      <div>
        <div>
          <p>{answer}</p>
        </div>
      </div>
    </div>
  )
}
