'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, ChevronDown, ArrowRight, Check } from 'lucide-react'

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    projectType: 'architectural-design',
    message: '',
  })

  // Track focused fields for floating label animation state
  const [focused, setFocused] = useState<{ [key: string]: boolean }>({})

  const handleFocus = (field: string) => setFocused((prev) => ({ ...prev, [field]: true }))
  const handleBlur = (field: string, value: string) => {
    if (!value) setFocused((prev) => ({ ...prev, [field]: false }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        projectType: 'architectural-design',
        message: '',
      })
      setFocused({})
    }, 4000)
  }

  return (
    <section
      id="contact"
      aria-label="Contact Us"
      className="w-full relative overflow-hidden"
      style={{
        backgroundColor: '#EDE9E3',
        color: '#1a1a1a',
        borderTop: '1px solid rgba(26, 26, 26, 0.12)',
        paddingTop: '50px',
        paddingBottom: '50px',
      }}
    >
      {/* Subtle Hairline Crosshatch Overlay */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.05]"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="contact-grid-pattern-cream"
            patternUnits="userSpaceOnUse"
            width="36"
            height="36"
            patternTransform="rotate(45 0 0)"
          >
            <line x1="18" y1="0" x2="18" y2="36" stroke="#1a1a1a" strokeWidth="1" />
            <line x1="0" y1="18" x2="36" y2="18" stroke="#1a1a1a" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#contact-grid-pattern-cream)" />
      </svg>

      {/* Main Container with 88% width, max 1200px, 0 auto centering, and 30px side padding */}
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

        {/* Section Header Badge & Bold Uppercase Title */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '56px' }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#1a1a1a]" />
            <span
              className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase"
              style={{ color: '#888880' }}
            >
              05. Contact Us
            </span>
          </div>

          <h2
            className="font-black uppercase leading-[0.95] tracking-tight max-w-[850px]"
            style={{
              fontSize: 'clamp(36px, 5.5vw, 68px)',
              color: '#1a1a1a',
              letterSpacing: '-0.03em',
            }}
          >
            Let&apos;s Build<br />
            Something<br />
            Timeless.
          </h2>
        </motion.div>

        {/* Asymmetric Desktop 55/45 Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">

          {/* ── LEFT COLUMN: Studio Info & Cards (~55% width -> lg:col-span-7) ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col justify-start gap-6 sm:gap-8"
          >
            <p className="text-base sm:text-lg font-light leading-relaxed max-w-[560px]" style={{ color: '#444440' }}>
              Have a project in mind or require specialized architectural, interior design, or CGI rendering consultancy? Connect with our team to bring your vision to life.
            </p>

            {/* Direct Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 py-2">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: 'rgba(26, 26, 26, 0.06)', border: '1px solid rgba(26, 26, 26, 0.1)' }}
                >
                  <Mail className="w-4 h-4" style={{ color: '#1a1a1a' }} />
                </div>
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: '#888880' }}>
                    Email Us
                  </span>
                  <a
                    href="mailto:info@armarchengineering.com"
                    className="text-sm sm:text-base font-semibold hover:opacity-50 transition-opacity"
                    style={{ color: '#1a1a1a' }}
                  >
                    info@armarchengineering.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: 'rgba(26, 26, 26, 0.06)', border: '1px solid rgba(26, 26, 26, 0.1)' }}
                >
                  <Phone className="w-4 h-4" style={{ color: '#1a1a1a' }} />
                </div>
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: '#888880' }}>
                    Call Us
                  </span>
                  <a
                    href="tel:+97141234567"
                    className="text-sm sm:text-base font-semibold hover:opacity-50 transition-opacity"
                    style={{ color: '#1a1a1a' }}
                  >
                    +971 4 123 4567
                  </a>
                </div>
              </div>
            </div>

            {/* Small Elegant Quote Accent */}
            <div className="pl-6 py-2 my-2" style={{ borderLeft: '2px solid #1a1a1a' }}>
              <p className="text-sm sm:text-base font-light italic leading-relaxed" style={{ color: '#444440' }}>
                &ldquo;Architecture is not defined by the height of a building, but by the depth of its concept.&rdquo;
              </p>
              <a
                href="https://www.linkedin.com/in/armash-ashraf-5839381a0/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-xs tracking-wider uppercase block mt-1.5 hover:opacity-50 transition-opacity"
                style={{ color: '#1a1a1a' }}
              >
                &mdash; Eng. Armash Ashraf
              </a>
            </div>

          </motion.div>

          {/* ── RIGHT COLUMN: Inquiry Form (~45% width -> lg:col-span-5) ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 rounded-2xl h-full flex flex-col justify-between shadow-sm"
            style={{
              backgroundColor: '#F4F0EA',
              border: '1px solid rgba(26, 26, 26, 0.12)',
              padding: '56px 44px',
              minHeight: '640px',
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-10 flex flex-col justify-between h-full flex-1">
              
              <h3
                className="text-xl sm:text-2xl font-black tracking-tight pb-4 uppercase"
                style={{ color: '#1a1a1a', borderBottom: '1px solid rgba(26, 26, 26, 0.12)' }}
              >
                Inquiry Form
              </h3>

              {/* Full Name Input */}
              <div className="relative group">
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onFocus={() => handleFocus('fullName')}
                  onBlur={(e) => handleBlur('fullName', e.target.value)}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-transparent text-base pt-6 pb-3 focus:outline-none transition-colors peer"
                  style={{
                    color: '#1a1a1a',
                    borderBottom: '1px solid rgba(26, 26, 26, 0.22)',
                  }}
                />
                <label
                  htmlFor="fullName"
                  className={`absolute left-0 transition-all duration-200 pointer-events-none text-xs font-semibold uppercase tracking-wider ${
                    focused.fullName || formData.fullName
                      ? '-top-5 text-[#1a1a1a]'
                      : '-top-2 text-[#888880] peer-focus:top-0 peer-focus:text-[#1a1a1a]'
                  }`}
                >
                  Full Name <span style={{ color: '#1a1a1a' }}>*</span>
                </label>
              </div>

              {/* Email Address Input */}
              <div className="relative group">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onFocus={() => handleFocus('email')}
                  onBlur={(e) => handleBlur('email', e.target.value)}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-transparent text-base pt-6 pb-3 focus:outline-none transition-colors peer"
                  style={{
                    color: '#1a1a1a',
                    borderBottom: '1px solid rgba(26, 26, 26, 0.22)',
                  }}
                />
                <label
                  htmlFor="email"
                  className={`absolute left-0 transition-all duration-200 pointer-events-none text-xs font-semibold uppercase tracking-wider ${
                    focused.email || formData.email
                      ? '-top-5 text-[#1a1a1a]'
                      : '-top-2 text-[#888880] peer-focus:top-0 peer-focus:text-[#1a1a1a]'
                  }`}
                >
                  Email Address <span style={{ color: '#1a1a1a' }}>*</span>
                </label>
              </div>

              {/* Phone & Project Type Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Phone */}
                <div className="relative group">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onFocus={() => handleFocus('phone')}
                    onBlur={(e) => handleBlur('phone', e.target.value)}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-transparent text-base pt-6 pb-3 focus:outline-none transition-colors peer"
                    style={{
                      color: '#1a1a1a',
                      borderBottom: '1px solid rgba(26, 26, 26, 0.22)',
                    }}
                  />
                  <label
                    htmlFor="phone"
                    className={`absolute left-0 transition-all duration-200 pointer-events-none text-xs font-semibold uppercase tracking-wider ${
                      focused.phone || formData.phone
                        ? '-top-5 text-[#1a1a1a]'
                        : '-top-2 text-[#888880] peer-focus:top-0 peer-focus:text-[#1a1a1a]'
                    }`}
                  >
                    Phone Number
                  </label>
                </div>

                {/* Project Type */}
                <div className="relative group flex flex-col justify-end">
                  <label htmlFor="projectType" className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: '#1a1a1a' }}>
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-transparent text-base pb-3 focus:outline-none transition-colors appearance-none cursor-pointer pr-6 font-medium"
                    style={{
                      color: '#1a1a1a',
                      borderBottom: '1px solid rgba(26, 26, 26, 0.22)',
                    }}
                  >
                    <option value="architectural-design" className="bg-[#F4F0EA] text-[#1a1a1a]">Architectural Design</option>
                    <option value="interior-design" className="bg-[#F4F0EA] text-[#1a1a1a]">Interior Design</option>
                    <option value="visualization" className="bg-[#F4F0EA] text-[#1a1a1a]">Visualization &amp; Renders</option>
                    <option value="consultancy" className="bg-[#F4F0EA] text-[#1a1a1a]">Consultancy</option>
                    <option value="other" className="bg-[#F4F0EA] text-[#1a1a1a]">Other Inquiry</option>
                  </select>
                  <div className="pointer-events-none absolute right-0 bottom-4" style={{ color: '#1a1a1a' }}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Message Input — enlarged height */}
              <div className="relative group pt-2">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onFocus={() => handleFocus('message')}
                  onBlur={(e) => handleBlur('message', e.target.value)}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent text-base pt-6 pb-3 focus:outline-none transition-colors resize-none peer"
                  style={{
                    color: '#1a1a1a',
                    borderBottom: '1px solid rgba(26, 26, 26, 0.22)',
                  }}
                />
                <label
                  htmlFor="message"
                  className={`absolute left-0 transition-all duration-200 pointer-events-none text-xs font-semibold uppercase tracking-wider ${
                    focused.message || formData.message
                      ? '-top-5 text-[#1a1a1a]'
                      : '-top-2 text-[#888880] peer-focus:top-0 peer-focus:text-[#1a1a1a]'
                  }`}
                >
                  Project Details / Message <span style={{ color: '#1a1a1a' }}>*</span>
                </label>
              </div>

              {/* Prominent Submit Button */}
              <button
                type="submit"
                disabled={submitted}
                className="w-full mt-6 font-black text-xs uppercase tracking-[0.25em] py-5 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-md hover:shadow-xl active:scale-[0.99] disabled:opacity-80 cursor-pointer group"
                style={{
                  backgroundColor: '#1a1a1a',
                  color: '#EDE9E3',
                  paddingTop: '15px',
                  paddingBottom: '15px',
                }}
              >
                {submitted ? (
                  <>
                    <Check className="w-5 h-5 text-green-400 animate-bounce" />
                    <span>Message Sent Successfully!</span>
                  </>
                ) : (
                  <>
                    <span>Submit Inquiry</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                  </>
                )}
              </button>

            </form>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
