'use client'

import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from './ThemeProvider'

export default function ThemeToggle({ className = '' }: { className?: string }) {
  const [isHydrated, setIsHydrated] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  if (!isHydrated) {
    return (
      <div className={`p-2 rounded-lg bg-surface/50 border border-border pointer-events-none ${className}`}>
        <div className="w-[18px] h-[18px] rounded-full border-2 border-text-secondary/30 border-t-text-secondary animate-spin" />
      </div>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-lg bg-surface/50 hover:bg-surface border border-border hover:border-border-hover transition-all duration-200 relative pointer-events-auto ${className}`}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun size={18} className="text-text-secondary hover:text-primary" />
      ) : (
        <Moon size={18} className="text-text-secondary hover:text-primary" />
      )}
    </button>
  )
}
