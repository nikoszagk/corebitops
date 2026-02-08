import { ChevronDown, Terminal } from 'lucide-react'
import TypingText from './TypingText'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center grid-pattern overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />

      {/* Animated background elements - CSS animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-blob-delayed" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Terminal badge */}
        <div className="inline-flex items-center space-x-2 bg-surface/80 border border-white/10 rounded-full px-4 py-2 mb-8 animate-fade-in-up">
          <Terminal size={16} className="text-secondary" />
          <span className="text-text-secondary text-sm font-mono">
            DevOps Engineering & Cloud Infrastructure
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up animation-delay-100">
          <TypingText
            text="Build. Automate. Scale."
            className="animated-gradient-text"
            speed={80}
            delay={800}
          />
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-200">
          Professional DevOps consulting to modernize your infrastructure,
          streamline deployments, and accelerate your development workflow.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-300">
          <a
            href="#contact"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-primary/25 glow"
          >
            Get in Touch
          </a>
          <a
            href="#services"
            className="bg-surface hover:bg-surface/80 text-text-primary border border-white/10 px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:border-white/20"
          >
            View Services
          </a>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-fade-in animation-delay-500">
        <div className="animate-bounce-slow">
          <ChevronDown size={24} className="text-text-secondary" />
        </div>
      </div>
    </section>
  )
}
