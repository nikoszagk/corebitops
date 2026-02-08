'use client'

import { useEffect, useRef } from 'react'

export default function ScrollProgress() {
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ticking = false

    const updateProgress = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY
          const docHeight = document.documentElement.scrollHeight - window.innerHeight
          const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0

          if (progressRef.current) {
            progressRef.current.style.transform = `scaleX(${scrollPercent / 100})`
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', updateProgress, { passive: true })
    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-[100] bg-transparent pointer-events-none">
      <div
        ref={progressRef}
        className="h-full w-full origin-left bg-gradient-to-r from-primary to-secondary"
        style={{ transform: 'scaleX(0)', transition: 'transform 0.1s cubic-bezier(0.4, 0, 0.2, 1)' }}
      />
    </div>
  )
}
