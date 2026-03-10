import React from 'react'
import {
  FaStar,
  FaUserCheck,
  FaLightbulb,
  FaRocket,
  FaBrain,
} from 'react-icons/fa'
import SectionContainer from '@/components/layout/SectionContainer'
import FeatureCard from '@/components/cards/FeatureCard'

const features = [
  {
    icon: <FaStar size={40} className='text-purple' />,
    title: 'Integrated Expertise',
    description:
      'My unique combination of web, e-commerce, IT, and electronics engineering allows me to tackle complex, multi-faceted projects that other single-focus tech agencies cannot.',
  },
  {
    icon: <FaUserCheck size={40} className='text-cyan' />,
    title: 'Direct Accountability',
    description:
      'You work directly with the owner and lead engineer. This ensures clear communication, rapid iteration, and a consistent quality of work from concept to deployment.',
  },
  {
    icon: <FaLightbulb size={40} className='text-cyan' />,
    title: 'Strategic & Technical Insight',
    description:
      'I go beyond coding to provide strategic consultation, ensuring the technology I build aligns perfectly with your business goals.',
  },
  {
    icon: <FaRocket size={40} className='text-purple' />,
    title: 'Agility & Flexibility',
    description:
      'As a sole trader, I can adapt quickly to your changing needs, pivot on requirements, and deliver efficient, cost-effective solutions without bureaucratic delays.',
  },
  {
    icon: <FaBrain size={40} className='text-cyan' />,
    title: 'Product-Led Thinking',
    description:
      'Through my eKoble operations, I possess firsthand experience in running and scaling e-commerce products, providing invaluable insights for your own online ventures.',
  },
]

const WhyChooseUs = () => {
  return (
    <SectionContainer id='why-choose-us'>
      <h2 className='text-3xl lg:text-4xl font-bold text-center mb-12 lg:mb-16'>
        <span className='bg-gradient-to-r from-cyan to-purple text-transparent bg-clip-text'>
          Why Choose Bitwise Technologies?
        </span>
      </h2>
      <div className='features-grid'>
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </SectionContainer>
  )
}

export default WhyChooseUs
