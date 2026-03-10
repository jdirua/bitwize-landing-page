import React from 'react'

interface SecondaryButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

const SecondaryButton = ({
  children,
  onClick,
  className = '',
  type = 'button',
}: SecondaryButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn-secondary ${className}`}
    >
      {children}
    </button>
  )
}

export default SecondaryButton
