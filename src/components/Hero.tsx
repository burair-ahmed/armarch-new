'use client'

import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import AboutSection from '@/components/AboutSection'
import WhyChooseUsSection from '@/components/WhyChooseUsSection'

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

  // Track scroll progress through the 300vh pinned track (0.0 -> 1.0)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // ── KEYFRAME 0.0 -> 0.45: Echo expansion animation ───────────────────────
  const yUp1 = useTransform(scrollYProgress, [0, 0.45], ['0%', '-20%'])
  const yUp2 = useTransform(scrollYProgress, [0, 0.45], ['0%', '-40%'])
  const yUp3 = useTransform(scrollYProgress, [0, 0.45], ['0%', '-60%'])

  const yDown1 = useTransform(scrollYProgress, [0, 0.45], ['0%', '20%'])
  const yDown2 = useTransform(scrollYProgress, [0, 0.45], ['0%', '40%'])
  const yDown3 = useTransform(scrollYProgress, [0, 0.45], ['0%', '60%'])

  const opacity1 = useTransform(scrollYProgress, [0, 0.45], [0, 0.22])
  const opacity2 = useTransform(scrollYProgress, [0, 0.45], [0, 0.14])
  const opacity3 = useTransform(scrollYProgress, [0, 0.45], [0, 0.07])

  // ── KEYFRAME 0.45 -> 0.70: White "About Us" section slides up to 100% cover
  const aboutY = useTransform(scrollYProgress, [0.45, 0.70], ['100%', '0%'])

  // ── KEYFRAME 0.70 -> 1.00: "Why Choose Us" section slides up over About Us
  const whyY = useTransform(scrollYProgress, [0.70, 1.0], ['100%', '0%'])

  return (
    // Outer scroll track (300vh height pins the viewport for the entire sequence)
    <div ref={containerRef} className="relative h-[450vh]">
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

        {/* ── KEYFRAME 0.45 -> 0.70: Full "About Us" overlay section ────────────── */}
        <motion.div
          style={{ y: aboutY }}
          className="absolute inset-0 z-40 w-full h-full bg-[#f5f4f0] overflow-y-auto"
        >
          <AboutSection />
        </motion.div>

        {/* ── KEYFRAME 0.70 -> 1.00: Full "Why Choose Us" overlay section ─────────── */}
        <motion.div
          style={{ y: whyY }}
          className="absolute inset-0 z-50 w-full h-full bg-[#f5f4f0] overflow-y-auto"
        >
          <WhyChooseUsSection />
        </motion.div>
      </section>
    </div>
  )
}
