const destinations = [
  {
    country: 'Islândia',
    flag: '🇮🇸',
    image: '/destinations/0.jpg',
  },

  {
    country: 'Egito',
    flag: '🇪🇬',
    image: '/destinations/1.jpg',
  },

  {
    country: 'Finlândia',
    flag: '🇫🇮',
    image: '/destinations/2.jpg',
  },

  {
    country: 'Croácia',
    flag: '🇭🇷',
    image: '/destinations/3.jpg',
  },

  {
    country: 'Chile',
    flag: '🇨🇱',
    image: '/destinations/4.jpg',
  },

  {
    country: 'Inglaterra',
    flag: '🇬🇧',
    image: '/destinations/5.jpg',
  },
]

export default function AboutDestinations() {
  return (
    <section className="py-32 overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <span className="text-violet-400 uppercase tracking-[0.3em] text-sm">
          Experiências reais
        </span>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mt-6">
          <div>
            <h2 className="text-5xl md:text-6xl font-black leading-tight">
              Destinos já explorados
            </h2>
          </div>

          <div className="flex items-center gap-3 text-zinc-300 text-lg">
            <span className="text-3xl font-black text-violet-400">
              +20
            </span>

            países explorados ao redor do mundo
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mt-10">
          {destinations.map((item) => (
            <div
              key={item.country}
              className="
                px-4 py-2
                rounded-full
                bg-zinc-900
                border border-zinc-800
                text-sm
                text-zinc-300
              "
            >
              {item.flag} {item.country}
            </div>
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="flex gap-6 animate-scroll whitespace-nowrap w-max px-6">
          {[...destinations, ...destinations].map((item, index) => (
            <div
              key={index}
              className="
                relative
                min-w-[340px]
                h-[460px]
                rounded-[36px]
                overflow-hidden
                border border-zinc-800
                bg-zinc-900
              "
            >
              <img
                src={item.image}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

              <div className="absolute bottom-8 left-8">
                <div className="text-4xl mb-3">
                  {item.flag}
                </div>

                <h3 className="text-3xl font-black">
                  {item.country}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}