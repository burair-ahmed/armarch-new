'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useTransform, useMotionValue, MotionValue, useMotionValueEvent } from 'framer-motion'
import Image from 'next/image'

/* ─────────────────────────────────────────────────────────────
   BranchDiagram Component (Our Services)
   Identical across all screen sizes (Mobile + Tablet + PC)
   ───────────────────────────────────────────────────────────── */

const SERVICES = [
  {
    number: '01',
    title: '01. Architectural Design',
    desc: 'Creating innovative, functional, and sustainable architectural solutions tailored to residential, commercial, hospitality, and mixed-use developments.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="5" width="20" height="22" rx="2" strokeWidth="2" />
        <path d="M8 10h12M8 15h8M8 20h12" strokeWidth="1.5" strokeDasharray="2 2" />
        <circle cx="16" cy="15" r="3" />
        <path d="M22 22l5 5M25 22l2 2" strokeWidth="2" />
      </svg>
    ),
  },
  {
    number: '02',
    title: '02. Interior Design',
    desc: 'Designing refined interior environments that combine aesthetics, functionality, and user experience to create timeless spaces.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="6" width="18" height="14" rx="2" strokeWidth="2" />
        <path d="M14 20v4M10 24h8" />
        <path d="M8 13h4M10 10v4" />
        <path d="M21 16l6 6M25 16l2 2" strokeWidth="2" />
        <path d="M21 24h6" />
      </svg>
    ),
  },
  {
    number: '03',
    title: '03. Visualization',
    desc: 'Producing photorealistic architectural renderings, animations, and visual experiences that bring concepts to life with exceptional clarity.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 14L16 5l12 9" strokeWidth="2" />
        <path d="M6 14v12h20V14" strokeWidth="2" />
        <rect x="12" y="18" width="8" height="8" rx="1" />
        <path d="M3 26h26" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    number: '04',
    title: '04. Design Consultancy',
    desc: 'Providing strategic design guidance, procurement support, and project coordination to help clients make informed decisions throughout the project lifecycle.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10" cy="11" r="4" strokeWidth="2" />
        <path d="M4 23c0-3.3 2.7-6 6-6s6 2.7 6 6" strokeWidth="2" />
        <circle cx="22" cy="12" r="3" />
        <path d="M18 23c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5" />
        <path d="M20 6h7a2 2 0 012 2v3a2 2 0 01-2 2h-2l-3 3v-3h-2a2 2 0 01-2-2V8a2 2 0 012-2z" fill="#111" stroke="none" />
        <circle cx="22" cy="9.5" r="0.8" fill="#fff" />
        <circle cx="24.5" cy="9.5" r="0.8" fill="#fff" />
        <circle cx="27" cy="9.5" r="0.8" fill="#fff" />
      </svg>
    ),
  },
]

/* Geometry parameters for SVG Branch Arc (Gentle/Sleek Curvature & Anchored Endpoints) */
const SVG_W = 140
const SVG_H = 460

// Root endpoints match card 0 and card 3 vertical centers with 80px cards in 460px column
const CIRCLE_TOP    = { x: 45, y: 40 }
const CIRCLE_BOTTOM = { x: 45, y: 420 }

// Shallower, elegant arc curve (flatter sweep, less bulge)
const ARC_PATH = `M ${CIRCLE_TOP.x} ${CIRCLE_TOP.y} Q 208 230 ${CIRCLE_BOTTOM.x} ${CIRCLE_BOTTOM.y}`

// 4 Connector lines — start points computed from Q 208 230 bezier with y(t)=40+380t, x(t)=45+326t(1-t)
const BRANCH_PATHS = [
  `M 74 78 L 140 40`,    // Line 0: t=0.10 on arc → card 0 center y=40  (tilts UP)
  `M 118 167 L 140 167`, // Line 1: t=0.334 on arc → card 1 center y=167 (horizontal)
  `M 118 293 L 140 293`, // Line 2: t=0.666 on arc → card 2 center y=293 (horizontal)
  `M 74 382 L 140 420`,  // Line 3: t=0.90  on arc → card 3 center y=420 (tilts DOWN)
]

