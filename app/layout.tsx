import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import ThemeProvider from '@/components/ThemeProvider'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'CoreBit Ops | DevOps Engineering & Cloud Infrastructure',
  description: 'Professional DevOps consulting services including Infrastructure as Code, CI/CD pipelines, cloud infrastructure, and technical support.',
  metadataBase: new URL('https://corebitops-app.jollyplant-fff82c23.westeurope.azurecontainerapps.io'),
  openGraph: {
    title: 'CoreBit Ops | DevOps Engineering & Cloud Infrastructure',
    description: 'Professional DevOps consulting services including Infrastructure as Code, CI/CD pipelines, cloud infrastructure, and technical support.',
    type: 'website',
    locale: 'en_US',
    siteName: 'CoreBit Ops',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CoreBit Ops | DevOps Engineering & Cloud Infrastructure',
    description: 'Professional DevOps consulting services including Infrastructure as Code, CI/CD pipelines, cloud infrastructure, and technical support.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
