'use client'

import { useState, useEffect } from 'react'

interface TypingTextProps {
  text: string
  className?: string
  speed?: number
  delay?: number
}

export default function TypingText({
  text,
  className = '',
  speed = 100,
  delay = 500
}: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setIsTyping(true)
    }, delay)

    return () => clearTimeout(startTimeout)
  }, [delay])

  useEffect(() => {
    if (!isTyping) return

    if (displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1))
      }, speed)
      return () => clearTimeout(timeout)
    }
  }, [displayedText, text, speed, isTyping])

  // Blink cursor after typing is done
  useEffect(() => {
    if (displayedText.length === text.length) {
      const interval = setInterval(() => {
        setShowCursor(prev => !prev)
      }, 530)
      return () => clearInterval(interval)
    }
  }, [displayedText, text])

  return (
    <span className={className}>
      {displayedText}
      <span
        className={`inline-block w-[3px] h-[0.9em] bg-current ml-1 align-middle ${
          showCursor ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transition: 'opacity 0.1s' }}
      />
    </span>
  )
}
