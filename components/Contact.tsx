'use client'

import { useEffect, useRef, useState } from 'react'
import { Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react'

const linkedinUrl = 'https://www.linkedin.com/in/nikoszagkan'

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-surface/30">
      <div className="max-w-4xl mx-auto">
        <div
          ref={ref}
          className="opacity-0 translate-y-8 transition-all duration-500 ease-out"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Let&apos;s <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Have a project in mind or want to discuss how I can help with your
              DevOps needs? Reach out and let&apos;s talk.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="bg-surface border border-border rounded-xl p-6 space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-text-primary"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-text-primary"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-text-primary resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-primary/25 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>

              {status === 'success' && (
                <div className="flex items-center gap-2 text-green-500 bg-green-500/10 px-4 py-3 rounded-lg">
                  <CheckCircle size={18} />
                  <span>Message sent successfully!</span>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-500 bg-red-500/10 px-4 py-3 rounded-lg">
                  <AlertCircle size={18} />
                  <span>Failed to send. Please try again.</span>
                </div>
              )}
            </form>

            {/* LinkedIn Card */}
            <div className="flex flex-col justify-center">
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

              <div className="mt-6 p-6 bg-surface/50 border border-border/50 rounded-xl">
                <p className="text-text-secondary text-sm">
                  Prefer email? Reach out directly at{' '}
                  <a href="mailto:info@corebitops.com" className="text-primary hover:underline">
                    info@corebitops.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
