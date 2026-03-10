
'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const smoothScroll = useSmoothScroll(80) // 80px offset for the header

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll)

    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.body.style.overflow = 'unset'
    }
  }, [scrolled, isOpen])

  const navLinks = [
    { href: '#about', text: 'About' },
    { href: '#brands', text: 'Brands' },
    { href: '#services', text: 'Services' },
    { href: '#portfolio', text: 'Portfolio' },
    { href: '#contact', text: 'Contact' },
  ]

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    smoothScroll(e)
    setIsOpen(false)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 transition-all duration-300 ${
          scrolled ? 'bg-surface/80 backdrop-blur-sm' : 'bg-transparent'
        }`}
      >
        <Link href='/' className='flex items-center'>
          <span className='text-xl font-bold bg-gradient-to-r from-cyan to-purple text-transparent bg-clip-text brightness-110'>
            Bitwize Technologies
          </span>
        </Link>
        <nav className='max-md:hidden md:flex'>
          <ul className='flex space-x-6'>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={smoothScroll}
                  className='text-gray hover:text-white transition-colors'
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className='md:hidden'>
          <button onClick={() => setIsOpen(!isOpen)} className='text-white'>
            <FiMenu size={28} />
          </button>
        </div>
      </header>

      <div
        className={`fixed top-0 left-0 w-full h-full bg-deep-space/95 backdrop-blur-lg z-50 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden`}
      >
        <div className='flex justify-end p-4'>
          <button onClick={() => setIsOpen(false)} className='text-white'>
            <FiX size={32} />
          </button>
        </div>
        <nav className='flex flex-col items-center justify-center h-full -mt-16'>
          <ul className='flex flex-col space-y-8 text-center'>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={handleLinkClick}
                  className='text-3xl font-semibold text-white hover:text-cyan transition-colors'
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Header
