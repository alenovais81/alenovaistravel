import AboutHero from '@/components/AboutHero'
import AboutStory from '@/components/AboutStory'
import AboutDifferentials from '@/components/AboutDifferentials'
import AboutDestinations from '@/components/AboutDestinations'
import AboutCTA from '@/components/AboutCTA'

export default function QuemSomosPage() {
  return (
    <main className="bg-black text-white overflow-hidden">
      <AboutHero />
      <AboutStory />
      <AboutDifferentials />
      <AboutDestinations />
      <AboutCTA />
    </main>
  )
}