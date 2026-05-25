'use client'

import { useState } from 'react'

interface MultiStepFormProps {
  destination?: string
  departure?: string
  selectedStyle?: string
  onClose: () => void
}

export default function MultiStepForm({
  destination = '',
  departure = '',
  selectedStyle = '',
  onClose,
}: MultiStepFormProps) {
  const [step, setStep] = useState(1)
  const [isSending, setIsSending] = useState(false)
const [isSuccess, setIsSuccess] = useState(false)
const [phoneError, setPhoneError] = useState('')

  const [formData, setFormData] = useState({
    destination,
    departure,
    returnDate: '',
    adults: 1,
    children: 0,
    babies: 0,
    tripStyle: selectedStyle,
    hotel: false,
    car: false,
    insurance: false,
    itinerary: false,
    tickets: false,
    transfer: false,
    name: '',
    whatsapp: '',
    email: '',
    instagram: '',
    notes: '',
  })

  const updateField = (field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  if (isSuccess) {
  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-[#121212] border border-white/10 rounded-[32px] p-12 text-center relative overflow-hidden">

        <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-[#7C5CFF] to-[#B794F4]" />

        <div className="relative z-10">

          <div className="w-24 h-24 rounded-full bg-[#7C5CFF] flex items-center justify-center text-5xl mx-auto mb-8">
            ✓
          </div>

          <h2 className="text-5xl font-black mb-6">
            Solicitação recebida.
          </h2>

          <p className="text-white/60 text-xl leading-relaxed mb-10">
            Nossa equipe irá analisar sua solicitação e em breve
            entraremos em contato via WhatsApp com opções
            personalizadas para sua viagem.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">

            <a
              href="https://instagram.com/alenovais.travel"
              target="_blank"
              className="bg-white text-black px-8 py-5 rounded-2xl font-bold"
            >
              Visitar Instagram
            </a>

            <button
              onClick={onClose}
              className="border border-white/10 px-8 py-5 rounded-2xl font-bold"
            >
              Fechar
            </button>

          </div>
        </div>
      </div>
    </div>
    )
}

    return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl overflow-auto">
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="bg-[#121212] border border-white/10 rounded-[2rem] w-full max-w-3xl p-8 md:p-12 relative">

          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white/50 hover:text-white text-2xl"
          >
            ✕
          </button>

          <div className="mb-10">
            <div className="flex items-center justify-between mb-5">
              <div className="text-sm uppercase tracking-[0.3em] text-[#B7A3FF] font-semibold">
                Etapa {step} de 5
              </div>

              <div className="text-white/40 text-sm">
                Solicitação personalizada
              </div>
            </div>

            <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#7C5CFF] transition-all duration-500"
                style={{ width: `${(step / 5) * 100}%` }}
              />
            </div>
          </div>

          {step === 1 && (
            <div>
              <h2 className="text-4xl md:text-5xl font-black tracking-[-0.04em] leading-[1] mb-4">
                Para onde você deseja viajar?
              </h2>

              <p className="text-white/60 text-lg mb-10">
                Comece nos contando seu destino e período desejado.
              </p>

              <div className="grid gap-5">
                <input
                  value={formData.destination}
                  onChange={(e) =>
                    updateField('destination', e.target.value)
                  }
                  placeholder="Destino desejado"
                  className="bg-white/5 border border-white/10 rounded-2xl px-5 py-5"
                />

                <div className="grid md:grid-cols-2 gap-5">
                  <input
                    type="date"
                    value={formData.departure}
                    onChange={(e) =>
                      updateField('departure', e.target.value)
                    }
                    className="bg-white/5 border border-white/10 rounded-2xl px-5 py-5"
                  />

                  <input
                    type="date"
                    value={formData.returnDate}
                    onChange={(e) =>
                      updateField('returnDate', e.target.value)
                    }
                    className="bg-white/5 border border-white/10 rounded-2xl px-5 py-5"
                  />
                </div>

                <p className="text-white/40 text-sm">
                  Se ainda não tiver data definida, você pode preencher depois.
                </p>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-4xl md:text-5xl font-black tracking-[-0.04em] leading-[1] mb-4">
                Quem irá viajar?
              </h2>

              <p className="text-white/60 text-lg mb-10">
                Isso nos ajuda a personalizar melhor sua experiência.
              </p>

              <div className="grid md:grid-cols-3 gap-5">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <div className="text-white/50 mb-3">
                    Adultos
                  </div>

                  <select
                    value={formData.adults}
                    onChange={(e) =>
                      updateField('adults', e.target.value)
                    }
                    className="bg-transparent w-full text-2xl font-black outline-none"
                  >
                    {[1,2,3,4,5,6].map((n) => (
                      <option key={n} value={n} className="text-black">
                        {n}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <div className="text-white/50 mb-3">
                    Crianças (2 a 11 anos)
                  </div>

                  <select
                    value={formData.children}
                    onChange={(e) =>
                      updateField('children', e.target.value)
                    }
                    className="bg-transparent w-full text-2xl font-black outline-none"
                  >
                    {[0,1,2,3,4].map((n) => (
                      <option key={n} value={n} className="text-black">
                        {n}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <div className="text-white/50 mb-3">
                    Bebês (até 2 anos)
                  </div>

                  <select
                    value={formData.babies}
                    onChange={(e) =>
                      updateField('babies', e.target.value)
                    }
                    className="bg-transparent w-full text-2xl font-black outline-none"
                  >
                    {[0,1,2].map((n) => (
                      <option key={n} value={n} className="text-black">
                        {n}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-4xl md:text-5xl font-black tracking-[-0.04em] leading-[1] mb-4">
                Qual estilo de viagem combina com você?
              </h2>

              <p className="text-white/60 text-lg mb-10">
                Escolha o que mais se aproxima da experiência ideal.
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                {[
                  'Não tem estilo',
                  'Econômico',
                  'Premium/VIP',
                  'Família',
                  'Romântico',
                  'Neve',
                ].map((style) => (
                  <button
                    key={style}
                    onClick={() => updateField('tripStyle', style)}
                    className={`rounded-2xl border px-5 py-6 transition-all ${
                      formData.tripStyle === style
                        ? 'bg-[#7C5CFF] border-[#7C5CFF]'
                        : 'bg-white/5 border-white/10'
                    }`}
                  >
                    {style}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <h2 className="text-4xl md:text-5xl font-black tracking-[-0.04em] leading-[1] mb-4">
                O que deseja incluir?
              </h2>

              <p className="text-white/60 text-lg mb-10">
                Selecione os serviços desejados.
              </p>

              <div className="grid gap-4">
                {[
  {
    label: 'Hotel',
    field: 'hotel',
  },
  {
    label: 'Roteiros personalizados',
    field: 'itinerary',
  },
  {
    label: 'Ingressos',
    field: 'tickets',
  },
  {
    label: 'Seguro viagem',
    field: 'insurance',
  },
  {
    label: 'Transfer',
    field: 'transfer',
  },
].map((item) => (
                  <button
                    key={item.field}
                    onClick={() =>
                      updateField(
                        item.field,
                        !formData[item.field as keyof typeof formData]
                      )
                    }
                    className={`flex items-center justify-between rounded-2xl border px-6 py-6 transition-all ${
                      formData[item.field as keyof typeof formData]
                        ? 'bg-[#7C5CFF] border-[#7C5CFF]'
                        : 'bg-white/5 border-white/10'
                    }`}
                  >
                    <span className="text-lg font-semibold">
                      {item.label}
                    </span>

                    <span>
                      {formData[item.field as keyof typeof formData]
                        ? '✓'
                        : '+'}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 5 && (
            <div>
              <h2 className="text-4xl md:text-5xl font-black tracking-[-0.04em] leading-[1] mb-4">
                Quase pronto.
              </h2>

              <p className="text-white/60 text-lg mb-10">
                Precisamos apenas das suas informações de contato.
              </p>

              <div className="grid gap-5">
                <input
                  placeholder="Nome completo"
                  value={formData.name}
                  onChange={(e) =>
                    updateField('name', e.target.value)
                  }
                  className="bg-white/5 border border-white/10 rounded-2xl px-5 py-5"
                />

                <input
  placeholder="WhatsApp com DDD"
  value={formData.whatsapp}
  onChange={(e) =>
    updateField('whatsapp', e.target.value)
  }
  className="bg-white/5 border border-white/10 rounded-2xl px-5 py-5"
/>

{phoneError && (
  <p className="text-red-400 text-sm">
    {phoneError}
  </p>
)}

                <input
                  placeholder="Email (opcional)"
                  value={formData.email}
                  onChange={(e) =>
                    updateField('email', e.target.value)
                  }
                  className="bg-white/5 border border-white/10 rounded-2xl px-5 py-5"
                />

                <input
  placeholder="Instagram (opcional)"
  value={formData.instagram}
  onChange={(e) =>
    updateField('instagram', e.target.value)
  }
  className="bg-white/5 border border-white/10 rounded-2xl px-5 py-5"
/>
{phoneError && (
  <p className="text-red-400 text-sm">
    {phoneError}
  </p>
)}
                <textarea
                  placeholder="Alguma observação importante?"
                  value={formData.notes}
                  onChange={(e) =>
                    updateField('notes', e.target.value)
                  }
                  className="bg-white/5 border border-white/10 rounded-2xl px-5 py-5 min-h-[140px]"
                />
              </div>
            </div>
          )}

          <div className="flex justify-between items-center mt-12">
            <button
              onClick={() => step > 1 && setStep(step - 1)}
              className={`px-6 py-4 rounded-2xl border ${
                step === 1
                  ? 'opacity-20 cursor-not-allowed'
                  : 'border-white/10'
              }`}
            >
              Voltar
            </button>

            {step < 5 ? (
  <button
    onClick={() => setStep(step + 1)}
    className="bg-[#7C5CFF] rounded-2xl px-8 py-5 font-black"
  >
    Continuar
  </button>
) : (
  <button
  disabled={isSending}
  onClick={async () => {
    const cleanPhone = formData.whatsapp.replace(/\D/g, '')

if (cleanPhone.length < 10 || cleanPhone.length > 13) {
  setPhoneError('Digite um WhatsApp válido com DDD.')
  return
}

setPhoneError('')
    if (isSending) return

    try {
      setIsSending(true)

      const response = await fetch('/api/contact', {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSuccess(true)
      } else {
        alert('Erro ao enviar solicitação.')
      }
    } catch (error) {
      console.error(error)

      alert('Erro ao enviar solicitação.')
    } finally {
      setIsSending(false)
    }
  }}
  className="bg-[#7C5CFF] rounded-2xl px-8 py-5 font-black disabled:opacity-50"
>
  {isSending ? 'Enviando...' : 'Enviar'}
</button>
)}


          </div>
        </div>
      </div>
    </div>
  )
}