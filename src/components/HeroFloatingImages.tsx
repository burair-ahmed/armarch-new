'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

interface ImageConfig {
  src: string
  alt: string
  // Desktop positioning + sizing
  desktopPos: { top?: string; bottom?: string; left?: string; right?: string }
  desktopWidth: number
  desktopRotation: number
  // Mobile positioning + sizing (2 above, 2 below heading)
  mobilePos: { top?: string; bottom?: string; left?: string; right?: string }
  mobileWidth: string
  mobileRotation: number
  // Parallax depth (desktop only)
  depthX: number
  depthY: number
  delay: number
}

const IMAGES: ImageConfig[] = [
  {
    src: '/restaurant/694990736099717.jpg',
    alt: 'ArmArch Building Render',
    desktopPos: { top: '12%', left: '6%' },
    desktopWidth: 250,
    desktopRotation: -4,
    mobilePos: { top: '15%', left: '4%' },
    mobileWidth: '40vw',
    mobileRotation: -5,
    depthX: 14,
    depthY: 10,
    delay: 0,
  },
  {
    src: '/500sq yds/695786947150597.jpg',
    alt: 'ArmArch Villa Render',
    desktopPos: { top: '14%', right: '7%' },
    desktopWidth: 230,
    desktopRotation: 5,
    mobilePos: { top: '18%', right: '4%' },
    mobileWidth: '38vw',
    mobileRotation: 4,
    depthX: 9,
    depthY: 13,
    delay: 120,
  },
  {
    src: '/white deco apartment/695098788629125.jpg',
    alt: 'ArmArch Apartment Render',
    desktopPos: { bottom: '14%', left: '8%' },
    desktopWidth: 260,
    desktopRotation: 3,
    mobilePos: { bottom: '15%', left: '4%' },
    mobileWidth: '39vw',
    mobileRotation: -3,
    depthX: 12,
    depthY: 8,
    delay: 240,
  },
  {
    src: '/gym/698853678699909.jpg',
    alt: 'ArmArch Commercial Render',
    desktopPos: { bottom: '13%', right: '8%' },
    desktopWidth: 240,
    desktopRotation: -5,
    mobilePos: { bottom: '18%', right: '4%' },
    mobileWidth: '38vw',
    mobileRotation: 5,
    depthX: 15,
    depthY: 11,
    delay: 360,
  },
]

const ENTRANCE_DONE_MS = 360 + 900

export default function HeroFloatingImages() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [entranceDone, setEntranceDone] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Detect mobile viewport
    const checkMobile = () => setIsMobile(window.innerWidth < 640)
    checkMobile()
    window.addEventListener('resize', checkMobile)

    // Trigger entrance animation after first paint
    const rafId = requestAnimationFrame(() => setIsVisible(true))

    // Remove stagger delay after entrance completes
    const doneTimer = setTimeout(() => setEntranceDone(true), ENTRANCE_DONE_MS)

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 640) return // no parallax on mobile
      const normX = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2)
      const normY = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2)
      setMousePos({ x: normX, y: normY })
    }

    const handleMouseLeave = () => setMousePos({ x: 0, y: 0 })

    window.addEventListener('mousemove', handleMouseMove)
    document.body.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      cancelAnimationFrame(rafId)
      clearTimeout(doneTimer)
      window.removeEventListener('resize', checkMobile)
      window.removeEventListener('mousemove', handleMouseMove)
      document.body.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
      {IMAGES.map((img, idx) => {
        // Reverse parallax on desktop only
        const translateX = isMobile ? 0 : -mousePos.x * img.depthX
        const translateY = isMobile ? 0 : -mousePos.y * img.depthY

        const pos = isMobile ? img.mobilePos : img.desktopPos
        const width = isMobile
          ? img.mobileWidth
          : `clamp(150px, 17vw, ${img.desktopWidth}px)`
        const rotation = isMobile ? img.mobileRotation : img.desktopRotation

        return (
          <div
            key={idx}
            className="absolute"
            style={{
              ...pos,
              width,
              aspectRatio: '4/3',
              transform: `translate3d(${translateX}px, ${translateY}px, 0) rotate(${rotation}deg) scale(${isVisible ? 1 : 0.88})`,
              opacity: isVisible ? 1 : 0,
              transitionProperty: 'transform, opacity',
              transitionDuration: entranceDone ? '0.6s, 0.05s' : '0.8s, 0.8s',
              transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1), ease',
              transitionDelay: entranceDone ? '0ms' : `${img.delay}ms`,
            }}
          >
            <div className="relative w-full h-full rounded-[12px] overflow-hidden shadow-[0_10px_28px_rgba(0,0,0,0.13)] border border-black/5">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 42vw, 300px"
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
