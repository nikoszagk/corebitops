'use client'

import { useEffect, useRef } from 'react'
import { Linkedin } from 'lucide-react'

const linkedinUrl = 'https://www.linkedin.com/in/nikoszagkan'

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)

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
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-surface/30">
      <div className="max-w-4xl mx-auto">
        <div
          ref={ref}
          className="opacity-0 translate-y-8 transition-all duration-500 ease-out text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-text-secondary text-lg mb-12 max-w-2xl mx-auto">
            Have a project in mind or want to discuss how I can help with your
            DevOps needs? Reach out and let&apos;s talk.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* LinkedIn */}
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect with me on LinkedIn"
              className="bg-surface border border-border rounded-xl p-6 flex items-center space-x-4 hover:border-secondary/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center group-hover:bg-secondary/20 transition-colors duration-300">
                <Linkedin className="w-6 h-6 text-secondary" />
              </div>
              <div className="text-left">
                <p className="text-text-secondary text-sm mb-1">LinkedIn</p>
                <p className="text-text-primary font-medium">Connect with me</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
