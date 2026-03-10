import React from 'react'

interface PrimaryButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

const PrimaryButton = ({
  children,
  onClick,
  className = '',
  type = 'button',
}: PrimaryButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn-primary ${className}`}
    >
      {children}
    </button>
  )
}

export default PrimaryButton
