'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  FileCode2,
  Settings2,
  GitBranch,
  Cloud,
  Wrench,
} from 'lucide-react'

const services = [
  {
    icon: FileCode2,
    title: 'Infrastructure as Code',
    description:
      'Design and implement scalable infrastructure using Terraform. Version-controlled, reproducible, and automated deployments.',
    tech: 'Terraform',
  },
  {
    icon: Settings2,
    title: 'Configuration Management',
    description:
      'Automate server configuration and application deployment with Ansible. Consistent environments across development, staging, and production.',
    tech: 'Ansible',
  },
  {
    icon: GitBranch,
    title: 'CI/CD Pipelines',
    description:
      'Build robust continuous integration and deployment pipelines. Automated testing, building, and deployment workflows.',
    tech: 'Jenkins, Azure DevOps',
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description:
      'Design, migrate, and optimize cloud infrastructure on Azure and AWS. Cost-effective, secure, and highly available architectures.',
    tech: 'Azure, AWS',
  },
  {
    icon: Wrench,
    title: 'Technical Support',
    description:
      'Troubleshoot complex infrastructure issues and provide ongoing support. Proactive monitoring and incident response.',
    tech: 'Multi-platform',
  },
]

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0]
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-surface border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
    >
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
        <service.icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-text-primary">
        {service.title}
      </h3>
      <p className="text-text-secondary mb-4 leading-relaxed">
        {service.description}
      </p>
      <div className="inline-flex items-center px-3 py-1 bg-secondary/10 rounded-full">
        <span className="text-secondary text-sm font-mono">{service.tech}</span>
      </div>
    </motion.div>
  )
}

export default function Services() {
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' })

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What I <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            End-to-end DevOps solutions to help you build, deploy, and scale your
            applications with confidence.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
