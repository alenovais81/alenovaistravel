'use client'

import { useState } from 'react'

import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Testimonials from '../components/Testimonials'
import AboutTeaser from '../components/AboutTeaser'
import MultiStepForm from '../components/MultiStepForm'

export default function AlenovaisTravelPremiumLanding() {

  const [showForm, setShowForm] = useState(false)

  const [origin, setOrigin] = useState('')
  const [destination, setDestination] = useState('')

  const [selectedStyle, setSelectedStyle] = useState('')

  const [departure, setDeparture] = useState('')

  const [currentPage, setCurrentPage] = useState<
    'home' | 'about'
  >('home')

  return (

    <div className="bg-[#0B0B0B] text-white overflow-hidden min-h-screen">

      {currentPage === 'home' && (

        <>

          <Hero
            origin={origin}
            setOrigin={setOrigin}
            destination={destination}
            setDestination={setDestination}
            departure={departure}
            setDeparture={setDeparture}
            selectedStyle={selectedStyle}
            setSelectedStyle={setSelectedStyle}
            setShowForm={setShowForm}
          />

          <section className="py-24 px-6">

            <div className="max-w-7xl mx-auto">

              <div className="flex items-end justify-between mb-14">

                <div>

                  <p className="text-[#7C5CFF] uppercase tracking-[0.3em] text-sm mb-4">
                    Destinos em destaque
                  </p>

                  <h2 className="text-4xl md:text-6xl font-black tracking-[-0.05em]">
                    Inspire sua próxima viagem.
                  </h2>

                </div>

              </div>

              <div className="grid md:grid-cols-3 gap-8">

                {[
                  {
                    name: 'Paris',
                    image:
                      'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1200&auto=format&fit=crop',
                  },

                  {
                    name: 'Santiago',
                    image:
                      'https://images.unsplash.com/photo-1519302959554-a75be0afc82a?q=80&w=1200&auto=format&fit=crop',
                  },

                  {
                    name: 'Londres',
                    image:
                      'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200&auto=format&fit=crop',
                  },

                  {
                    name: 'Orlando',
                    image:
                      'https://images.unsplash.com/photo-1597466599360-3b9775841aec?q=80&w=1200&auto=format&fit=crop',
                  },

                  {
                    name: 'Lençóis Maranhenses',
                    image:
                      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
                  },

                  {
                    name: 'Maldivas',
                    image:
                      'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1200&auto=format&fit=crop',
                  },
                ].map((item) => (

                  <div
                    key={item.name}
                    className="group relative overflow-hidden rounded-[32px] h-[420px] cursor-pointer"
                  >

                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                    <div className="absolute bottom-0 left-0 p-8">

                      <h3 className="text-3xl font-black tracking-[-0.03em]">
                        {item.name}
                      </h3>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </section>

          <Testimonials />

          {showForm && (

            <MultiStepForm
            origin={origin}
            destination={destination}
            departure={departure}
            selectedStyle={selectedStyle}
            onClose={() => setShowForm(false)}
          />

          )}



<AboutTeaser />

<Footer />

        

        </>

      )}

      {currentPage === 'about' && (

        <div className="min-h-screen bg-[#0B0B0B] text-white px-6 py-20">

          <div className="max-w-5xl mx-auto">

            <button
              onClick={() => setCurrentPage('home')}
              className="text-white/60 hover:text-white mb-12"
            >
              ← Voltar
            </button>

            <img
              src="/logo-white.png"
              alt="Alenovais Travel"
              className="w-[260px] mb-20"
            />

            <h1 className="text-5xl md:text-7xl font-black tracking-[-0.05em] leading-[0.95] mb-12">
              Viagens memoráveis
              começam muito antes
              do embarque.
            </h1>

            <div className="space-y-8 text-white/70 text-xl leading-relaxed">

              <p>
                A Alenovais Travel nasceu da paixão
                por descobrir experiências únicas ao redor do mundo.
              </p>

              <p>
                Mais do que vender passagens ou hotéis,
                a proposta é construir viagens alinhadas
                ao perfil, estilo e expectativas de cada cliente.
              </p>

              <p>
                Cada roteiro é pensado de forma estratégica,
                considerando logística, experiências locais,
                conforto, gastronomia e momentos memoráveis.
              </p>

              <p>
                O objetivo é transformar viagens em histórias
                realmente inesquecíveis.
              </p>

            </div>

          </div>

        </div>

      )}

    </div>

  )
}