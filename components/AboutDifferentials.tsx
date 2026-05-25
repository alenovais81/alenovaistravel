'use client'

import { motion } from 'framer-motion'
import {
  Globe,
  Map,
  Plane,
  Sparkles,
} from 'lucide-react'

const items = [
  {
    icon: Globe,
    title: 'Experiência internacional',
    text: 'Vivência prática em diferentes culturas e destinos ao redor do mundo.',
  },

  {
    icon: Map,
    title: 'Planejamento personalizado',
    text: 'Roteiros desenhados de acordo com seu perfil e estilo de viagem.',
  },

  {
    icon: Plane,
    title: 'Suporte próximo',
    text: 'Acompanhamento antes, durante e depois da viagem.',
  },

  {
    icon: Sparkles,
    title: 'Experiências fora do óbvio',
    text: 'Viagens autênticas além dos roteiros tradicionais.',
  },
]

export default function AboutDifferentials() {
  return (
    <section className="relative py-32 overflow-hidden bg-[#12121a]">
      <div className="absolute w-[500px] h-[500px] bg-violet-600/10 blur-[140px] rounded-full -top-40 -left-40" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <span className="text-violet-400 uppercase tracking-[0.3em] text-sm">
            Diferenciais
          </span>

          <h2 className="text-5xl md:text-6xl font-black mt-6 leading-tight">
            O que torna cada experiência diferente
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="
                  bg-zinc-900/70
                  border border-zinc-800
                  rounded-[32px]
                  p-8
                  hover:border-violet-500
                  transition-all duration-500
                  hover:-translate-y-2
                "
              >
                <div className="w-14 h-14 rounded-2xl bg-violet-500/10 flex items-center justify-center mb-8">
                  <Icon className="w-7 h-7 text-violet-400" />
                </div>

                <h3 className="text-2xl font-bold mb-5">
                  {item.title}
                </h3>

                <p className="text-zinc-400 leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}