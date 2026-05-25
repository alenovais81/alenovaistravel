'use client'

export default function Footer() {
  return (
    <footer className="bg-[#121212] border-t border-white/5 mt-32">

      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-14">

          <div>

            <img
              src="/logo-white.png"
              alt="Alenovais Travel"
              className="w-[220px] mb-8"
            />

            <p className="text-white/50 leading-relaxed">
            
              Curadoria personalizada para viagens
              memoráveis ao redor do mundo.
            </p>

          </div>

          <div>

            <h3 className="text-white font-black mb-6">
              Institucional
            </h3>

            <div className="flex flex-col gap-4 text-white/50">

              <a
                href="/about"
                className="hover:text-white transition"
              >
                Quem somos
              </a>

              <a
                href="#"
                className="hover:text-white transition"
              >
                Solicitar cotação
              </a>

              <a
                href="#"
                className="hover:text-white transition"
              >
                Contato
              </a>

            </div>

          </div>

          <div>

            <div>

  <h3 className="text-white font-black mb-6">
    Destinos
  </h3>

  <div className="grid grid-cols-2 gap-y-4 gap-x-10 text-white/50">

    <a href="#" className="hover:text-white transition">
      Islândia
    </a>

    <a href="#" className="hover:text-white transition">
      Maldivas
    </a>

    <a href="#" className="hover:text-white transition">
      Londres
    </a>

    <a href="#" className="hover:text-white transition">
      Santorini
    </a>

    <a href="#" className="hover:text-white transition">
      Paris
    </a>

    <a href="#" className="hover:text-white transition">
      Dubai
    </a>

    <a href="#" className="hover:text-white transition">
      Tóquio
    </a>

    <a href="#" className="hover:text-white transition">
      Egito
    </a>

    <a href="#" className="hover:text-white transition">
      Lençóis Maranhenses
    </a>

    <a href="#" className="hover:text-white transition">
      Patagônia
    </a>

    <a href="#" className="hover:text-white transition">
      Orlando
    </a>

    <a href="#" className="hover:text-white transition">
      Aurora Boreal
    </a>

  </div>

</div>
            

          </div>

          <div>

            

            <div className="flex flex-col gap-4 text-white/50">

              <a
                href="https://instagram.com/alenovais.travel"
                target="_blank"
                className="hover:text-white transition"
              >
                Instagram
              </a>

              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                className="hover:text-white transition"
              >
                WhatsApp
              </a>

              <a href="#">
                TikTok
              </a>

              <a href="#">
                YouTube
              </a>

            </div>

          </div>

        </div>

        <div className="border-t border-white/5 mt-20 pt-10 flex flex-col md:flex-row justify-between gap-6">

          <p className="text-white/30 text-sm">
            © 2026 Alenovais Travel.
          </p>

          <p className="text-white/20 text-sm">
            Curadoria premium para experiências memoráveis.
          </p>

        </div>

      </div>

    </footer>
  )
}