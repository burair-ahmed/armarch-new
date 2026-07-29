'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useTransform, useMotionValue, MotionValue, useMotionValueEvent } from 'framer-motion'

/* ─────────────────────────────────────────────────────────────
   BranchDiagram
   ─────────────────────────────────────────────────────────────
   Exact Geometry:
     • Top Root Dot at (24, 34) & Bottom Root Dot at (24, 286)
     • C-Arc path: M 24 34 C 135 34, 135 286, 24 286
     • 4 Branch Connector Lines starting EXACTLY on the C-Arc:
       - Line 0: (24, 34)   → (160, 34)   [Box 0]
       - Line 1: (103, 118) → (160, 118) [Box 1]
       - Line 2: (103, 202) → (160, 202) [Box 2]
       - Line 3: (24, 286)  → (160, 286)  [Box 3]
     • Branch lines draw smoothly outward from the C-Arc to each Box.
     • Boxes appear ONLY after their connector line completes (100%).
──────────────────────────────────────────────────────────────── */

const BAR_HEIGHT = 68
const BAR_GAP    = 16
const ITEM_COUNT = 4

const SVG_W  = 160
const SVG_H  = ITEM_COUNT * BAR_HEIGHT + (ITEM_COUNT - 1) * BAR_GAP // 320px

/* Top and Bottom root circle coordinates */
const CIRCLE_TOP    = { x: 24, y: 34 }
const CIRCLE_BOTTOM = { x: 24, y: 286 }

/* Enhanced curvature C-Arc path */
const ARC_PATH = `M ${CIRCLE_TOP.x} ${CIRCLE_TOP.y} C 135 ${CIRCLE_TOP.y}, 135 ${CIRCLE_BOTTOM.y}, ${CIRCLE_BOTTOM.x} ${CIRCLE_BOTTOM.y}`

/* 4 Branch connector lines starting EXACTLY on the C-Arc curve */
const BRANCH_PATHS = [
  `M 24 34 L 160 34`,   // Line 0 (Box 0 center Y=34)
  `M 103 118 L 160 118`, // Line 1 (Box 1 center Y=118)
  `M 103 202 L 160 202`, // Line 2 (Box 2 center Y=202)
  `M 24 286 L 160 286`,  // Line 3 (Box 3 center Y=286)
]

/* Sequential thresholds: Box N appears ONLY AFTER line N completes (100%) */
const THRESHOLDS = [
  { root: [0.00, 0.10], line: [0.05, 0.26], bar: 0.26 }, // Bar 0 appears at 0.26 (when line 0 is done)
  { root: [0.00, 0.10], line: [0.26, 0.47], bar: 0.47 }, // Bar 1 appears at 0.47 (when line 1 is done)
  { root: [0.00, 0.10], line: [0.47, 0.68], bar: 0.68 }, // Bar 2 appears at 0.68 (when line 2 is done)
  { root: [0.00, 0.10], line: [0.68, 0.90], bar: 0.90 }, // Bar 3 appears at 0.90 (when line 3 is done)
]

const BAR_WIDTHS = ['100%', '94%', '94%', '84%']

interface BranchDiagramProps {
  scrollProgress?: MotionValue<number>
}

