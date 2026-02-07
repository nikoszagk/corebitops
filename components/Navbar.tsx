'use client'

import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from './ThemeProvider'

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Tech', href: '#tech' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu when clicking a link (after JS loads)
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('.mobile-nav-link')) {
        const details = document.querySelector('.mobile-menu') as HTMLDetailsElement
        if (details) details.open = false
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-surface/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <span className="text-xl font-bold font-mono gradient-text">
              CoreBit Ops
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-text-secondary hover:text-primary transition-colors duration-200 text-sm font-medium"
              >
                {link.name}
              </a>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-surface/50 hover:bg-surface border border-border hover:border-border-hover transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun size={18} className="text-text-secondary hover:text-primary" />
              ) : (
                <Moon size={18} className="text-text-secondary hover:text-primary" />
              )}
            </button>

            <a
              href="#contact"
              className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:shadow-lg hover:shadow-primary/25"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile: Theme Toggle + Native Menu (works without JS!) */}
          <div className="flex items-center space-x-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-surface/50 hover:bg-surface border border-border transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun size={18} className="text-text-secondary" />
              ) : (
                <Moon size={18} className="text-text-secondary" />
              )}
            </button>

            {/* Native details/summary - works INSTANTLY without JavaScript */}
            <details className="mobile-menu">
              <summary className="p-2 cursor-pointer list-none text-text-primary">
                {/* Hamburger icon */}
                <svg className="menu-open w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                {/* Close icon */}
                <svg className="menu-close w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </summary>

              {/* Dropdown menu */}
              <div className="fixed inset-x-0 top-16 bg-surface/95 backdrop-blur-xl border-t border-border shadow-lg z-50">
                <div className="px-4 py-4 space-y-3">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="mobile-nav-link block text-text-secondary hover:text-primary transition-colors duration-200 py-2"
                    >
                      {link.name}
                    </a>
                  ))}
                  <a
                    href="#contact"
                    className="mobile-nav-link block bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-center font-medium transition-all duration-200"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>
            </details>
          </div>
        </div>
      </div>
    </nav>
  )
}
