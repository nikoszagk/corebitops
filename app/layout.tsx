import type { Metadata } from 'next'
import './globals.css'
import ThemeProvider from '@/components/ThemeProvider'

export const metadata: Metadata = {
  title: 'CoreBit Ops | DevOps Engineering & Cloud Infrastructure',
  description: 'Professional DevOps consulting services including Infrastructure as Code, CI/CD pipelines, cloud infrastructure, and technical support.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