export default function BranchDiagram({ scrollProgress }: BranchDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const [barsVisible, setBarsVisible] = useState<boolean[]>(Array(4).fill(false))

  const staticZero = useMotionValue(0)
  const prog = scrollProgress ?? staticZero

  /* Arc path animation progress (draws from 0.02 to 0.70) */
  const arcPathLength = useTransform(prog, [0.02, 0.70], [0, 1])

  /* Individual branch line animations */
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
          }, 300 + i * 280)
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
      aria-label="Why ArmArch branch diagram"
      className="w-full h-full flex items-center justify-center overflow-hidden"
      style={{ background: '#f2f2f2', minHeight: '100%' }}
    >
      <div
        className="relative flex items-center"
        style={{
          width: '100%',
          maxWidth: 800,
          paddingLeft: 16,
          paddingRight: 28,
          height: SVG_H,
        }}
      >
        {/* SVG Connectors: 2 Root Circles + C-Arc + 4 Branch Lines */}
        <svg
          viewBox={`0 0 ${SVG_W} ${SVG_H}`}
          width={SVG_W}
          height={SVG_H}
          className="flex-shrink-0 pointer-events-none select-none"
          style={{ zIndex: 10, overflow: 'visible' }}
          aria-hidden="true"
        >
          {/* Top Root Circle */}
          <motion.circle
            cx={CIRCLE_TOP.x}
            cy={CIRCLE_TOP.y}
            r={7.5}
            fill="#111"
            style={{ opacity: rootOpacity }}
          />

          {/* Bottom Root Circle */}
          <motion.circle
            cx={CIRCLE_BOTTOM.x}
            cy={CIRCLE_BOTTOM.y}
            r={7.5}
            fill="#111"
            style={{ opacity: rootOpacity }}
          />

          {/* Main C-Arc Path */}
          <motion.path
            d={ARC_PATH}
            fill="none"
            stroke="#111"
            strokeWidth={1.5}
            strokeLinecap="round"
            style={{ pathLength: arcPathLength }}
          />

          {/* 4 Branch Connector Lines drawing out to each Box */}
          {BRANCH_PATHS.map((d, i) => (
            <motion.path
              key={i}
              d={d}
              fill="none"
              stroke="#111"
              strokeWidth={1.5}
              style={{
                pathLength: lineMotions[i],
              }}
            />
          ))}
        </svg>

        {/* Bars Column */}
        <div
          className="flex flex-col justify-between flex-1"
          style={{ height: SVG_H }}
        >
          {[0, 1, 2, 3].map((i) => (
            <BranchBar
              key={i}
              index={i}
              visible={barsVisible[i]}
              width={BAR_WIDTHS[i]}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes icon-popin {
          0%   { transform: translateY(-50%) scale(0.2); opacity: 0; }
          65%  { transform: translateY(-50%) scale(1.15); opacity: 1; }
          100% { transform: translateY(-50%) scale(1); opacity: 1; }
        }
        @keyframes icon-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255,255,255,0.5); }
          50%       { box-shadow: 0 0 0 5px rgba(255,255,255,0); }
        }
        .branch-icon-inner {
          animation:
            icon-popin 360ms cubic-bezier(0.34,1.56,0.64,1) both,
            icon-pulse 2.8s ease-in-out 400ms infinite;
        }
      `}</style>
    </section>
  )
}

interface BranchBarProps {
  index: number
  visible: boolean
  width: string
}

function BranchBar({ index, visible, width }: BranchBarProps) {
  return (
    <div
      style={{
        height: BAR_HEIGHT,
        width: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Black Rounded Pill Bar */}
      <div
        role="img"
        aria-label={`Branch item ${index + 1}`}
        style={{
          position: 'relative',
          overflow: 'hidden',
          width,
          height: '100%',
          background: '#111111',
          borderRadius: '999px',
          cursor: 'pointer',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateX(0)' : 'translateX(-40px)',
          transition: 'opacity 380ms ease, transform 380ms cubic-bezier(0.4,0,0.2,1)',
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement
          el.style.transform = 'scale(1.02)'
          el.style.filter = 'brightness(1.35)'
          el.style.transition = 'transform 200ms ease, filter 200ms ease'
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement
          el.style.transform = 'scale(1)'
          el.style.filter = 'brightness(1)'
          el.style.transition = 'transform 260ms ease, filter 260ms ease'
        }}
      >
        {/* Crosshatch Pattern */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          aria-hidden="true"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern
              id={`xh-${index}`}
              patternUnits="userSpaceOnUse"
              width="24"
              height="24"
              patternTransform="rotate(45 0 0)"
            >
              <line x1="12" y1="0" x2="12" y2="24" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
              <line x1="0" y1="12" x2="24" y2="12" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#xh-${index})`} />
        </svg>

        {/* White Circle Icon */}
        {visible && (
          <div
            aria-hidden="true"
            className="branch-icon-inner"
            style={{
              position: 'absolute',
              left: 10,
              top: '50%',
              width: 48,
              height: 48,
              borderRadius: '50%',
              background: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10,
            }}
          >
            {/* X-hatch placeholder icon */}
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <circle cx="14" cy="14" r="12" stroke="#bbb" strokeWidth="1" fill="none" />
              <line x1="3" y1="3" x2="25" y2="25" stroke="#aaa" strokeWidth="1.2" />
              <line x1="25" y1="3" x2="3" y2="25" stroke="#aaa" strokeWidth="1.2" />
              <line x1="3" y1="9" x2="19" y2="25" stroke="#ccc" strokeWidth="0.7" />
              <line x1="9" y1="3" x2="25" y2="19" stroke="#ccc" strokeWidth="0.7" />
              <line x1="9" y1="25" x2="25" y2="9" stroke="#ccc" strokeWidth="0.7" />
              <line x1="3" y1="19" x2="19" y2="3" stroke="#ccc" strokeWidth="0.7" />
            </svg>
          </div>
        )}
      </div>
    </div>
  )
}
