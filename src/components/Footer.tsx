'use client'

import Logo from '@/components/Logo'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="w-full bg-[#0a0a0a] text-white border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      
      <div className="w-[88%] max-w-[1240px] mx-auto flex flex-col gap-12">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          
          {/* Column 1: Brand & Tagline */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Logo />
              <span className="font-black text-2xl tracking-tighter text-white">
                ArmArch
              </span>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-normal mt-1">
              Creating innovative, functional, and sustainable architectural &amp; interior design solutions tailored for luxury developments worldwide.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white hover:text-black flex items-center justify-center transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white hover:text-black flex items-center justify-center transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white hover:text-black flex items-center justify-center transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.592 9 4.889V8z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Our Services */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-extrabold tracking-wider text-white uppercase mb-1">
              Services
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-gray-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  01. Architectural Design
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  02. Interior Design
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  03. Visualization &amp; Renders
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  04. Design Consultancy
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-extrabold tracking-wider text-white uppercase mb-1">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About ArmArch
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Project Portfolio
                </a>
              </li>
              <li>
                <a href="#founders-note" className="hover:text-white transition-colors">
                  Founder&apos;s Note
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Studio Locations & Back to Top */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-extrabold tracking-wider text-white uppercase mb-1">
              Studios
            </h4>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              <strong className="text-white">Dubai Studio:</strong><br />
              Boulevard Plaza, Downtown Dubai, UAE
            </p>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mt-1">
              <strong className="text-white">Pakistan Studio:</strong><br />
              Gulberg III, Lahore, Pakistan
            </p>

            <button
              onClick={scrollToTop}
              className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-white hover:text-gray-300 transition-colors cursor-pointer group"
            >
              <span>Back to Top</span>
              <svg className="w-3.5 h-3.5 transform group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>

        </div>

        {/* Bottom Bar: Divider & Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} ArmArch. All Rights Reserved.</p>
          <p className="text-gray-400 font-medium">
            Designed &amp; Built with Precision
          </p>
        </div>

      </div>
    </footer>
  )
}
