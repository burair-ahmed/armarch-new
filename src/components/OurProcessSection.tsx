'use client'

import { useEffect, useRef } from 'react'

const UNIFIED_COLOR = '#222222'
const UNIFIED_STROKE_WIDTH = 2.5

const steps = [
  {
    code: '01 → Discovery',
    desc: 'Understanding your vision and project objectives.',
  },
  {
    code: '02 → Design',
    desc: 'Developing innovative architectural and interior solutions.',
  },
  {
    code: '03 → Visualize',
    desc: 'Producing photorealistic CGI and immersive presentations.',
  },
  {
    code: '04 → Refine & Deliver',
    desc: 'Incorporating feedback to achieve design excellence. Providing final assets with quality, precision, and reliability.',
  },
]

// Open-corner SVG path: rounded rect with bottom-left notch wide open
function buildOpenCornerPath(
  ox: number,
  oy: number,
  w: number,
  h: number,
  r: number,
  gapX: number,
  gapY: number
): string {
  const right = ox + w
  const bottom = oy + h

  return [
    `M ${ox + r} ${oy}`,
    `L ${right - r} ${oy}`,
    `Q ${right} ${oy} ${right} ${oy + r}`,
    `L ${right} ${bottom - r}`,
    `Q ${right} ${bottom} ${right - r} ${bottom}`,
    `L ${ox + gapX} ${bottom}`,
    `M ${ox} ${bottom - gapY}`,
    `L ${ox} ${oy + r}`,
    `Q ${ox} ${oy} ${ox + r} ${oy}`,
  ].join(' ')
}

interface StepCardProps {
  number: number
  code: string
  desc: string
  delay: number
}

function StepCard({ number, code, desc, delay }: StepCardProps) {
  const pathRef = useRef<SVGPathElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const numRef = useRef<SVGTextElement>(null)

  const CANVAS_W = 240
  const CANVAS_H = 270

  const OX = 18
  const OY = 10
  const W = 208
  const H = 240
  const R = 24
  const GAP_X = 75
  const GAP_Y = 65

  const pathData = buildOpenCornerPath(OX, OY, W, H, R, GAP_X, GAP_Y)

  useEffect(() => {
    const path = pathRef.current
    const content = contentRef.current
    const num = numRef.current
    if (!path || !content || !num) return

    const len = path.getTotalLength()
    path.style.strokeDasharray = `${len}`
    path.style.strokeDashoffset = `${len}`
    content.style.opacity = '0'
    content.style.transform = 'translateY(8px)'
    num.style.opacity = '0'
    num.style.transform = 'translate(-6px, 6px)'

    const t1 = setTimeout(() => {
      path.style.transition = `stroke-dashoffset 0.9s cubic-bezier(0.4, 0, 0.2, 1)`
      path.style.strokeDashoffset = '0'

      const t2 = setTimeout(() => {
        num.style.transition = `opacity 0.4s ease, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)`
        num.style.opacity = '1'
        num.style.transform = 'translate(0, 0)'

        content.style.transition = `opacity 0.45s ease, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)`
        content.style.opacity = '1'
        content.style.transform = 'translateY(0)'
      }, 850)

      return () => clearTimeout(t2)
    }, delay)

    return () => clearTimeout(t1)
  }, [delay])

  return (
    <div className="relative group w-full max-w-[170px] sm:max-w-[240px] aspect-[240/270] mx-auto cursor-default select-none transition-transform duration-300 hover:scale-[1.03]">
      {/* SVG frame */}
      <svg
        viewBox={`0 0 ${CANVAS_W} ${CANVAS_H}`}
        width="100%"
        height="100%"
        overflow="visible"
        style={{ position: 'absolute', inset: 0 }}
      >
        <path
          ref={pathRef}
          d={pathData}
          fill="none"
          stroke={UNIFIED_COLOR}
          strokeWidth={UNIFIED_STROKE_WIDTH}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ transition: 'stroke 0.3s ease' }}
        />
        {/* Background number in open notch */}
        <text
          ref={numRef}
          x={OX - 10}
          y={OY + H + 4}
          dominantBaseline="auto"
          textAnchor="start"
          style={{
            fontSize: '92px',
            fontFamily: 'var(--font-montserrat), sans-serif',
            fontWeight: 300,
            fill: UNIFIED_COLOR,
            letterSpacing: '-3px',
            opacity: 0,
          }}
        >
          {number}
        </text>
      </svg>

      {/* Text content strictly constrained & vertically centered inside the frame */}
      <div
        ref={contentRef}
        className="absolute flex flex-col items-center justify-center text-center pointer-events-none"
        style={{
          top: `${(OY / CANVAS_H) * 100}%`,
          left: `${(OX / CANVAS_W) * 100}%`,
          width: `${(W / CANVAS_W) * 100}%`,
          height: `${((H - 24) / CANVAS_H) * 100}%`,
          opacity: 0,
        }}
      >
        <div className="w-full max-w-[130px] sm:max-w-[165px] px-1 flex flex-col items-center justify-center">
          <p className="font-bold text-[#111111] leading-tight mb-1 sm:mb-2.5 text-center text-[10px] sm:text-[15px]">
            {code}
          </p>
          <p className="text-[#333333] leading-snug sm:leading-relaxed font-normal text-center text-[8.5px] sm:text-[13px]">
            {desc}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function OurProcessSection() {
  return (
    <div className="w-full min-h-full flex items-center justify-center py-6 sm:py-10 bg-[#f5f4f0]">
      <div className="w-[88%] max-w-[1100px] mx-auto flex flex-col gap-6 sm:gap-8 lg:gap-12">

        {/* ── TOP ROW: Heading (left) + Paragraph (right) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-10 items-end">
          <h2
            className="font-black text-[#111111] leading-[0.9] tracking-tight"
            style={{ fontSize: 'clamp(32px, 6vw, 82px)' }}
          >
            Our Process
          </h2>
          <p className="text-xs sm:text-[13px] text-[#333333] leading-relaxed font-normal">
            Our process is built on collaboration, creativity, and precision.
            From understanding your vision to delivering the final outcome, we
            ensure every stage is carefully managed to achieve exceptional
            design quality and lasting value.
          </p>
        </div>

        {/* ── BOTTOM ROW: 4 Step Cards (2 columns on mobile, 4 columns on lg) ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-4 items-center justify-items-center">
          {steps.map((step, i) => (
            <StepCard
              key={i}
              number={i + 1}
              code={step.code}
              desc={step.desc}
              delay={300 + i * 220}
            />
          ))}
        </div>

      </div>
    </div>
  )
}
