import React from 'react'

interface SectionContainerProps {
  children: React.ReactNode
  className?: string
  id?: string
}

const SectionContainer = ({
  children,
  className = '',
  id,
}: SectionContainerProps) => {
  return (
    <section id={id} className={`section-container ${className}`}>
      {children}
    </section>
  )
}

export default SectionContainer
