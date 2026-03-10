import React from 'react'
import SectionContainer from '@/components/layout/SectionContainer'
import PortfolioCard from '@/components/cards/PortfolioCard'

const portfolioItems = [
  {
    title: 'Industrial Supplies PNG',
    description:
      'We developed a dynamic e-commerce platform and informational website for Industrial Supplies PNG. This comprehensive solution allows them to showcase their company and sell products online, driving business growth and expanding their market reach.',
    link: '#', // Add project link here
  },
  {
    title: 'Fleetshop',
    description:
      "This is our flagship project, Fleetshop. It's a modern, web-based workshop management application designed for the PNG market. It streamlines operations, manages fleets, and boosts productivity with a clean, intuitive interface built on Next.js, tailored for PNG's unique operational environment.",
    link: '#', // Add project link here
  },
  {
    title: 'PNG Readymix',
    description:
      "We designed a modern and stylish informational website for PNG Readymix, a leading supplier of construction materials in Papua New Guinea. The new site enhances their brand's digital presence, reflecting their decades of industry leadership with a fresh, engaging, and professional online platform.",
    link: '#', // Add project link here
  },
]

const Portfolio = () => {
  return (
    <SectionContainer id='portfolio'>
      <h2 className='text-3xl font-bold text-center mb-12'>
        <span className='bg-gradient-to-r from-cyan to-purple text-transparent bg-clip-text'>
          Our Portfolio
        </span>
      </h2>
      <div className='portfolio-grid'>
        {portfolioItems.map((item, index) => (
          <PortfolioCard
            key={index}
            title={item.title}
            description={item.description}
            link={item.link}
          />
        ))}
      </div>
    </SectionContainer>
  )
}

export default Portfolio
