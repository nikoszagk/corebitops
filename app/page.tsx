import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ScrollProgress from '@/components/ScrollProgress'

const Services = dynamic(() => import('@/components/Services'), { ssr: false })
const About = dynamic(() => import('@/components/About'), { ssr: false })
const TechStack = dynamic(() => import('@/components/TechStack'), { ssr: false })
const Contact = dynamic(() => import('@/components/Contact'), { ssr: false })
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false })

export default function Home() {
  return (
    <main role="main">
      <ScrollProgress />
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
