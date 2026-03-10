import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Layout from '@/components/Layout'
import {
  FaCode,
  FaServer,
  FaShoppingCart,
  FaReact,
  FaNetworkWired,
} from 'react-icons/fa'
import { SiNextdotjs } from 'react-icons/si'

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

interface IconProps {
  size: string | number;
  className?: string;
}

// SVG Icon Components for electronic symbols
const CapacitorIcon = ({ size, className }: IconProps) => (
  <svg
    viewBox='0 0 24 24'
    style={{ width: size, height: size }}
    className={className}
    fill='none'
    stroke='currentColor'
    strokeWidth='1'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M4 12H8' />
    <path d='M16 12H20' />
    <path d='M8 5V19' />
    <path d='M16 5V19' />
  </svg>
)

const ResistorIcon = ({ size, className }: IconProps) => (
  <svg
    viewBox='0 0 24 24'
    style={{ width: size, height: size }}
    className={className}
    fill='none'
    stroke='currentColor'
    strokeWidth='1'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M4 12h3l2-4 4 8 4-8 2 4h3' />
  </svg>
)

const DiodeIcon = ({ size, className }: IconProps) => (
  <svg
    viewBox='0 0 24 24'
    style={{ width: size, height: size }}
    className={className}
    fill='none'
    stroke='currentColor'
    strokeWidth='1'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M4 12h10' />
    <path d='M14 8l4 4-4 4' />
    <path d='M18 8v8' />
  </svg>
)

const TransistorIcon = ({ size, className }: IconProps) => (
  <svg
    viewBox='0 0 24 24'
    style={{ width: size, height: size }}
    className={className}
    fill='none'
    stroke='currentColor'
    strokeWidth='1'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <circle cx='12' cy='12' r='4' />
    <path d='M12 8V4' />
    <path d='M10 15l-3 3' />
    <path d='M14 15l3 3' />
  </svg>
)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className='textured-background'>
        <div className='fixed inset-0 z-[-1] pointer-events-none'>
          {/* Icons with random-like movement */}
          <div className='icon-float-1'>
            <FaCode size='4rem' />
          </div>
          <div className='icon-float-2'>
            <ResistorIcon size='3.5rem' />
          </div>
          <div className='icon-float-3'>
            <DiodeIcon size='4.5rem' />
          </div>
          <div className='icon-float-4'>
            <FaServer size='4rem' />
          </div>
          <div className='icon-float-5'>
            <CapacitorIcon size='3.5rem' />
          </div>
          <div className='icon-float-6'>
            <TransistorIcon size='4.5rem' />
          </div>
          <div className='icon-float-7'>
            <FaShoppingCart size='4rem' />
          </div>
          <div className='icon-float-8'>
            <FaReact size='3.5rem' />
          </div>
          <div className='icon-float-9'>
            <SiNextdotjs size='4.5rem' />
          </div>
          <div className='icon-float-10'>
            <FaNetworkWired size='4rem' />
          </div>
        </div>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
