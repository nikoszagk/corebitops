'use client'

import { useState, useEffect, useCallback } from 'react'

const devopsCommands = [
  'kubectl apply -f',
  'terraform plan',
  'docker build',
  'git push origin',
  'ansible-playbook',
  'helm install',
  'az deploy',
  'npm run build',
  'systemctl restart',
  'docker-compose up',
  'terraform apply',
  'git commit -m',
  'kubectl get pods',
  'aws s3 sync',
  'jenkins build',
  'chmod +x',
  'ssh deploy@',
  'sudo systemctl',
  'docker pull',
  'git merge main',
]

export default function EasterEgg() {
  const [commands, setCommands] = useState<Array<{
    id: number
    x: number
    text: string
    speed: number
    opacity: number
  }>>([])

  const triggerDevOpsRain = useCallback(() => {
    const newCommands = Array.from({ length: 30 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 100,
      text: devopsCommands[Math.floor(Math.random() * devopsCommands.length)],
      speed: 2 + Math.random() * 3,
      opacity: 0.3 + Math.random() * 0.7,
    }))
    setCommands(newCommands)

    // Clear after animation
    setTimeout(() => setCommands([]), 5000)
  }, [])

  useEffect(() => {
    let tapCount = 0
    let tapTimer: NodeJS.Timeout

    const handleLogoTap = (e: Event) => {
      const target = e.target as HTMLElement
      if (target.closest('.logo-easter-egg')) {
        tapCount++

        clearTimeout(tapTimer)
        tapTimer = setTimeout(() => {
          tapCount = 0
        }, 1000)

        if (tapCount >= 5) {
          tapCount = 0
          triggerDevOpsRain()
        }
      }
    }

    document.addEventListener('click', handleLogoTap)
    return () => document.removeEventListener('click', handleLogoTap)
  }, [triggerDevOpsRain])

  if (commands.length === 0) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-[10000] overflow-hidden bg-black/20">
      {commands.map((cmd, index) => (
        <div
          key={cmd.id}
          className="absolute text-green-500 font-mono text-sm whitespace-nowrap animate-terminal-rain"
          style={{
            left: `${cmd.x}%`,
            opacity: cmd.opacity,
            animationDuration: `${cmd.speed}s`,
            animationDelay: `${index * 0.1}s`,
            textShadow: '0 0 10px rgba(34, 197, 94, 0.5)',
          }}
        >
          <span className="text-green-400">$</span> {cmd.text}
        </div>
      ))}
    </div>
  )
}
