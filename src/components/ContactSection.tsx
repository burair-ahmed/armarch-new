'use client'

import { useState } from 'react'

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Architectural Design',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', projectType: 'Architectural Design', message: '' })
    }, 4000)
  }

  return (
    <section
      id="contact"
      aria-label="Contact Us"
      className="w-full min-h-screen bg-[#111111] text-white py-28 sm:py-36 lg:py-40 flex items-center justify-center relative overflow-hidden"
    >
      {/* Subtle Crosshatch Pattern Background Overlay */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-10"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="contact-grid-pattern"
            patternUnits="userSpaceOnUse"
            width="30"
            height="30"
            patternTransform="rotate(45 0 0)"
          >
            <line x1="15" y1="0" x2="15" y2="30" stroke="#ffffff" strokeWidth="1" />
            <line x1="0" y1="15" x2="30" y2="15" stroke="#ffffff" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#contact-grid-pattern)" />
      </svg>

      {/* Main Container - Horizontally & Vertically Centered with generous top/bottom space */}
      <div className="w-[88%] sm:w-[84%] max-w-[1240px] mx-auto flex items-center justify-center relative z-10 px-4 sm:px-6">

        {/* 2-Column Layout with Equal Height Matching */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-stretch gap-12 sm:gap-14 lg:gap-16">

          {/* ── FIRST COLUMN: All Content (Header + Info + Quote) ── */}
          <div className="flex flex-col justify-between gap-8 h-full">

            {/* Top: Section Header */}
            <div className="flex flex-col items-start gap-3">
              <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-gray-400 uppercase">
                Get In Touch
              </span>
              <h2
                className="font-black text-white leading-[0.95] tracking-tight"
                style={{ fontSize: 'clamp(32px, 5.2vw, 60px)' }}
              >
                Let&apos;s Build Something<br className="hidden sm:inline" /> Timeless.
              </h2>
              <p className="text-gray-400 text-sm sm:text-base mt-1 font-normal leading-relaxed">
                Have a project in mind or need expert architectural &amp; interior design guidance? Reach out to our studio today to discuss your vision.
              </p>
            </div>

            {/* Middle: Contact Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-2">

              {/* Phone / WhatsApp */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-gray-400 font-medium mb-0.5">Phone / WhatsApp</h4>
                  <a href="tel:+97141234567" className="text-sm sm:text-base font-bold text-white hover:underline block leading-tight">
                    +971 4 123 4567
                  </a>
                  <a href="tel:+923001234567" className="text-xs sm:text-sm text-gray-300 hover:underline block mt-0.5">
                    +92 300 123 4567
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-gray-400 font-medium mb-0.5">Email Inquiry</h4>
                  <a href="mailto:contact@armarch.com" className="text-sm sm:text-base font-bold text-white hover:underline block leading-tight">
                    contact@armarch.com
                  </a>
                  <a href="mailto:info@armarch.com" className="text-xs sm:text-sm text-gray-300 hover:underline block mt-0.5">
                    info@armarch.com
                  </a>
                </div>
              </div>

              {/* Studio Location */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-gray-400 font-medium mb-0.5">Studio Location</h4>
                  <p className="text-xs sm:text-sm font-semibold text-white leading-snug">
                    ArmArch Studio, Boulevard Plaza
                  </p>
                  <p className="text-[11px] sm:text-xs text-gray-400 mt-0.5">
                    Dubai, UAE &bull; Lahore, PK
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-gray-400 font-medium mb-0.5">Working Hours</h4>
                  <p className="text-xs sm:text-sm font-semibold text-white leading-snug">
                    Mon &ndash; Sat: 9:00 AM &ndash; 6:00 PM
                  </p>
                  <p className="text-[11px] text-gray-400 mt-0.5">Sun: By Appointment</p>
                </div>
              </div>

            </div>

            {/* Bottom: Founder Quote Note */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm mt-auto">
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal italic">
                &ldquo;Architecture is not defined by the height of a building, but by the depth of its concept.&rdquo;
              </p>
              <span className="block text-xs font-semibold text-white mt-2 not-italic">&mdash; Eng. Armash Ashraf</span>
            </div>

          </div>

          {/* ── SECOND COLUMN: Contact Form (Matching Height) ── */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10 backdrop-blur-md h-full flex flex-col justify-between">
            <form onSubmit={handleSubmit} className="flex flex-col justify-between h-full gap-5">

              <div className="flex flex-col gap-5">
                <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                  Send Us a Message
                </h3>

                {/* Full Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-gray-300">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all"
                  />
                </div>

                {/* Email & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-gray-300">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="sarah@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-gray-300">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+971 50 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all"
                    />
                  </div>
                </div>

                {/* Project Type */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="projectType" className="text-xs font-semibold uppercase tracking-wider text-gray-300">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-[#1c1c1c] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all"
                  >
                    <option value="Architectural Design">Architectural Design</option>
                    <option value="Interior Design">Interior Design</option>
                    <option value="Visualization">Visualization &amp; Renders</option>
                    <option value="Design Consultancy">Design Consultancy</option>
                    <option value="Other">Other Inquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5 flex-1">
                  <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-gray-300">
                    Project Details / Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Tell us about your space, timeline, and requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all resize-none flex-1 min-h-[100px]"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitted}
                className="w-full bg-white text-[#111111] hover:bg-gray-200 font-extrabold text-sm py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg disabled:opacity-80 cursor-pointer mt-4 shrink-0"
              >
                {submitted ? (
                  <>
                    <svg className="w-5 h-5 text-green-600 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Message Sent Successfully!</span>
                  </>
                ) : (
                  <>
                    <span>Submit Inquiry</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  )
}
