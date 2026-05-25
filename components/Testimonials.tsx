'use client'

import { useEffect, useState } from 'react'

const testimonials = [

  {
    quote:
      'A viagem mais memorável que já fizemos. Tudo foi pensado nos mínimos detalhes.',

    name: 'Patrícia & Marcelo',

    country: '🇮🇸 Islândia',

    image: '/testimonials/patricia.jpg',
  },

  {
    quote:
      'A experiência foi impecável do início ao fim. Atendimento extremamente personalizado.',

    name: 'Renata Oliveira',

    country: '🇫🇷 França',

    image: '/testimonials/renata.jpg',
  },

  {
    quote:
      'Conseguimos viver uma viagem totalmente fora do óbvio, exatamente como imaginávamos.',

    name: 'Carlos Henrique',

    country: '🇪🇬 Egito',

    image: '/testimonials/carlos.jpg',
  },

  {
    quote:
      'Tudo aconteceu de forma extremamente organizada. Conseguimos aproveitar cada momento sem preocupações.',

    name: 'Fernanda Lima',

    country: '🇯🇵 Japão',

    image: '/testimonials/japao.jpg',
  },

  {
    quote:
      'Foi uma experiência totalmente diferente das viagens tradicionais que já havíamos feito.',

    name: 'Ricardo & Juliana',

    country: '🇹🇷 Turquia',

    image: '/testimonials/turquia.jpg',
  },

  {
    quote:
      'A curadoria foi impecável. Restaurantes, hotéis e experiências superaram nossas expectativas.',

    name: 'Marina Costa',

    country: '🇲🇻 Maldivas',

    image: '/testimonials/maldivas.jpg',
  },

  {
    quote:
      'Conseguimos equilibrar conforto, experiências locais e uma logística perfeita durante toda a viagem.',

    name: 'Eduardo Martins',

    country: '🇺🇸 Orlando',

    image: '/testimonials/orlando.jpg',
  },

  {
    quote:
      'Cada detalhe parecia pensado exclusivamente para o nosso perfil. Foi realmente inesquecível.',

    name: 'Camila Rocha',

    country: '🇮🇹 Itália',

    image: '/testimonials/italia.jpg',
  },

]

export default function Testimonials() {

  const [current, setCurrent] = useState(0)

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrent((prev) =>
        prev === testimonials.length - 1
          ? 0
          : prev + 1
      )

    }, 8000)

    return () => clearInterval(interval)

  }, [])

  return (

    <section className="py-32 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="mb-20">

          <p className="text-[#7C5CFF] uppercase tracking-[0.3em] text-sm mb-4">
            Clientes reais
          </p>

          <h2 className="text-5xl md:text-7xl font-black tracking-[-0.05em] leading-[0.95] max-w-5xl">
            Histórias que se transformaram em memórias inesquecíveis.
          </h2>

        </div>

        <div className="relative overflow-hidden rounded-[40px] border border-white/5 bg-[#111111] min-h-[620px]">

          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_top_right,#7C5CFF,transparent_40%)]" />

          <div className="relative z-10 h-full flex flex-col justify-between p-10 md:p-20">

            <div>

              <div className="flex items-center gap-1 text-[#F6C453] text-3xl mb-12">

                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>

              </div>

              <blockquote className="max-w-5xl text-4xl md:text-6xl font-black tracking-[-0.05em] leading-[1.02] min-h-[240px]">

                “{testimonials[current].quote}”

              </blockquote>

            </div>

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 mt-20">

              <div className="flex items-center gap-8">

                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className="w-32 h-32 rounded-full object-cover border border-white/10"
                />

                <div>

                  <div className="flex items-center gap-1 text-[#F6C453] text-2xl mb-4">

                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>

                  </div>

                  <p className="text-3xl font-black mb-3 tracking-[-0.03em]">
                    {testimonials[current].name}
                  </p>

                  <p className="text-white/60 text-2xl">
                    {testimonials[current].country}
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-10">

                <div className="flex items-center gap-3">

                  {testimonials.map((_, index) => (

                    <button
                      key={index}
                      onClick={() => setCurrent(index)}
                      className={`transition-all duration-300 rounded-full ${
                        current === index
                          ? 'w-10 h-3 bg-[#7C5CFF]'
                          : 'w-3 h-3 bg-white/20 hover:bg-white/40'
                      }`}
                    />

                  ))}

                </div>

                <div className="flex items-center gap-4">

                  <button
                    onClick={() =>
                      setCurrent(
                        current === 0
                          ? testimonials.length - 1
                          : current - 1
                      )
                    }
                    className="w-16 h-16 rounded-full border border-white/10 hover:bg-white/5 transition text-2xl"
                  >
                    ←
                  </button>

                  <button
                    onClick={() =>
                      setCurrent(
                        current === testimonials.length - 1
                          ? 0
                          : current + 1
                      )
                    }
                    className="w-16 h-16 rounded-full border border-white/10 hover:bg-white/5 transition text-2xl"
                  >
                    →
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}