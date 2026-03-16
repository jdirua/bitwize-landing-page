'use client'
import {
  ShoppingCart,
  Code,
  Server,
  Database,
  Cpu,
} from 'lucide-react'
import {
  FaNetworkWired,
  FaBroadcastTower,
  FaGithub,
  FaReact,
} from 'react-icons/fa'
import { SiFlutter, SiNextdotjs } from 'react-icons/si'

interface IconProps {
  size: string | number
  className?: string
}

// Custom SVG Icons for electronic components
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

const InductorIcon = ({ size, className }: IconProps) => (
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
    <path d='M2,12 H6 A2,2 0 0,1 10,12 A2,2 0 0,1 14,12 A2,2 0 0,1 18,12 H22' />
  </svg>
)

const FloatingIcons = () => {
  return (
    <div className='fixed inset-0 pointer-events-none opacity-50 z-10'>
      {/* --- Every icon now has a unique position --- */}
      <ShoppingCart
        className='icon-float-1 absolute w-12 h-12'
        strokeWidth={1}
      />
      <Server
        className='icon-float-2 absolute w-12 h-12'
        strokeWidth={1}
      />
      <Database
        className='icon-float-3 absolute w-12 h-12'
        strokeWidth={1}
      />
      <FaNetworkWired
        className='icon-float-4 absolute w-12 h-12'
        strokeWidth={1}
      />
      <CapacitorIcon
        size='3rem'
        className='icon-float-5 absolute'
      />
      <DiodeIcon
        size='3rem'
        className='icon-float-6 absolute'
      />
      <Code
        className='icon-float-7 absolute w-12 h-12'
        strokeWidth={1}
      />
      <FaReact
        size='3rem'
        className='icon-float-8 absolute'
      />
      <SiNextdotjs
        size='3rem'
        className='icon-float-9 absolute'
      />
      <FaGithub
        size='3rem'
        className='icon-float-10 absolute'
      />
      <SiFlutter
        size='3rem'
        className='icon-float-11 absolute'
      />
      <Cpu
        className='icon-float-12 absolute w-12 h-12'
        strokeWidth={1}
      />
      <InductorIcon
        size='3rem'
        className='icon-float-13 absolute'
      />
      <FaBroadcastTower
        className='icon-float-14 absolute w-12 h-12'
        strokeWidth={1}
      />
    </div>
  )
}

export default FloatingIcons
