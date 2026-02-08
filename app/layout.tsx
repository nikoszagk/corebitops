import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import ThemeProvider from '@/components/ThemeProvider'
import EasterEgg from '@/components/EasterEgg'
import ChatWidget from '@/components/ChatWidget'

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
  metadataBase: new URL('https://corebitops.com'),
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

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'CoreBit Ops',
  description: 'Professional DevOps consulting services including Infrastructure as Code, CI/CD pipelines, cloud infrastructure, and technical support.',
  url: 'https://corebitops.com',
  founder: {
    '@type': 'Person',
    name: 'Nikos Zagkanas',
    jobTitle: 'DevOps Engineer',
  },
  serviceType: ['DevOps Consulting', 'Cloud Infrastructure', 'CI/CD Pipelines', 'Infrastructure as Code'],
  areaServed: 'Worldwide',
  knowsAbout: ['Terraform', 'Ansible', 'Azure', 'AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Linux', 'Git'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
          <EasterEgg />
          <ChatWidget />
        </ThemeProvider>
      </body>
    </html>
  )
}
