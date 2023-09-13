import Faqs from '@/Components/Faqs'
import Features from '@/Components/Features'
import Hero from '@/Components/Hero'
import NavBar from '@/Components/NavBar'
import Pricing from '@/Components/Pricing'
import Services from '@/Components/Services'
import Team from '@/Components/Team'
import Testimonials from '@/Components/Testimonials'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Features />
      <Services />
      <Pricing />
      <Team />
      <Testimonials />
      <Faqs />
    </main>
  )
}