const THRESHOLDS = [
  { root: [0.00, 0.10], line: [0.05, 0.26], bar: 0.26 },
  { root: [0.00, 0.10], line: [0.26, 0.47], bar: 0.47 },
  { root: [0.00, 0.10], line: [0.47, 0.68], bar: 0.68 },
  { root: [0.00, 0.10], line: [0.68, 0.90], bar: 0.90 },
]

interface BranchDiagramProps {
  scrollProgress?: MotionValue<number>
}

export default function BranchDiagram({ scrollProgress }: BranchDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [barsVisible, setBarsVisible] = useState<boolean[]>(Array(4).fill(false))

  const staticZero = useMotionValue(0)
  const prog = scrollProgress ?? staticZero

  const arcPathLength = useTransform(prog, [0.02, 0.70], [0, 1])
  const line0 = useTransform(prog, [THRESHOLDS[0].line[0], THRESHOLDS[0].line[1]], [0, 1])
  const line1 = useTransform(prog, [THRESHOLDS[1].line[0], THRESHOLDS[1].line[1]], [0, 1])
  const line2 = useTransform(prog, [THRESHOLDS[2].line[0], THRESHOLDS[2].line[1]], [0, 1])
  const line3 = useTransform(prog, [THRESHOLDS[3].line[0], THRESHOLDS[3].line[1]], [0, 1])

  const lineMotions = [line0, line1, line2, line3]
  const rootOpacity = useTransform(prog, [THRESHOLDS[0].root[0], THRESHOLDS[0].root[1]], [0, 1])

  useMotionValueEvent(prog, 'change', (v) => {
    setBarsVisible([
      v >= THRESHOLDS[0].bar,
      v >= THRESHOLDS[1].bar,
      v >= THRESHOLDS[2].bar,
      v >= THRESHOLDS[3].bar,
    ])
  })

  useEffect(() => {
    if (scrollProgress) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        obs.disconnect()
        ;[0, 1, 2, 3].forEach((i) =>
          setTimeout(() => {
            setBarsVisible((prev) => {
              const n = [...prev]
              n[i] = true
              return n
            })
          }, 300 + i * 250)
        )
      },
      { threshold: 0.2 }
    )
    if (containerRef.current) obs.observe(containerRef.current)
    return () => obs.disconnect()
  }, [scrollProgress])

  return (
    <section
      ref={containerRef}
      aria-label="Our Services"
      className="w-full h-full flex items-center justify-center bg-[#f2f2f2] py-4 sm:py-6 overflow-hidden"
    >
      <div className="w-[94%] max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.35fr] gap-6 lg:gap-8 items-center">

        {/* ── LEFT COLUMN: Images (top.png & bottom.png) + Heading "Our Services" ── */}
        <div className="flex flex-col items-center justify-center text-center gap-2 sm:gap-3 lg:gap-4">
          {/* Top Images */}
          <div className="relative w-full max-w-[460px] h-[120px] sm:h-[180px] lg:h-[200px]">
            <Image
              src="/top.png"
              alt="ArmArch Interior & Architecture Renders Top"
              fill
              sizes="(max-width: 1024px) 100vw, 500px"
              className="object-contain object-center"
              priority
            />
          </div>

          {/* Heading */}
          <h2
            className="font-black text-[#111111] leading-[0.9] tracking-tight my-1 sm:my-2"
            style={{ fontSize: 'clamp(28px, 5vw, 68px)' }}
          >
            Our Services
          </h2>

          {/* Bottom Images */}
          <div className="relative w-full max-w-[460px] h-[120px] sm:h-[180px] lg:h-[200px]">
            <Image
              src="/bottom.png"
              alt="ArmArch Exterior & Living Renders Bottom"
              fill
              sizes="(max-width: 1024px) 100vw, 500px"
              className="object-contain object-center"
              priority
            />
          </div>
        </div>

        {/* ── RIGHT COLUMN: Branch SVG Arc + 4 Service Cards (EXACT SAME LAYOUT ON ALL DEVICES) ── */}
        <div className="w-full flex items-center justify-center overflow-x-auto py-2">
          
          <div className="flex items-center w-full min-w-[340px] max-w-[620px] relative">
            
            {/* SVG Connector Arc */}
            <svg
              viewBox={`0 0 ${SVG_W} ${SVG_H}`}
              width={SVG_W}
              height={SVG_H}
              className="flex-shrink-0 pointer-events-none select-none z-10 -mr-5 sm:-mr-6 w-[80px] sm:w-[120px] md:w-[140px]"
              style={{ overflow: 'visible' }}
              aria-hidden="true"
            >
              {/* Top Root Node Circle */}
              <motion.circle
                cx={CIRCLE_TOP.x}
                cy={CIRCLE_TOP.y}
                r={8}
                fill="#111111"
                style={{ opacity: rootOpacity }}
              />

              {/* Bottom Root Node Circle */}
              <motion.circle
                cx={CIRCLE_BOTTOM.x}
                cy={CIRCLE_BOTTOM.y}
                r={8}
                fill="#111111"
                style={{ opacity: rootOpacity }}
              />

              {/* Gentle Semi-Circular Arc Path */}
              <motion.path
                d={ARC_PATH}
                fill="none"
                stroke="#111111"
                strokeWidth={2.2}
                strokeLinecap="round"
                style={{ pathLength: arcPathLength }}
              />

              {/* 4 Branch Connector Lines */}
              {BRANCH_PATHS.map((d, i) => (
                <motion.path
                  key={i}
                  d={d}
                  fill="none"
                  stroke="#111111"
                  strokeWidth={2.2}
                  style={{
                    pathLength: lineMotions[i],
                  }}
                />
              ))}
            </svg>

            {/* 4 Cards Column — height locked to SVG_H so card centers align with branch endpoints */}
            <div className="flex flex-col justify-between flex-1" style={{ height: SVG_H }}>
              {SERVICES.map((service, index) => (
                <ServiceCard
                  key={index}
                  service={service}
                  index={index}
                  visible={barsVisible[index]}
                />
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

interface ServiceCardProps {
  service: typeof SERVICES[0]
  index: number
  visible: boolean
}

function ServiceCard({ service, index, visible }: ServiceCardProps) {
  return (
    <div
      className="relative w-full flex items-center transition-all duration-500 ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateX(0)' : 'translateX(-20px)',
      }}
    >
      {/* Black Pill Card — pl-4 gives white circle breathing room from left curved edge */}
      <div
        className="relative w-full bg-[#111111] text-white rounded-full pl-4 sm:pl-5 pr-4 sm:pr-6 py-3 flex items-center gap-2.5 sm:gap-4 shadow-md overflow-hidden group hover:scale-[1.015] transition-transform duration-200"
        style={{ minHeight: '80px' }}
      >
        {/* Subtle Crosshatch Pattern Background Overlay */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
          aria-hidden="true"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern
              id={`card-xh-${index}`}
              patternUnits="userSpaceOnUse"
              width="20"
              height="20"
              patternTransform="rotate(45 0 0)"
            >
              <line x1="10" y1="0" x2="10" y2="20" stroke="#ffffff" strokeWidth="1" />
              <line x1="0" y1="10" x2="20" y2="10" stroke="#ffffff" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#card-xh-${index})`} />
        </svg>

        {/* White Circle Icon Container */}
        <div className="relative shrink-0 w-10 h-10 sm:w-13 sm:h-13 lg:w-15 lg:h-15 rounded-full bg-white flex items-center justify-center shadow-inner z-10 ml-8">
          <div className="transform scale-75 sm:scale-90 lg:scale-100 flex items-center justify-center">
            {service.icon}
          </div>
        </div>

        {/* Card Content: Title + Description */}
        <div className="flex flex-col justify-center min-w-0 z-10 pr-1 sm:pr-2">
          {/* Title */}
          <h3 className="font-extrabold text-white text-[11px] sm:text-sm lg:text-base leading-tight tracking-tight underline decoration-white/40 underline-offset-2 mb-0.5 sm:mb-1">
            {service.title}
          </h3>

          {/* Description Text */}
          <p className="text-gray-300 text-[9px] sm:text-[11px] lg:text-xs leading-tight font-normal line-clamp-3 sm:line-clamp-none">
            {service.desc}
          </p>
        </div>
      </div>
    </div>
  )
}
