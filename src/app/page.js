"use client"
import Faqs from '@/Components/Faqs'
import Features from '@/Components/Features'
import Hero from '@/Components/Hero'
import NavBar from '@/Components/NavBar'
import Pricing from '@/Components/Pricing'
import Services from '@/Components/Services'
import Team from '@/Components/Team'
import Testimonials from '@/Components/Testimonials'
import Image from 'next/image'
import AnimationWrapper from './AnimationWrapper'

export default function Home() {
  return (
    <main>
      <AnimationWrapper delay={0.7}>
        <NavBar />
      </AnimationWrapper>

      <AnimationWrapper delay={0.7}>
        <Hero />
      </AnimationWrapper>


      <AnimationWrapper delay={0.7}>
        <Features />
      </AnimationWrapper>


      <AnimationWrapper delay={0.7}>

        <Services />
      </AnimationWrapper>


      <AnimationWrapper delay={0.7}>
        <Pricing />
      </AnimationWrapper>

      <AnimationWrapper delay={0.7}>
        <Team />
      </AnimationWrapper>

      <AnimationWrapper delay={0.7}>
        <Testimonials />
      </AnimationWrapper>

      <AnimationWrapper delay={0.7}>
        <Faqs />
      </AnimationWrapper>




    </main>
  )
}
