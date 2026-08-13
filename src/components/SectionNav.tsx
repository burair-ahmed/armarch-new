'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ── Scroll math ──────────────────────────────────────────────────────────────
// Hero container: h-[1900vh]
// In CSS pixels: 1900vh = (1900/100) * innerHeight = 19 * innerHeight
// Total scrollable distance inside the pinned track:
//   containerHeight(px) - viewportHeight(px) = 19*vh - 1*vh = 18 * innerHeight
//
// framer-motion scrollYProgress = scrollY / (18 * innerHeight)
//
// To navigate to a progress value P:  scrollY = P * 18 * innerHeight
// ─────────────────────────────────────────────────────────────────────────────

// startAt  → progress at which this section BEGINS sliding in (used for active dot)
// goTo     → progress to scroll to on click (~80% into slide-in, so section is clearly visible)
const NAV_ITEMS = [
  { label: 'Home',              startAt: 0.00, goTo: 0.00 },
  // About slides in [0.06 → 0.13] ; 80% = 0.06 + 0.8*(0.13-0.06) = 0.116
  { label: 'About',             startAt: 0.06, goTo: 0.116 },
  // Why Choose Us slides in [0.13 → 0.20] ; 80% = 0.13 + 0.8*0.07 = 0.186
  { label: 'Why Choose Us',     startAt: 0.13, goTo: 0.186 },
  // Branch / Services slides in [0.20 → 0.26] ; 80% = 0.20 + 0.8*0.06 = 0.248
  { label: 'Services',          startAt: 0.20, goTo: 0.248 },
  // Design Philosophy slides in [0.44 → 0.50] ; 80% = 0.44 + 0.8*0.06 = 0.488
  { label: 'Design Philosophy', startAt: 0.44, goTo: 0.488 },
  // Our Process slides in [0.50 → 0.56] ; 80% = 0.50 + 0.8*0.06 = 0.548
  { label: 'Our Process',       startAt: 0.50, goTo: 0.548 },
  // Projects slides in [0.56 → 0.62] ; 80% = 0.56 + 0.8*0.06 = 0.608
  { label: 'Projects',          startAt: 0.56, goTo: 0.608 },
  // Founder's Note slides in [0.94 → 1.00] ; 80% = 0.94 + 0.8*0.06 = 0.988
  { label: "Founder's Note",    startAt: 0.94, goTo: 0.988 },
  // Contact — past the pinned track entirely
  { label: 'Contact',           startAt: 1.01, goTo: 1.01 },
]

const CONTAINER_VH = 1900

function getTrackScrollPx(): number {
  // 18 * innerHeight
  return (CONTAINER_VH / 100 - 1) * window.innerHeight
}

export default function SectionNav() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const trackScrollPx = getTrackScrollPx()
      const scrollY = window.scrollY

      setVisible(scrollY > window.innerHeight * 0.03)

      // Past the pinned track → Contact section
      if (scrollY >= trackScrollPx) {
        setActiveIndex(NAV_ITEMS.length - 1)
        return
      }

      // progress exactly matches framer-motion scrollYProgress
      const progress = scrollY / trackScrollPx

      // Find the last section whose startAt we've passed
      let active = 0
      for (let i = NAV_ITEMS.length - 2; i >= 0; i--) {
        if (progress >= NAV_ITEMS[i].startAt) {
          active = i
          break
        }
      }
      setActiveIndex(active)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goToSection = (index: number) => {
    const item = NAV_ITEMS[index]

    // Contact is past the pinned track
    if (item.goTo > 1.0) {
      const contact = document.getElementById('contact')
      if (contact) {
        contact.scrollIntoView({ behavior: 'smooth' })
      } else {
        const trackScrollPx = getTrackScrollPx()
        window.scrollTo({ top: trackScrollPx + window.innerHeight + 10, behavior: 'smooth' })
      }
      return
    }

    const trackScrollPx = getTrackScrollPx()
    const targetPx = item.goTo * trackScrollPx
    window.scrollTo({ top: targetPx, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.4 }}
          aria-label="Section navigation"
          className="fixed right-5 top-1/2 -translate-y-1/2 z-[9999] flex flex-col items-end gap-4"
        >
          {NAV_ITEMS.map((item, i) => {
            const isActive = activeIndex === i
            const isHovered = hoveredIndex === i

            return (
              <div
                key={item.label}
                className="flex items-center gap-3 cursor-pointer"
                onClick={() => goToSection(i)}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Label tooltip */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.span
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.15 }}
                      className="text-[10px] font-bold uppercase tracking-widest text-white bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-full whitespace-nowrap border border-white/20 select-none pointer-events-none shadow-lg"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>

                {/* Bullet dot */}
                <motion.div
                  animate={{
                    width: isActive ? 14 : 10,
                    height: isActive ? 14 : 10,
                    backgroundColor: isActive ? '#c8a96e' : '#111111',
                    borderColor: isActive ? '#c8a96e' : '#111111',
                    boxShadow: isActive
                      ? '0 0 0 3px rgba(200,169,110,0.3), 0 0 12px 4px rgba(200,169,110,0.35)'
                      : 'none',
                  }}
                  transition={{ duration: 0.2 }}
                  className="rounded-full border-2 flex-shrink-0"
                />
              </div>
            )
          })}
        </motion.nav>
      )}
    </AnimatePresence>
  )
}
