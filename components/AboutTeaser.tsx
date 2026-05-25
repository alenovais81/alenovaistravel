'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'

const images = [
  '/about/teaser1.jpg',
  '/about/teaser2.jpg',
  '/about/teaser3.jpg',
  '/about/teaser4.jpg',
  '/about/teaser5.jpg',
  '/about/teaser6.jpg',
  '/about/teaser7.jpg',
  '/about/teaser8.jpg',
  '/about/teaser9.jpg',
  '/about/teaser10.jpg',
  '/about/teaser11.jpg',
  '/about/teaser12.jpg',
  '/about/teaser13.jpg',
]

export default function AboutTeaser() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  })

  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }

    onSelect()

    emblaApi.on('select', onSelect)

    const autoplay = setInterval(() => {
      emblaApi.scrollNext()
    }, 6500)

    return () => clearInterval(autoplay)
  }, [emblaApi])

  return (
    <section className="relative py-32 overflow-hidden bg-[#18181b]">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
grid lg:grid-cols-[1.15fr_0.85fr]
            gap-14
            items-center
            relative
          "
        >
          {/* MOBILE TEXT FIRST */}

          <div className="order-1 lg:order-2 p-10 md:p-16">
            <span className="text-violet-400 uppercase tracking-[0.3em] text-sm">
              Quem está por trás da Alenovais Travel
            </span>

            <h2 className="text-5xl md:text-6xl font-black leading-[1] mt-6 mb-8">
              Experiências reais transformadas em viagens memoráveis.
            </h2>

            <p className="text-zinc-300 text-lg md:text-xl leading-relaxed mb-10">
              Muito além de roteiros prontos, cada viagem nasce de experiências
              vividas na prática, combinando planejamento personalizado,
              suporte próximo e uma visão humana sobre o que realmente torna
              uma viagem inesquecível.
            </p>

            <div className="flex flex-wrap gap-5">
              <Link
                href="/quem-somos"
                className="
                  inline-flex items-center justify-center
                  px-8 py-4
                  rounded-2xl
                  bg-violet-600
                  hover:bg-violet-500
                  transition
                  font-semibold
                  text-white
                "
              >
                Conheça minha história
              </Link>

              
            </div>
          </div>

          {/* CAROUSEL */}

          <div className="order-2 lg:order-1 relative">
            <div
              className="overflow-hidden h-[760px]"
              ref={emblaRef}
            >
              <div className="flex h-full">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="min-w-full relative"
                  >
                    <img
                      src={image}
                      alt=""
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/50" />
                  </div>
                ))}
              </div>
            </div>

            {/* ARROWS */}

            <button
              onClick={scrollPrev}
              className="
                absolute left-5 top-1/2 -translate-y-1/2
                w-12 h-12
                rounded-full
                backdrop-blur-md
                bg-black/40
                border border-white/10
                flex items-center justify-center
                text-white
                hover:bg-violet-600/40
                transition
              "
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={scrollNext}
              className="
                absolute right-5 top-1/2 -translate-y-1/2
                w-12 h-12
                rounded-full
                backdrop-blur-md
                bg-black/40
                border border-white/10
                flex items-center justify-center
                text-white
                hover:bg-violet-600/40
                transition
              "
            >
              <ChevronRight size={20} />
            </button>

            {/* DOTS */}

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`
                    w-2.5 h-2.5 rounded-full transition-all duration-300
                    ${
                      selectedIndex === index
                        ? 'bg-white w-8'
                        : 'bg-white/40'
                    }
                  `}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}