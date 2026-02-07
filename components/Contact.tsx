'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Linkedin, Copy, Check } from 'lucide-react'

const email = 'your-email@example.com'
const linkedinUrl = 'https://linkedin.com/in/your-profile'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy email:', err)
    }
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-surface/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-text-secondary text-lg mb-12 max-w-2xl mx-auto">
            Have a project in mind or want to discuss how I can help with your
            DevOps needs? Reach out and let&apos;s talk.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-surface border border-border rounded-xl p-6 flex items-center space-x-4 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-text-secondary text-sm mb-1">Email</p>
                <p className="text-text-primary font-mono">{email}</p>
              </div>
              <button
                onClick={copyEmail}
                className="p-2 hover:bg-border rounded-lg transition-colors duration-200"
                title="Copy email"
              >
                {copied ? (
                  <Check className="w-5 h-5 text-green-500" />
                ) : (
                  <Copy className="w-5 h-5 text-text-secondary hover:text-text-primary" />
                )}
              </button>
            </motion.div>

            {/* LinkedIn */}
            <motion.a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-surface border border-border rounded-xl p-6 flex items-center space-x-4 hover:border-secondary/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center group-hover:bg-secondary/20 transition-colors duration-300">
                <Linkedin className="w-6 h-6 text-secondary" />
              </div>
              <div className="text-left">
                <p className="text-text-secondary text-sm mb-1">LinkedIn</p>
                <p className="text-text-primary font-medium">Connect with me</p>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
