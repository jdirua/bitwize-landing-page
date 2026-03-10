'use client'
import React from 'react'
import PrimaryButton from '@/components/buttons/PrimaryButton'
import SecondaryButton from '@/components/buttons/SecondaryButton'
import SectionContainer from '@/components/layout/SectionContainer'
import AnimatedGrid from '@/components/ui/AnimatedGrid'

const Hero = () => {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <SectionContainer className='relative flex items-center justify-center text-center overflow-hidden'>
      <AnimatedGrid />
      <div className='relative z-10 flex flex-col items-center card-glass'>
        <h1
          className='text-5xl md:text-7xl font-bold text-white mb-4 fade-in-down'
          style={{ animationDelay: '0.2s' }}
        >
          Turning Raw Logic into Digital Magic
        </h1>
        <p
          className='text-lg md:text-xl text-gray mb-8 max-w-2xl fade-in-up'
          style={{ animationDelay: '0.4s' }}
        >
          To empower businesses and individuals with cutting-edge digital
          solutions that drive growth, enhance operational efficiency, and
          create seamless user experiences. Bitwise Technologies bridge the gap
          between complex technology and real-world business needs.
        </p>
        <div
          className='cta-buttons fade-in-up'
          style={{ animationDelay: '0.6s' }}
        >
          <PrimaryButton onClick={() => handleScrollTo('services')}>
            Explore Services
          </PrimaryButton>
          <SecondaryButton onClick={() => handleScrollTo('portfolio')}>
            View Work
          </SecondaryButton>
        </div>
      </div>
    </SectionContainer>
  )
}

export default Hero
