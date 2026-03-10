import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={`bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-white border-opacity-20 rounded-lg shadow-lg transition-all duration-300 hover:shadow-cyan-500/50 ${className}`}
    >
      {children}
    </div>
  )
}

export default Card
