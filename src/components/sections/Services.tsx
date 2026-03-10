import React from 'react'
import {
  FaGlobe,
  FaShoppingCart,
  FaBullhorn,
  FaMicrochip,
  FaWrench,
} from 'react-icons/fa'
import SectionContainer from '@/components/layout/SectionContainer'
import ServiceCard from '@/components/cards/ServiceCard'

const services = [
  {
    icon: <FaGlobe size={40} className='text-purple' />,
    title: 'Web Technologies',
    description:
      'Custom website design, full-stack web application development, and progressive web apps (PWAs) built with modern frameworks.',
  },
  {
    icon: <FaShoppingCart size={40} className='text-cyan' />,
    title: 'e-Commerce Solutions',
    description:
      'End-to-end online store development, platform integration (e.g., Shopify, WooCommerce), payment gateway setup, and inventory management systems.',
  },
  {
    icon: <FaBullhorn size={40} className='text-cyan' />,
    title: 'ICT Consultation',
    description:
      'Strategic technology advice, system architecture design, software integration, and digital transformation roadmap planning for businesses.',
  },
  {
    icon: <FaMicrochip size={40} className='text-purple' />,
    title: 'Electronics & Engineering',
    description:
      'Prototyping, circuit design, embedded systems programming, and IoT (Internet of Things) device development.',
  },
  {
    icon: <FaWrench size={40} className='text-purple' />,
    title: 'Custom Solutions',
    description:
      'I understand that every client’s challenge is unique. We offer tailored packages and bespoke engineering to meet your specific technical and business requirements.',
  },
]

const Services = () => {
  return (
    <SectionContainer id='services'>
      <h2 className='text-3xl lg:text-4xl font-bold text-center mb-12 lg:mb-16'>
        <span className='bg-gradient-to-r from-cyan to-purple text-transparent bg-clip-text'>
          Our Services
        </span>
      </h2>
      <div className='services-grid'>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </SectionContainer>
  )
}

export default Services
