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
import ResidentialExperienceSection from '@/components/ResidentialExperienceSection'
import ArtDecoApartmentSection from '@/components/ArtDecoApartmentSection'
import MediterraneanApartmentSection from '@/components/MediterraneanApartmentSection'
import ArtDecoNavyRestaurantSection from '@/components/ArtDecoNavyRestaurantSection'
import ModernGymSection from '@/components/ModernGymSection'
import HeroFloatingImages from '@/components/HeroFloatingImages'

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

  // ── KEYFRAME 0.0 -> 0.08: Echo expansion animation (short, snappy) ────────
  const yUp1 = useTransform(scrollYProgress, [0, 0.08], ['0%', '-20%'])
  const yUp2 = useTransform(scrollYProgress, [0, 0.08], ['0%', '-40%'])
  const yUp3 = useTransform(scrollYProgress, [0, 0.08], ['0%', '-60%'])

  const yDown1 = useTransform(scrollYProgress, [0, 0.08], ['0%', '20%'])
  const yDown2 = useTransform(scrollYProgress, [0, 0.08], ['0%', '40%'])
  const yDown3 = useTransform(scrollYProgress, [0, 0.08], ['0%', '60%'])

  const opacity1 = useTransform(scrollYProgress, [0, 0.08], [0, 0.22])
  const opacity2 = useTransform(scrollYProgress, [0, 0.08], [0, 0.14])
  const opacity3 = useTransform(scrollYProgress, [0, 0.08], [0, 0.07])

  // ── KEYFRAME 0.06 -> 0.13: "About Us" section slides up
  const aboutY = useTransform(scrollYProgress, [0.06, 0.13], ['100%', '0%'])

  // ── KEYFRAME 0.13 -> 0.20: "Why Choose Us" section slides up over About Us
  const whyY = useTransform(scrollYProgress, [0.13, 0.20], ['100%', '0%'])

  // ── KEYFRAME 0.20 -> 0.26: "Branch Diagram" section slides up over Why Choose Us
  const branchY = useTransform(scrollYProgress, [0.20, 0.26], ['100%', '0%'])

  // ── KEYFRAME 0.26 -> 0.44: Internal scroll progress for Branch Diagram nodes (0.0 -> 1.0)
  const branchProgress = useTransform(scrollYProgress, [0.26, 0.44], [0, 1])

  // ── KEYFRAME 0.44 -> 0.50: "Design Philosophy" section slides up AFTER Branch Diagram completes
  const philosophyY = useTransform(scrollYProgress, [0.44, 0.50], ['100%', '0%'])

  // ── KEYFRAME 0.50 -> 0.56: "Our Process" section slides up over Design Philosophy
  const numberedY = useTransform(scrollYProgress, [0.50, 0.56], ['100%', '0%'])

  // ── KEYFRAME 0.56 -> 0.62: "Project Experience Commercial" section slides up over Our Process
  const projectY = useTransform(scrollYProgress, [0.56, 0.62], ['100%', '0%'])

  // ── KEYFRAME 0.62 -> 0.69: "Project Experience Villa" section slides up over Commercial
  const residentialY = useTransform(scrollYProgress, [0.62, 0.69], ['100%', '0%'])

  // ── KEYFRAME 0.69 -> 0.76: "Project Experience Art Deco Apartment" section slides up over Villa
  const artDecoY = useTransform(scrollYProgress, [0.69, 0.76], ['100%', '0%'])

  // ── KEYFRAME 0.76 -> 0.83: "Project Experience Mediterranean Apartment" section slides up over Art Deco
  const mediterraneanY = useTransform(scrollYProgress, [0.76, 0.83], ['100%', '0%'])

  // ── KEYFRAME 0.83 -> 0.91: "Project Experience Art Deco Navy Restaurant" section slides up over Mediterranean
  const navyY = useTransform(scrollYProgress, [0.83, 0.91], ['100%', '0%'])

  // ── KEYFRAME 0.91 -> 1.00: "Project Experience Modern Gym" section slides up over Navy Restaurant
  const gymY = useTransform(scrollYProgress, [0.91, 1.00], ['100%', '0%'])

  return (
    // Outer scroll track (1800vh height pins the viewport for the entire sequence)
    <div ref={containerRef} className="relative h-[1800vh]">
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

        {/* Candid Reverse Parallax Floating Images */}
        <HeroFloatingImages />

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

        {/* ── KEYFRAME 0.90 -> 0.95: Full "Project Experience Commercial" overlay section ── */}
        <motion.div
          style={{ y: projectY }}
          className="absolute inset-0 z-[90] w-full h-full bg-[#f5f4f0] overflow-y-auto"
        >
          <ProjectExperienceSection />
        </motion.div>

        {/* ── KEYFRAME 0.95 -> 1.00: Full "Project Experience Residential" overlay section ── */}
        <motion.div
          style={{ y: residentialY }}
          className="absolute inset-0 z-[100] w-full h-full bg-[#f5f4f0] overflow-y-auto"
        >
          <ResidentialExperienceSection />
        </motion.div>

        {/* ── KEYFRAME 0.96 -> 1.00: Full "Project Experience Art Deco" overlay section ── */}
        <motion.div
          style={{ y: artDecoY }}
          className="absolute inset-0 z-[110] w-full h-full bg-[#f5f4f0] overflow-y-auto"
        >
          <ArtDecoApartmentSection />
        </motion.div>

        {/* ── KEYFRAME 0.94 -> 0.97: Full "Project Experience Mediterranean" overlay section ── */}
        <motion.div
          style={{ y: mediterraneanY }}
          className="absolute inset-0 z-[120] w-full h-full bg-[#f5f4f0] overflow-y-auto"
        >
          <MediterraneanApartmentSection />
        </motion.div>

        {/* ── KEYFRAME 0.93 -> 0.97: Full "Project Experience Navy Restaurant" overlay section ── */}
        <motion.div
          style={{ y: navyY }}
          className="absolute inset-0 z-[130] w-full h-full bg-[#f5f4f0] overflow-y-auto"
        >
          <ArtDecoNavyRestaurantSection />
        </motion.div>

        {/* ── KEYFRAME 0.97 -> 1.00: Full "Project Experience Modern Gym" overlay section ── */}
        <motion.div
          style={{ y: gymY }}
          className="absolute inset-0 z-[140] w-full h-full bg-[#f5f4f0] overflow-y-auto"
        >
          <ModernGymSection />
        </motion.div>
      </section>
    </div>
  )
}
