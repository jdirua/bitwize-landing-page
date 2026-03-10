import React from 'react'
import SectionContainer from '@/components/layout/SectionContainer'
import BrandCard from '@/components/cards/BrandCard'
import { FaLayerGroup, FaShoppingBag } from 'react-icons/fa'

const Brands = () => {
  return (
    <SectionContainer id='brands'>
      <h2 className='text-3xl lg:text-4xl font-bold text-center mb-12 lg:mb-16'>
        <span className='bg-gradient-to-r from-cyan to-purple text-transparent bg-clip-text'>
          Our Brands
        </span>
      </h2>
      <div className='brands-container'>
        <BrandCard
          logo={<FaLayerGroup size={40} className='text-purple' />}
          name='Bitwize'
          description='Our primary brand, focused on delivering bespoke technology solutions, including web development, ICT consultation, and custom engineering. Bitwize is the face of our client-facing services, representing our commitment to quality, innovation, and partnership.'
        />
        <BrandCard
          logo={<FaShoppingBag size={40} className='text-cyan' />}
          name='e-Koble'
          description='Our e-commerce division, dedicated to developing and managing our own line of online products. e-Koble is our space for experimentation and product-led growth, and it informs our expertise in the e-commerce landscape.'
        />
      </div>
    </SectionContainer>
  )
}

export default Brands
