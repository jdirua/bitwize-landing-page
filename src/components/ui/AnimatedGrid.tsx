import React from 'react'

const AnimatedGrid = () => {
  return (
    <div className='absolute inset-0 z-0 opacity-20'>
      <div className='absolute inset-0 animated-grid-background'></div>
      <div className='absolute inset-0 animated-grid-gradient'></div>
    </div>
  )
}

export default AnimatedGrid
