import React from 'react'

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className='card-glass flex flex-col items-center text-center'>
      <div className='mb-4'>{icon}</div>
      <h3 className='text-xl font-bold text-white mb-2'>{title}</h3>
      <p className='text-gray flex-grow'>{description}</p>
    </div>
  )
}

export default ServiceCard
