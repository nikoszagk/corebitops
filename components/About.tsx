'use client'

import { useEffect, useRef } from 'react'
import { CheckCircle2 } from 'lucide-react'
import Image from 'next/image'

const valueProps = [
  'Hands-on experience with enterprise infrastructure',
  'Clear communication and transparent processes',
  'Focus on automation and best practices',
  'Reliable delivery and ongoing support',
]

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1, rootMargin: '-50px' }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <div
          ref={sectionRef}
          className="opacity-0 transition-all duration-700 ease-out grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Image/Placeholder */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden border border-border">
              <Image
                src="/profile.jpg"
                alt="Nikos Zagkanas"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 40%' }}
                loading="lazy"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              About <span className="gradient-text">CoreBit Ops</span>
            </h2>
            <p className="text-text-secondary text-lg mb-6 leading-relaxed">
              I&apos;m a DevOps engineer specializing in cloud infrastructure and
              automation. With experience across various industries, I help
              organizations streamline their development workflows and build
              reliable, scalable infrastructure.
            </p>
            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
              Whether you need to set up CI/CD pipelines, migrate to the cloud,
              or automate your infrastructure, I bring practical solutions
              tailored to your specific needs.
            </p>

            {/* Value propositions */}
            <div className="space-y-4">
              {valueProps.map((prop, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-text-primary">{prop}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
