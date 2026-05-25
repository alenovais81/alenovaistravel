export default function AboutCTA() {
  return (
    <section className="py-28 bg-violet-600">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-black mb-8">
          Pronto para viver sua próxima história?
        </h2>

        <p className="text-xl text-violet-100 mb-12">
          Vamos planejar juntos uma viagem memorável,
          personalizada para o seu estilo.
        </p>

        <a
          href="https://wa.me/55SEUNUMERO"
          target="_blank"
          className="inline-flex items-center justify-center px-10 py-5 rounded-2xl bg-black text-white font-bold text-lg hover:scale-105 transition"
        >
          Conversar no WhatsApp
        </a>
      </div>
    </section>
  )
}