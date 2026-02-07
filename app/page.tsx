import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'

const Services = dynamic(() => import('@/components/Services'))
const About = dynamic(() => import('@/components/About'))
const TechStack = dynamic(() => import('@/components/TechStack'))
const Contact = dynamic(() => import('@/components/Contact'))
const Footer = dynamic(() => import('@/components/Footer'))

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <TechStack />
      <Contact />
      <Footer />
    </main>
  )
}
