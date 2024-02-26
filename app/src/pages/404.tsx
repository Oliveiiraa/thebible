export default function notFound() {
  return (
    <main
      className="h-screen w-full flex flex-col justify-center items-center"
      style={{
        backgroundImage: "url('/background.png')",
        backgroundSize: "cover",
      }}
    >
      <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
      <div
        className="bg-primary px-2 text-sm text-white rounded rotate-12 absolute"
        style={{ backgroundColor: "rgb(var(--button-color))" }}
      >
        Página não existe
      </div>
      <button className="mt-5">
        <a
          className="relative inline-block text-sm font-medium text-white group active:text-purple-800 focus:outline-none focus:ring"
          href="/"
        >
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-white group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <span
            className="relative block px-8 py-3 border border-current"
            style={{ backgroundColor: "rgb(var(--button-color))" }}
          >
            Voltar para home
          </span>
        </a>
      </button>
    </main>
  )
}
