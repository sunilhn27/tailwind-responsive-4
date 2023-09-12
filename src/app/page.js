import Features from '@/Components/Features'
import Hero from '@/Components/Hero'
import NavBar from '@/Components/NavBar'
import Services from '@/Components/Services'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Features/>
      <Services/>
    </main>
  )
}
