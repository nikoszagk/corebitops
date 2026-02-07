'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const technologies = [
  { name: 'Terraform', color: '#7B42BC' },
  { name: 'Ansible', color: '#EE0000' },
  { name: 'Jenkins', color: '#D24939' },
  { name: 'Azure', color: '#0078D4' },
  { name: 'AWS', color: '#FF9900' },
  { name: 'Docker', color: '#2496ED' },
  { name: 'Kubernetes', color: '#326CE5' },
  { name: 'Linux', color: '#FCC624' },
  { name: 'Git', color: '#F05032' },
]

function TechCard({
  tech,
  index,
}: {
  tech: (typeof technologies)[0]
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="group bg-surface border border-border rounded-xl p-6 flex flex-col items-center justify-center aspect-square hover:border-border-hover transition-all duration-300 cursor-default"
    >
      {/* Icon placeholder with color */}
      <div
        className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
        style={{ backgroundColor: `${tech.color}20` }}
      >
        <span
          className="text-2xl font-bold font-mono"
          style={{ color: tech.color }}
        >
          {tech.name.slice(0, 2).toUpperCase()}
        </span>
      </div>
      <span className="text-text-primary font-medium text-center group-hover:text-white transition-colors duration-300">
        {tech.name}
      </span>
    </motion.div>
  )
}

export default function TechStack() {
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' })

  return (
    <section id="tech" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={
            isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Tools and technologies I use to deliver robust DevOps solutions.
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <TechCard key={tech.name} tech={tech} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
