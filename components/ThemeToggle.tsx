'use client'

import { Sun, Moon } from 'lucide-react'
import { useTheme } from './ThemeProvider'

export default function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-lg bg-surface/50 hover:bg-surface border border-border hover:border-border-hover transition-all duration-200 ${className}`}
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
