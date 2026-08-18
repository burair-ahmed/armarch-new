'use client'

import { ArrowUp } from 'lucide-react'
import { FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import Logo from '@/components/Logo'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer
      id="footer"
      aria-label="Site Footer"
      className="w-full relative overflow-hidden"
      style={{
        backgroundColor: '#EDE9E3',
        color: '#1a1a1a',
        borderTop: '1px solid rgba(26, 26, 26, 0.15)',
        paddingTop: '110px',
        paddingBottom: '60px',
      }}
    >
      {/* ── Subtle architectural line-drawing watermark (bottom-right corner) ── */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 opacity-[0.06]"
        width="320"
        height="320"
        viewBox="0 0 320 320"
        fill="none"
        stroke="#1a1a1a"
        strokeWidth="1"
      >
        {/* Abstract building silhouette */}
        <rect x="60" y="180" width="200" height="130" />
        <rect x="90" y="130" width="60" height="50" />
        <rect x="170" y="100" width="50" height="80" />
        <rect x="130" y="60" width="30" height="70" />
        <line x1="60" y1="180" x2="260" y2="180" />
        <rect x="100" y="210" width="30" height="40" />
        <rect x="155" y="210" width="30" height="40" />
        <rect x="210" y="210" width="30" height="40" />
        <rect x="95" y="140" width="12" height="18" />
        <rect x="113" y="140" width="12" height="18" />
        <rect x="178" y="115" width="10" height="14" />
        <rect x="192" y="115" width="10" height="14" />
      </svg>

      {/* ── Main content wrapper with 88% width, max 1200px, 0 auto centering, and 30px side padding ── */}
      <div
        className="relative z-10"
        style={{
          maxWidth: '1200px',
          width: '88%',
          margin: '0 auto',
          paddingLeft: '30px',
          paddingRight: '30px',
        }}
      >
        {/* 4-Column Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10"
          style={{ paddingBottom: '60px' }}
        >

          {/* ── Column 1: Wordmark + Tagline + Social ── */}
          <div className="flex flex-col gap-8 sm:col-span-2 lg:col-span-1">
            {/* Wordmark */}
            <div>
              <p
                className="text-[11px] uppercase tracking-[0.3em] font-semibold mb-3"
                style={{ color: '#888880' }}
              >
                Est. 2020
              </p>
              <div className="my-1">
                <Logo />
              </div>
              <p
                className="mt-3 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em]"
                style={{ color: '#888880' }}
              >
                Architectural Visualization Studio
              </p>
            </div>

            {/* Short description */}
            <p className="text-sm leading-relaxed font-light max-w-[260px]" style={{ color: '#555550' }}>
              Design. Visualize. Build. Crafting precision-led architectural
              experiences from Dubai to Lahore.
            </p>

            {/* Social icons — official brand icons via react-icons */}
            <div className="flex items-center gap-5">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/armarchengineering/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="transition-opacity duration-200 hover:opacity-40"
                style={{ color: '#1a1a1a' }}
              >
                <FaInstagram size={20} />
              </a>

              {/* Company LinkedIn */}
              <a
                href="https://pk.linkedin.com/company/armarch"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition-opacity duration-200 hover:opacity-40"
                style={{ color: '#1a1a1a' }}
              >
                <FaLinkedinIn size={20} />
              </a>

              {/* YouTube */}
              <a
                href="http://www.youtube.com/@ArmArchEngineering"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="transition-opacity duration-200 hover:opacity-40"
                style={{ color: '#1a1a1a' }}
              >
                <FaYoutube size={22} />
              </a>
            </div>
          </div>

          {/* ── Column 2: Navigation ── */}
          <div className="flex flex-col gap-5">
            <h4
              className="text-[10px] font-black uppercase tracking-[0.3em]"
              style={{ color: '#1a1a1a' }}
            >
              Navigation
            </h4>
            <ul className="flex flex-col gap-3.5">
              {[
                { label: 'Architectural Designs', href: '/designs' },
                { label: 'CGI Visualization',     href: '/cgi-visualization' },
                { label: 'VR Walk Throughs',       href: '/vr' },
                { label: 'Consultancy',            href: '/consultancy' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-medium transition-opacity duration-200 hover:opacity-40 uppercase tracking-wide"
                    style={{ color: '#1a1a1a', letterSpacing: '0.06em' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 3: Contact ── */}
          <div className="flex flex-col gap-5">
            <h4
              className="text-[10px] font-black uppercase tracking-[0.3em]"
              style={{ color: '#1a1a1a' }}
            >
              Contact
            </h4>
            <ul className="flex flex-col gap-4 text-sm" style={{ color: '#444440' }}>
              <li>
                <span className="block text-[9px] uppercase tracking-[0.25em] font-semibold mb-0.5" style={{ color: '#888880' }}>
                  Email
                </span>
                <a
                  href="mailto:info@armarchengineering.com"
                  className="font-medium transition-opacity duration-200 hover:opacity-50"
                  style={{ color: '#1a1a1a' }}
                >
                  info@armarchengineering.com
                </a>
              </li>
              <li>
                <span className="block text-[9px] uppercase tracking-[0.25em] font-semibold mb-0.5" style={{ color: '#888880' }}>
                  Phone
                </span>
                <a
                  href="tel:+97141234567"
                  className="font-medium transition-opacity duration-200 hover:opacity-50"
                  style={{ color: '#1a1a1a' }}
                >
                  +971 4 123 4567
                </a>
              </li>
            </ul>
          </div>

          {/* ── Column 4: Back to Top ── */}
          <div className="flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-5">
              <h4
                className="text-[10px] font-black uppercase tracking-[0.3em]"
                style={{ color: '#1a1a1a' }}
              >
                Studio Hours
              </h4>
              <div className="flex flex-col gap-2 text-xs font-light" style={{ color: '#555550' }}>
                <p><span className="font-semibold uppercase tracking-wider text-[9px]" style={{ color: '#888880' }}>Mon – Sat</span><br />9:00 AM – 6:00 PM</p>
                <p><span className="font-semibold uppercase tracking-wider text-[9px]" style={{ color: '#888880' }}>Sunday</span><br />Closed</p>
              </div>
            </div>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex items-center gap-3 group w-fit"
            >
              <span
                className="text-[10px] uppercase tracking-[0.25em] font-semibold transition-opacity duration-200 group-hover:opacity-40"
                style={{ color: '#1a1a1a' }}
              >
                Back to Top
              </span>
              {/* Thin arrow circle */}
              <span
                className="w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-200 group-hover:bg-[#1a1a1a] group-hover:text-[#EDE9E3]"
                style={{ borderColor: '#1a1a1a' }}
              >
                <ArrowUp className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>
        </div>

        {/* ── Hairline divider ── */}
        <div className="w-full h-px" style={{ backgroundColor: '#1a1a1a', opacity: 0.15 }} />

        {/* ── Bottom bar with 32px top padding ── */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
          style={{ paddingTop: '32px' }}
        >
          <p
            className="text-[10px] font-semibold uppercase tracking-[0.25em]"
            style={{ color: '#888880' }}
          >
            &copy; {new Date().getFullYear()} ArmArch. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="/privacy"
              className="text-[10px] font-semibold uppercase tracking-[0.2em] transition-opacity duration-200 hover:opacity-50"
              style={{ color: '#888880' }}
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-[10px] font-semibold uppercase tracking-[0.2em] transition-opacity duration-200 hover:opacity-50"
              style={{ color: '#888880' }}
            >
              Terms of Use
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}
