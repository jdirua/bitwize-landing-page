'use client'

import React, { useEffect, useRef } from 'react'

const CircuitTile = ({ x, y }: { x: number; y: number }) => (
  <g transform={`translate(${x}, ${y})`}>
    {/* Circuit paths */}
    <path id={`path-1-${x}-${y}`} d="M80 400 L80 350 L120 310 L120 200 L160 160" stroke="var(--color-purple)" strokeWidth="0.5" fill="none" opacity="0.3"/>
    <path id={`path-2-${x}-${y}`} d="M180 400 L180 320 L220 280" stroke="var(--color-purple)" strokeWidth="0.5" fill="none" opacity="0.3"/>
    <path id={`path-3-${x}-${y}`} d="M120 250 L90 220" stroke="var(--color-purple)" strokeWidth="0.5" fill="none" opacity="0.3"/>
    <path id={`path-4-${x}-${y}`} d="M220 220 L250 190" stroke="var(--color-purple)" strokeWidth="0.5" fill="none" opacity="0.3"/>
    <path id={`path-5-${x}-${y}`} d="M300 120 L340 80" stroke="var(--color-purple)" strokeWidth="0.5" fill="none" opacity="0.3"/>
    <path id={`path-6-${x}-${y}`} d="M10 200 L 50 160 L 50 100 L 80 70" stroke="var(--color-purple)" strokeWidth="0.5" fill="none" opacity="0.3"/>

    {/* Static nodes */}
    <circle cx="160" cy="160" r="2" fill="var(--color-cyan)" opacity="0.7" filter="url(#glow)"/>
    <circle cx="220" cy="280" r="2" fill="var(--color-cyan)" opacity="0.7" filter="url(#glow)"/>
    <circle cx="340" cy="80" r="2" fill="var(--color-cyan)" opacity="0.7" filter="url(#glow)"/>
    <circle cx="80" cy="70" r="2" fill="var(--color-cyan)" opacity="0.7" filter="url(#glow)"/>
    <circle cx="120" cy="310" r="2" fill="var(--color-cyan)" opacity="0.7" filter="url(#glow)"/>
    <circle cx="120" cy="200" r="2" fill="var(--color-cyan)" opacity="0.7" filter="url(#glow)"/>
    <circle cx="180" cy="320" r="2" fill="var(--color-cyan)" opacity="0.7" filter="url(#glow)"/>
    <circle cx="120" cy="250" r="2" fill="var(--color-cyan)" opacity="0.7" filter="url(#glow)"/>
    <circle cx="90" cy="220" r="2" fill="var(--color-cyan)" opacity="0.7" filter="url(#glow)"/>
    <circle cx="220" cy="220" r="2" fill="var(--color-cyan)" opacity="0.7" filter="url(#glow)"/>
    <circle cx="250" cy="190" r="2" fill="var(--color-cyan)" opacity="0.7" filter="url(#glow)"/>
    <circle cx="50" cy="160" r="2" fill="var(--color-cyan)" opacity="0.7" filter="url(#glow)"/>
    <circle cx="50" cy="100" r="2" fill="var(--color-cyan)" opacity="0.7" filter="url(#glow)"/>
  </g>
)

const AnimatedGrid = () => {
  const svgRef = useRef<SVGSVGElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!svgRef.current) return
          const paths = Array.from(svgRef.current.querySelectorAll<SVGPathElement>('path[id^="path-"]'))
          const numPaths = paths.length

          if (numPaths === 0) return

          intervalRef.current = setInterval(() => {
            for (let i = 0; i < 3; i++) {
              const randomPathIndex = Math.floor(Math.random() * numPaths)
              const selectedPath = paths[randomPathIndex]

              if (selectedPath) {
                const speck = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
                speck.setAttribute('r', '1.5')
                speck.setAttribute('class', 'speck')
                
                speck.style.offsetPath = `path("${selectedPath.getAttribute('d')}")`

                const delay = Math.random() * 0.5;
                speck.style.animationDelay = `${delay}s`;
                
                const transform = selectedPath.parentElement?.getAttribute('transform') || ''
                const g = document.createElementNS('http://www.w3.org/2000/svg', 'g')
                g.setAttribute('transform', transform)
                g.appendChild(speck)

                svgRef.current?.appendChild(g)

                setTimeout(() => {
                  g.remove()
                }, 4000 + delay * 1000)
              }
            }
          }, 2000)
        } else {
          if (intervalRef.current) {
            clearInterval(intervalRef.current)
            intervalRef.current = null
          }
          if (svgRef.current) {
            const specks = svgRef.current.querySelectorAll('.speck')
            specks.forEach((speck) => speck.parentElement?.remove())
          }
        }
      },
      { threshold: 0 }
    )

    const currentContainer = containerRef.current
    if (currentContainer) {
      observer.observe(currentContainer)
    }

    return () => {
      if (currentContainer) {
        observer.unobserve(currentContainer)
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])
  
  const gridSize = 5; // Create a 5x5 grid
  const tileSize = 400;
  const svgSize = gridSize * tileSize;

  return (
    <div ref={containerRef} className='fixed inset-0 z-0 opacity-30'>
      <svg
        ref={svgRef}
        xmlns="http://www.w3.org/2000/svg"
        width={svgSize}
        height={svgSize}
        viewBox={`0 0 ${svgSize} ${svgSize}`}
        className="absolute top-0 left-0"
      >
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        {Array.from({ length: gridSize }).map((_, i) => (
          Array.from({ length: gridSize }).map((_, j) => (
            <CircuitTile key={`${i}-${j}`} x={i * tileSize} y={j * tileSize} />
          ))
        ))}
      </svg>
    </div>
  )
}

export default AnimatedGrid
