'use client'

import { useEffect, useRef } from 'react'

interface TurnstileProps {
  onVerify: (token: string) => void
}

declare global {
  interface Window {
    turnstile: {
      render: (container: HTMLElement, options: {
        sitekey: string
        callback: (token: string) => void
        theme: string
      }) => string
      reset: (widgetId: string) => void
    }
    onTurnstileLoad: () => void
  }
}

export default function Turnstile({ onVerify }: TurnstileProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const widgetIdRef = useRef<string | null>(null)

  useEffect(() => {
    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY

    if (!siteKey) {
      console.error('Turnstile site key not found')
      return
    }

    const renderWidget = () => {
      if (containerRef.current && window.turnstile && !widgetIdRef.current) {
        widgetIdRef.current = window.turnstile.render(containerRef.current, {
          sitekey: siteKey,
          callback: onVerify,
          theme: 'auto',
        })
      }
    }

    // Check if script already loaded
    if (window.turnstile) {
      renderWidget()
    } else {
      // Load script
      const script = document.createElement('script')
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad'
      script.async = true
      script.defer = true

      window.onTurnstileLoad = renderWidget

      document.head.appendChild(script)

      return () => {
        document.head.removeChild(script)
      }
    }
  }, [onVerify])

  return <div ref={containerRef} className="flex justify-center" />
}
