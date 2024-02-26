export default function AnswerModal({ answer }: { answer: string }) {
  return (
    <div
      className="flex justify-center border-b border-neutral-800 bg-zinc-800/60 from-inherit static w-auto rounded-xl borderp-4 p-4"
      style={{ maxHeight: "15em", overflowY: "auto", maxWidth: "50vw" }}
    >
      <div>
        <div>
          <p>{answer}</p>
          <blockquote className="mt-4 text-sm border-l-4 border-slate-300 pl-3 text-slate-200">The Bible</blockquote>
        </div>
      </div>
    </div>
  )
}
