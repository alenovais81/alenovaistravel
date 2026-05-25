export default function AboutStory() {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-[#0b0b12] to-[#13131d]">
      <div className="absolute inset-0 opacity-[0.04] bg-[url('/worldmap.png')] bg-center bg-no-repeat bg-contain" />

      <div className="relative max-w-5xl mx-auto px-6">
        <span className="text-violet-400 uppercase tracking-[0.3em] text-sm">
          Minha história
        </span>

        <h2 className="text-5xl md:text-6xl font-black mt-6 mb-12 leading-tight">
          Viajar sempre foi mais do que turismo.
        </h2>

        <div className="space-y-8 text-zinc-300 text-lg md:text-xl leading-relaxed">
          <p>
            Sou publicitário, nômade digital e apaixonado por descobrir novas culturas.
            Ao longo dos anos explorei destinos que vão de auroras boreais na Finlândia
            a desertos no Egito, passando por experiências urbanas, natureza extrema,
            viagens independentes e roteiros fora do óbvio.
          </p>

          <p>
            Cada viagem trouxe aprendizados reais sobre planejamento,
            logística, experiências, erros, acertos e o que realmente faz
            uma viagem valer a pena.
          </p>

          <p>
            Hoje transformo essa bagagem em um atendimento mais próximo,
            humano e personalizado para pessoas que buscam experiências memoráveis.
          </p>

          <p className="text-white font-bold text-2xl md:text-3xl pt-6">
            Um pouco de luxo.
            <br />
            Um pouco de perrengue.
            <br />
            E muitas histórias pelo caminho.
          </p>
        </div>
      </div>
    </section>
  )
}