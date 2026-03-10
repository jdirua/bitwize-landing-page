import React from 'react'

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className='card-glass'>
      <div className='feature-content'>
        <div className='mb-4'>{icon}</div>
        <h3 className='text-xl font-bold mb-2'>{title}</h3>
        <p className='text-gray'>{description}</p>
      </div>
    </div>
  )
}

export default FeatureCard
