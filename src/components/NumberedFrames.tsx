'use client'

import { useEffect, useRef } from 'react'

// Each frame's stroke color (subtle variations as in reference)
const FRAME_COLORS = ['#3a3a3a', '#5a4a4a', '#222222', '#555555']

// SVG path for the open-corner frame
// The frame is a rounded rectangle with the bottom-left corner open (no corner arc, left edge stops short, bottom edge stops short)
// Parameters: width, height, radius, gap (how far the edges stop from the corner)
function buildOpenCornerPath(w: number, h: number, r: number, gap: number): string {
  // Start from top-left corner arc end (going right along top)
  // Top edge: left→right
  // Top-right corner arc
  // Right edge: top→bottom
  // Bottom-right corner arc
  // Bottom edge: right→left (stops 'gap' before bottom-left corner)
  // (no bottom-left corner arc)
  // Left edge: bottom→top (starts 'gap' above bottom-left corner, goes up to top-left arc start)
  // Top-left corner arc

  return [
    // Start at end of top-left arc (going right)
    `M ${r} 0`,
    // Top edge
    `L ${w - r} 0`,
    // Top-right corner arc (clockwise)
    `Q ${w} 0 ${w} ${r}`,
    // Right edge
    `L ${w} ${h - r}`,
    // Bottom-right corner arc (clockwise)
    `Q ${w} ${h} ${w - r} ${h}`,
    // Bottom edge (stops 'gap' before bottom-left)
    `L ${gap} ${h}`,
    // (open notch — no arc, no corner)
    // Left edge starts from 'gap' above bottom
    `M ${0} ${h - gap}`,
    // Left edge going up
    `L ${0} ${r}`,
    // Top-left corner arc (clockwise)
    `Q ${0} ${0} ${r} ${0}`,
  ].join(' ')
}

interface FrameProps {
  number: number
  color: string
  delay: number
}

function NumberFrame({ number, color, delay }: FrameProps) {
  const pathRef = useRef<SVGPathElement>(null)
  const numRef = useRef<SVGTextElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)

  const W = 180
  const H = 180
  const R = 22
  const GAP = 48 // how far each open edge stops from the bottom-left corner

  const pathData = buildOpenCornerPath(W, H, R, GAP)

  useEffect(() => {
    const path = pathRef.current
    const num = numRef.current
    if (!path || !num) return

    // Measure total path length (two subpaths combined)
    const len = path.getTotalLength()

    // Set initial state: stroke hidden
    path.style.strokeDasharray = `${len}`
    path.style.strokeDashoffset = `${len}`
    path.style.opacity = '1'

    // Number starts hidden
    num.style.opacity = '0'
    num.style.transform = 'translate(-8px, 8px)'

    // Draw animation
    const drawTimer = setTimeout(() => {
      path.style.transition = `stroke-dashoffset 0.9s cubic-bezier(0.4, 0, 0.2, 1)`
      path.style.strokeDashoffset = '0'

      // After draw completes, show number
      const numTimer = setTimeout(() => {
        num.style.transition = `opacity 0.4s ease, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)`
        num.style.opacity = '1'
        num.style.transform = 'translate(0, 0)'
      }, 900)

      return () => clearTimeout(numTimer)
    }, delay)

    return () => clearTimeout(drawTimer)
  }, [delay])

  return (
    <div
      className="relative group cursor-default select-none"
      style={{ width: W, height: H }}
    >
      <svg
        ref={svgRef}
        viewBox={`0 0 ${W} ${H}`}
        width={W}
        height={H}
        overflow="visible"
        style={{ display: 'block' }}
      >
        {/* Open-corner frame path */}
        <path
          ref={pathRef}
          d={pathData}
          fill="none"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            transition: 'stroke 0.3s ease',
          }}
          className="group-hover:[stroke-width:3] group-hover:opacity-100"
        />

        {/* Number at bottom-left, overlapping the open notch */}
        <text
          ref={numRef}
          x={-2}
          y={H + 2}
          dominantBaseline="auto"
          textAnchor="start"
          style={{
            fontSize: '120px',
            fontFamily: 'var(--font-montserrat), sans-serif',
            fontWeight: 300,
            fill: color,
            letterSpacing: '-4px',
            opacity: 0,
          }}
        >
          {number}
        </text>
      </svg>

      {/* Hover scale overlay */}
      <style>{`
        .group:hover svg path { stroke: ${color === '#222222' ? '#000' : color}; }
      `}</style>
    </div>
  )
}

export default function NumberedFrames() {
  return (
    <div
      className="w-full flex items-center justify-center py-10 sm:py-16"
      style={{ background: '#f5f5f5' }}
    >
      {/* Responsive: row on md+, 2x2 grid on small */}
      <div className="grid grid-cols-2 md:flex md:flex-row md:items-center md:justify-center gap-8 sm:gap-12 md:gap-10 lg:gap-16">
        {FRAME_COLORS.map((color, i) => (
          <div
            key={i}
            className="transition-transform duration-300 ease-out hover:scale-105"
          >
            <NumberFrame
              number={i + 1}
              color={color}
              delay={i * 220}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
