'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const images = [
  '/about/hero1.jpg',
  '/about/hero2.jpg',
  '/about/hero3.jpg',
  '/about/hero4.jpg',
]

export default function AboutHero() {
  const [bgImage, setBgImage] = useState(images[0])

  useEffect(() => {
    const random = images[Math.floor(Math.random() * images.length)]
    setBgImage(random)
  }, [])

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 animate-slowzoom"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      />

      <div className="absolute inset-0 bg-black/55" />

      <div className="absolute top-8 left-8 z-30">
        <Link
          href="/"
          className="
            flex items-center gap-2
            backdrop-blur-md
            bg-black/30
            border border-white/10
            rounded-full
            px-5 py-3
            text-sm
            tracking-[0.15em]
            uppercase
            text-white/90
            hover:bg-violet-600/30
            transition
          "
        >
          ← Voltar para início
        </Link>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6">
        <img
          src="/logo-white.png"
          alt="Alenovais Travel"
          className="w-[260px] mb-12"
        />

        <h1 className="max-w-4xl text-5xl md:text-7xl font-black leading-[0.95] tracking-tight mb-8">
          Mais do que destinos,
          <span className="block text-violet-400">
            experiências que ficam.
          </span>
        </h1>

        <p className="max-w-2xl text-xl md:text-2xl text-zinc-200 leading-relaxed">
          Planejamento personalizado, suporte próximo
          e experiências desenhadas de acordo com o seu estilo de viagem.
        </p>
      </div>
    </section>
  )
}