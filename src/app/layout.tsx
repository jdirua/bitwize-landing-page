import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Layout from '@/components/Layout'
import FloatingIcons from '@/components/ui/FloatingIcons'
import AnimatedGrid from '@/components/ui/AnimatedGrid'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Bitwize Technologies',
  description: 'Engineering First Digital Solutions',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className='textured-background'>
        <AnimatedGrid />
        <FloatingIcons />
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
