import React from 'react'

interface BrandCardProps {
  logo: React.ReactNode
  name: string
  description: string
}

const BrandCard: React.FC<BrandCardProps> = ({ logo, name, description }) => {
  return (
    <div className='card-glass'>
      <div className='brand-content'>
        <div className='brand-logo mb-4'>{logo}</div>
        <h3 className='text-2xl font-bold mb-3'>{name}</h3>
        <p className='text-gray-400 max-w-md'>{description}</p>
      </div>
    </div>
  )
}

export default BrandCard
