'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useTransform, useMotionValue, MotionValue, useMotionValueEvent } from 'framer-motion'

/* ─────────────────────────────────────────────────────────────
   BranchDiagram
   ─────────────────────────────────────────────────────────────
   Layout & Geometry:
     • Container height = 320px
     • 4 Black pill bars: height 68px each, 16px gap
     • Exact center Y of bars: [34, 118, 202, 286]
     • Root node at (38, 160)
     • Connector paths end at (160, center_Y) — 100% vertically centered
     • White circle icons (48px) nested INSIDE each bar at left: 10px
──────────────────────────────────────────────────────────────── */

const BAR_HEIGHT = 68
const BAR_GAP    = 16
const ITEM_COUNT = 4

const SVG_W  = 160
const SVG_H  = ITEM_COUNT * BAR_HEIGHT + (ITEM_COUNT - 1) * BAR_GAP // 320px
const ROOT_X = 38
const ROOT_Y = SVG_H / 2 // 160px

/* Exact vertical centers for each bar */
const TIP_YS = Array.from({ length: ITEM_COUNT }).map(
  (_, i) => i * (BAR_HEIGHT + BAR_GAP) + BAR_HEIGHT / 2
) // [34, 118, 202, 286]

/* Per-item scroll thresholds */
const THRESHOLDS = [
  { root: [0.00, 0.12], line: [0.08, 0.30], bar: 0.22 },
  { root: [0.00, 0.12], line: [0.30, 0.48], bar: 0.40 },
  { root: [0.00, 0.12], line: [0.48, 0.66], bar: 0.58 },
  { root: [0.00, 0.12], line: [0.66, 0.90], bar: 0.76 },
]

const BAR_WIDTHS = ['100%', '94%', '94%', '84%']

interface BranchDiagramProps {
  scrollProgress?: MotionValue<number>
}

export default function BranchDiagram({ scrollProgress }: BranchDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const [rootVisible, setRootVisible] = useState(false)
  const [barsVisible, setBarsVisible] = useState<boolean[]>(Array(4).fill(false))

  const staticZero = useMotionValue(0)
  const prog = scrollProgress ?? staticZero

  const line0 = useTransform(prog, [THRESHOLDS[0].line[0], THRESHOLDS[0].line[1]], [0, 1])
  const line1 = useTransform(prog, [THRESHOLDS[1].line[0], THRESHOLDS[1].line[1]], [0, 1])
  const line2 = useTransform(prog, [THRESHOLDS[2].line[0], THRESHOLDS[2].line[1]], [0, 1])
  const line3 = useTransform(prog, [THRESHOLDS[3].line[0], THRESHOLDS[3].line[1]], [0, 1])

  const lineMotions = [line0, line1, line2, line3]
  const rootOpacity = useTransform(prog, [THRESHOLDS[0].root[0], THRESHOLDS[0].root[1]], [0, 1])

  useMotionValueEvent(prog, 'change', (v) => {
    setRootVisible(v >= 0.05)
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
        setRootVisible(true)
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

  function makePath(tipY: number) {
    const cp1x = ROOT_X + 65
    const cp2x = ROOT_X + 35
    return `M ${ROOT_X} ${ROOT_Y} C ${cp1x} ${ROOT_Y}, ${cp2x} ${tipY}, ${SVG_W} ${tipY}`
  }

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
        {/* SVG Bezier Connectors */}
        <svg
          viewBox={`0 0 ${SVG_W} ${SVG_H}`}
          width={SVG_W}
          height={SVG_H}
          className="flex-shrink-0 pointer-events-none select-none"
          style={{ zIndex: 10, overflow: 'visible' }}
          aria-hidden="true"
        >
          {/* Root Dot */}
          <motion.circle
            cx={ROOT_X}
            cy={ROOT_Y}
            r={8}
            fill="#111"
            style={{ opacity: rootOpacity }}
          />

          {/* 4 Branch Lines */}
          {TIP_YS.map((ty, i) => (
            <motion.path
              key={i}
              d={makePath(ty)}
              fill="none"
              stroke="#111"
              strokeWidth={1.5}
              strokeLinecap="round"
              style={{ pathLength: lineMotions[i] }}
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

        {/* White Circle Icon — Nested inside the bar, perfectly vertically centered & padded */}
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
