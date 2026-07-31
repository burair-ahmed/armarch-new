'use client'

import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import AboutSection from '@/components/AboutSection'
import DesignPhilosophySection from '@/components/DesignPhilosophySection'
import WhyChooseUsSection from '@/components/WhyChooseUsSection'
import BranchDiagram from '@/components/BranchDiagram'
import NumberedFramesSection from '@/components/NumberedFramesSection'
import OurProcessSection from '@/components/OurProcessSection'
import ProjectExperienceSection from '@/components/ProjectExperienceSection'

const TEXT = 'ArmArch'
const FONT_SIZE = 'clamp(80px, 16vw, 220px)'

const textStyle: React.CSSProperties = {
  fontSize: FONT_SIZE,
  fontWeight: 900,
  lineHeight: 1,
  letterSpacing: '-0.03em',
  whiteSpace: 'nowrap',
  display: 'block',
  width: '100%',
  textAlign: 'center',
  color: 'var(--foreground)',
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Track scroll progress through the 900vh pinned track (0.0 -> 1.0)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // ── KEYFRAME 0.0 -> 0.35: Echo expansion animation ───────────────────────
  const yUp1 = useTransform(scrollYProgress, [0, 0.35], ['0%', '-20%'])
  const yUp2 = useTransform(scrollYProgress, [0, 0.35], ['0%', '-40%'])
  const yUp3 = useTransform(scrollYProgress, [0, 0.35], ['0%', '-60%'])

  const yDown1 = useTransform(scrollYProgress, [0, 0.35], ['0%', '20%'])
  const yDown2 = useTransform(scrollYProgress, [0, 0.35], ['0%', '40%'])
  const yDown3 = useTransform(scrollYProgress, [0, 0.35], ['0%', '60%'])

  const opacity1 = useTransform(scrollYProgress, [0, 0.35], [0, 0.22])
  const opacity2 = useTransform(scrollYProgress, [0, 0.35], [0, 0.14])
  const opacity3 = useTransform(scrollYProgress, [0, 0.35], [0, 0.07])

  // ── KEYFRAME 0.20 -> 0.35: "About Us" section slides up
  const aboutY = useTransform(scrollYProgress, [0.20, 0.35], ['100%', '0%'])

  // ── KEYFRAME 0.35 -> 0.50: "Why Choose Us" section slides up over About Us
  const whyY = useTransform(scrollYProgress, [0.35, 0.50], ['100%', '0%'])

  // ── KEYFRAME 0.50 -> 0.65: "Branch Diagram" section slides up over Why Choose Us
  const branchY = useTransform(scrollYProgress, [0.50, 0.65], ['100%', '0%'])

  // ── KEYFRAME 0.65 -> 0.80: Internal scroll progress for Branch Diagram nodes
  const branchProgress = useTransform(scrollYProgress, [0.65, 0.80], [0, 1])

  // ── KEYFRAME 0.80 -> 0.89: "Design Philosophy" section slides up over Branch Diagram
  const philosophyY = useTransform(scrollYProgress, [0.80, 0.89], ['100%', '0%'])

  // ── KEYFRAME 0.89 -> 0.95: "Our Process" section slides up over Design Philosophy
  const numberedY = useTransform(scrollYProgress, [0.89, 0.95], ['100%', '0%'])

  // ── KEYFRAME 0.95 -> 1.00: "Project Experience" section slides up over Our Process
  const projectY = useTransform(scrollYProgress, [0.95, 1.00], ['100%', '0%'])

  return (
    // Outer scroll track (1200vh height pins the viewport for the entire sequence)
    <div ref={containerRef} className="relative h-[1200vh]">
      {/* Sticky viewport frame - page stays locked here while scrolling */}
      <section
        id="hero"
        className="sticky top-0 h-screen flex flex-col justify-center items-center overflow-hidden"
        aria-label="Hero section"
      >
        {/* Subtle grain texture overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '256px',
          }}
        />

        {/* Brand Display Text + Echo Stack */}
        <div className="relative w-full flex justify-center items-center select-none" style={{ overflow: 'visible' }}>
          {/* Echoes ABOVE */}
          <motion.div
            aria-hidden
            style={{ ...textStyle, position: 'absolute', top: 0, left: 0, y: yUp1, opacity: opacity1, zIndex: 3 }}
          >
            {TEXT}
          </motion.div>
          <motion.div
            aria-hidden
            style={{ ...textStyle, position: 'absolute', top: 0, left: 0, y: yUp2, opacity: opacity2, zIndex: 2 }}
          >
            {TEXT}
          </motion.div>
          <motion.div
            aria-hidden
            style={{ ...textStyle, position: 'absolute', top: 0, left: 0, y: yUp3, opacity: opacity3, zIndex: 1 }}
          >
            {TEXT}
          </motion.div>

          {/* MAIN HEADING */}
          <h1 style={{ ...textStyle, position: 'relative', zIndex: 10 }}>
            {TEXT}
          </h1>

          {/* Echoes BELOW */}
          <motion.div
            aria-hidden
            style={{ ...textStyle, position: 'absolute', top: 0, left: 0, y: yDown1, opacity: opacity1, zIndex: 3 }}
          >
            {TEXT}
          </motion.div>
          <motion.div
            aria-hidden
            style={{ ...textStyle, position: 'absolute', top: 0, left: 0, y: yDown2, opacity: opacity2, zIndex: 2 }}
          >
            {TEXT}
          </motion.div>
          <motion.div
            aria-hidden
            style={{ ...textStyle, position: 'absolute', top: 0, left: 0, y: yDown3, opacity: opacity3, zIndex: 1 }}
          >
            {TEXT}
          </motion.div>
        </div>

        {/* Vertical scroll indicator */}
        <div
          aria-hidden="true"
          className="absolute bottom-10 right-8 flex flex-col items-center gap-2"
        >
          <span className="text-[9px] uppercase tracking-[0.4em] text-[var(--muted)] rotate-90 origin-center mb-3">
            Scroll
          </span>
          <div className="w-px h-16 bg-[var(--muted)] opacity-40 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-[var(--accent)] animate-scroll-line" />
          </div>
        </div>

        {/* ── KEYFRAME 0.20 -> 0.35: Full "About Us" overlay section ────────────── */}
        <motion.div
          style={{ y: aboutY }}
          className="absolute inset-0 z-40 w-full h-full bg-[#f5f4f0] overflow-y-auto"
        >
          <AboutSection />
        </motion.div>

        {/* ── KEYFRAME 0.35 -> 0.50: Full "Why Choose Us" overlay section ────────── */}
        <motion.div
          style={{ y: whyY }}
          className="absolute inset-0 z-50 w-full h-full bg-[#f5f4f0] overflow-y-auto"
        >
          <WhyChooseUsSection />
        </motion.div>

        {/* ── KEYFRAME 0.50 -> 0.65: Full "Branch Diagram" overlay section ─────────── */}
        <motion.div
          style={{ y: branchY }}
          className="absolute inset-0 z-[60] w-full h-full bg-[#f2f2f2] overflow-y-auto"
        >
          <BranchDiagram scrollProgress={branchProgress} />
        </motion.div>

        {/* ── KEYFRAME 0.80 -> 0.93: Full "Design Philosophy" overlay section ───── */}
        <motion.div
          style={{ y: philosophyY }}
          className="absolute inset-0 z-[70] w-full h-full bg-[#f5f4f0] overflow-y-auto"
        >
          <DesignPhilosophySection />
        </motion.div>

        {/* ── KEYFRAME 0.89 -> 0.95: Full "Our Process" overlay section ───────── */}
        <motion.div
          style={{ y: numberedY }}
          className="absolute inset-0 z-[80] w-full h-full bg-[#f5f4f0] overflow-hidden"
        >
          <OurProcessSection />
        </motion.div>

        {/* ── KEYFRAME 0.95 -> 1.00: Full "Project Experience" overlay section ── */}
        <motion.div
          style={{ y: projectY }}
          className="absolute inset-0 z-[90] w-full h-full bg-[#f5f4f0] overflow-y-auto"
        >
          <ProjectExperienceSection />
        </motion.div>
      </section>
    </div>
  )
}
