'use client'

import { useState, useEffect } from 'react'

export default function NavbarScroll({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false)

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

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 pointer-events-auto ${
        isScrolled ? 'bg-surface/95 backdrop-blur-md shadow-lg' : 'bg-surface/5'
      }`}
    >
      {children}
    </nav>
  )
}
