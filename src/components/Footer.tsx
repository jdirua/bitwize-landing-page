'use client'
import React from 'react'
import { FaGithub, FaTwitter, FaLinkedin, FaArrowUp } from 'react-icons/fa'

const Footer = () => {
  const scrollToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer className='bg-deep-space py-8 relative border-t border-gray/20'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <p className='text-gray text-center md:text-left mb-4 md:mb-0'>
            &copy; {new Date().getFullYear()} Bitwize. All rights reserved.
          </p>
          <div className='flex items-center space-x-6'>
            <a
              href='https://github.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray hover:text-white transition-all duration-300'
            >
              <FaGithub size={24} />
            </a>
            <a
              href='https://twitter.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray hover:text-white transition-all duration-300'
            >
              <FaTwitter size={24} />
            </a>
            <a
              href='https://linkedin.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray hover:text-white transition-all duration-300'
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
      <button
        onClick={scrollToTop}
        className='absolute -top-6 right-10 bg-purple hover:bg-cyan text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none'
        aria-label='Scroll to top'
      >
        <FaArrowUp size={20} />
      </button>
    </footer>
  )
}

export default Footer
