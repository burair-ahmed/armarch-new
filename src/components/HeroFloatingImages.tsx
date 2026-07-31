'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

interface HeroImageConfig {
  src: string
  alt: string
  width: number
  rotation: number
  pos: { top?: string; bottom?: string; left?: string; right?: string }
  depthX: number
  depthY: number
  delay: number
}

const HERO_IMAGES: HeroImageConfig[] = [
  {
    src: '/restaurant/694990736099717.jpg',
    alt: 'ArmArch Architectural Building Render',
    width: 250,
    rotation: -4,
    pos: { top: '12%', left: '6%' },
    depthX: 14,
    depthY: 10,
    delay: 0,
  },
  {
    src: '/500sq yds/695786947150597.jpg',
    alt: 'ArmArch Modern Villa Render',
    width: 230,
    rotation: 5,
    pos: { top: '14%', right: '7%' },
    depthX: 9,
    depthY: 13,
    delay: 120,
  },
  {
    src: '/white deco apartment/695098788629125.jpg',
    alt: 'ArmArch Art Deco Apartment Render',
    width: 260,
    rotation: 3,
    pos: { bottom: '14%', left: '8%' },
    depthX: 12,
    depthY: 8,
    delay: 240,
  },
  {
    src: '/gym/698853678699909.jpg',
    alt: 'ArmArch Commercial Gym Render',
    width: 240,
    rotation: -5,
    pos: { bottom: '13%', right: '8%' },
    depthX: 15,
    depthY: 11,
    delay: 360,
  },
]

// Longest delay + typical animation duration = safe buffer for entrance completion
const ENTRANCE_DONE_MS = 360 + 900

export default function HeroFloatingImages() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)   // triggers opacity/scale entrance
  const [entranceDone, setEntranceDone] = useState(false) // removes stagger delay after entrance

  useEffect(() => {
    // Slight RAF delay so first paint is done before entrance begins
    const rafId = requestAnimationFrame(() => setIsVisible(true))

    // After last image has faded in, clear the stagger delays
    const doneTimer = setTimeout(() => setEntranceDone(true), ENTRANCE_DONE_MS)

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse X & Y: -1 (left/top) → +1 (right/bottom)
      const normX = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2)
      const normY = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2)
      setMousePos({ x: normX, y: normY })
    }

    const handleMouseLeave = () => {
      // Glide back to resting position
      setMousePos({ x: 0, y: 0 })
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.body.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      cancelAnimationFrame(rafId)
      clearTimeout(doneTimer)
      window.removeEventListener('mousemove', handleMouseMove)
      document.body.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden hidden sm:block">
      {HERO_IMAGES.map((img, idx) => {
        // Reverse parallax: move OPPOSITE to cursor direction
        const translateX = -mousePos.x * img.depthX
        const translateY = -mousePos.y * img.depthY

        return (
          <div
            key={idx}
            className="absolute"
            style={{
              ...img.pos,
              width: `clamp(150px, 17vw, ${img.width}px)`,
              aspectRatio: '4/3',
              transform: `translate3d(${translateX}px, ${translateY}px, 0) rotate(${img.rotation}deg) scale(${isVisible ? 1 : 0.88})`,
              opacity: isVisible ? 1 : 0,
              transitionProperty: 'transform, opacity',
              // Fast mouse-tracking once entrance is done, slow fade-in during entrance
              transitionDuration: entranceDone ? '0.6s, 0.05s' : '0.8s, 0.8s',
              transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1), ease',
              // Stagger only during entrance; 0ms after so mouse tracking is instant
              transitionDelay: entranceDone ? '0ms' : `${img.delay}ms`,
            }}
          >
            <div className="relative w-full h-full rounded-[14px] overflow-hidden shadow-[0_14px_36px_rgba(0,0,0,0.12)] border border-black/5 bg-white/40">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="300px"
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}
