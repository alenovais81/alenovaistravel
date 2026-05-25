'use client'

import { useEffect, useState } from 'react'

interface HeroProps {
  destination: string
  setDestination: (value: string) => void

  departure: string
  setDeparture: (value: string) => void

  selectedStyle: string
  setSelectedStyle: (value: string) => void

  setShowForm: (value: boolean) => void
}

export default function Hero({
  destination,
  setDestination,
  departure,
  setDeparture,
  selectedStyle,
  setSelectedStyle,
  setShowForm,
}: HeroProps) {
  const heroImages = [
    '/hero/hero-1.jpg',
    '/hero/hero-2.jpg',
    '/hero/hero-3.jpg',
  ]

  const [selectedHeroImage, setSelectedHeroImage] = useState(
    heroImages[0]
  )

  useEffect(() => {
    const randomImage =
      heroImages[
        Math.floor(Math.random() * heroImages.length)
      ]

    setSelectedHeroImage(randomImage)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <img
          src={selectedHeroImage}
          alt="Travel Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen pt-24 px-6 text-center">
        <img
          src="/logo-white.png"
          alt="Logo"
          className="w-[340px] md:w-[420px] mb-14"
        />

        <h1 className="text-5xl md:text-7xl font-black tracking-[-0.05em] leading-[0.95] mb-6 max-w-5xl">
          Viagens memoráveis
          <br />
          começam aqui.
        </h1>

        <p className="text-white/70 text-xl max-w-2xl mb-12 leading-relaxed">
          Curadoria personalizada para destinos incríveis
          ao redor do mundo.
        </p>

        <div className="flex flex-col lg:flex-row gap-4 w-full max-w-6xl">

  <div className="flex flex-col gap-2 w-full lg:flex-1">
<label className="text-sm text-white/70 font-medium text-left pl-1">
      Destino
    </label>

    <input
      type="text"
      value={destination}
      onChange={(e) => setDestination(e.target.value)}
      placeholder="Ex: Japão, Itália, Maldivas..."
      className="w-full h-[72px] rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 px-6 text-lg outline-none focus:border-[#7C5CFF]"
    />
  </div>

  <div className="flex flex-col gap-2 w-full lg:w-[260px]">
<label className="text-sm text-white/70 font-medium text-left pl-1">
      Data da viagem
    </label>

    <input
      type="date"
      value={departure}
      onChange={(e) => setDeparture(e.target.value)}
      className="w-full h-[72px] rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 px-6 text-lg outline-none focus:border-[#7C5CFF]"
    />
  </div>

  <div className="flex flex-col gap-2 w-full lg:w-[320px]">
<label className="text-sm text-white/70 font-medium text-left pl-1">      Estilo da viagem
    </label>

    <select
      value={selectedStyle}
      onChange={(e) => setSelectedStyle(e.target.value)}
      className="w-full h-[72px] rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 px-6 text-lg outline-none focus:border-[#7C5CFF]"
    >
      <option value="">Selecione</option>
      <option value="luxo">Luxo</option>
      <option value="aventura">Aventura</option>
      <option value="praia">Praia</option>
      <option value="romântico">Romântico</option>
      <option value="família">Família</option>
    </select>
  </div>

  <div className="flex items-end w-full lg:w-auto">
    <button
      onClick={() => setShowForm(true)}
      className="w-full lg:w-auto bg-[#7C5CFF] hover:bg-[#6D4CF7] transition-all duration-300 px-10 h-[72px] rounded-2xl font-black text-lg whitespace-nowrap min-w-[280px]"
    >
      Solicitar orçamento
    </button>
  </div>

</div>
      </div>
    </section>
  )
}