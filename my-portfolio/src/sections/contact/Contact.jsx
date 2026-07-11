import React, { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { FiSend, FiCheckCircle, FiAlertCircle, FiMail, FiUser, FiMessageSquare } from 'react-icons/fi'
import ParticlesBackground from '../../components/particlesBackground/ParticlesBackground'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

function FloatingIllustration() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="relative w-full h-[320px] md:h-[460px] flex items-center justify-center">
      <div
        aria-hidden
        className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full blur-3xl opacity-20"
        style={{ background: 'radial-gradient(circle, #2DD4BF 0%, transparent 70%)' }}
      />

      <motion.svg
        animate={reduceMotion ? {} : { y: [0, -18, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        width="220"
        height="160"
        viewBox="0 0 220 160"
        className="relative z-10 drop-shadow-[0_10px_25px_rgba(45,212,191,0.15)]"
      >
        <rect x="10" y="20" width="200" height="130" rx="12" fill="#1f1119" stroke="#2DD4BF" strokeOpacity="0.5" strokeWidth="2" />
        <path d="M14 28 L110 100 L206 28" fill="none" stroke="#2DD4BF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="14" y1="146" x2="80" y2="90" stroke="#2DD4BF" strokeOpacity="0.35" strokeWidth="2" strokeLinecap="round" />
        <line x1="206" y1="146" x2="140" y2="90" stroke="#2DD4BF" strokeOpacity="0.35" strokeWidth="2" strokeLinecap="round" />
      </motion.svg>

      <motion.svg
        animate={reduceMotion ? {} : { y: [0, 16, 0], x: [0, 8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
        width="60"
        height="60"
        viewBox="0 0 60 60"
        className="absolute z-20 top-4 right-6 md:top-6 md:right-10"
      >
        <path d="M4 30 L54 6 L38 54 L28 34 Z" fill="#F0A868" fillOpacity="0.9" />
        <path d="M28 34 L54 6 L4 30 Z" fill="#F5E9DE" fillOpacity="0.15" />
      </motion.svg>

      <motion.span
        animate={reduceMotion ? {} : { y: [0, -10, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute z-0 bottom-8 left-8 md:bottom-12 md:left-14 w-3 h-3 rounded-full bg-[#2DD4BF]"
      />
      <motion.span
        animate={reduceMotion ? {} : { y: [0, 12, 0], opacity: [0.3, 0.9, 0.3] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
        className="absolute z-0 top-10 left-4 md:top-14 md:left-10 w-2 h-2 rounded-full bg-[#F0A868]"
      />
      <motion.span
        animate={reduceMotion ? {} : { y: [0, -14, 0], opacity: [0.3, 0.9, 0.3] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute z-0 bottom-14 right-10 md:bottom-20 md:right-16 w-2.5 h-2.5 rounded-full bg-[#2DD4BF]"
      />
    </div>
  )
}

function FormField({ icon: Icon, label, name, type = 'text', as = 'input', value, onChange, required = true }) {
  const [focused, setFocused] = useState(false)
  const Component = as

  return (
    <div className="relative">
      <label htmlFor={name} className="flex items-center gap-2 text-xs font-mono tracking-wide text-[#B79AA8] mb-2">
        <Icon size={14} />
        {label}
      </label>
      <Component
        id={name}
        name={name}
        type={as === 'input' ? type : undefined}
        rows={as === 'textarea' ? 5 : undefined}
        required={required}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-[#F5E9DE] text-sm placeholder:text-[#6b5a63] outline-none transition-colors duration-300 focus:border-[#2DD4BF] resize-none"
        placeholder={`Your ${label.toLowerCase()}`}
      />
      <motion.span
        initial={false}
        animate={{ scaleX: focused ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-0 left-0 h-[2px] w-full bg-[#2DD4BF] origin-left rounded-full"
        style={{ transform: 'translateY(2px)' }}
      />
    </div>
  )
}

export default function Contact({ id }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (!res.ok) throw new Error('Failed to send')
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    } catch (err) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section id={id} className="w-full min-h-screen relative overflow-hidden bg-[#291522] py-24">
      <ParticlesBackground />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs tracking-widest text-[#2DD4BF] mb-3">GET IN TOUCH</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F5E9DE]">
            Let's Work Together
          </h2>
          <p className="text-[#B79AA8] text-sm md:text-base mt-4 max-w-lg mx-auto">
            Have a project in mind or just want to say hi? Fill the form below and I'll get back to you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="order-2 md:order-1"
          >
            <FloatingIllustration />
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="order-1 md:order-2 flex flex-col gap-5 bg-[#1f1119]/60 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <FormField icon={FiUser} label="Name" name="name" value={formData.name} onChange={handleChange} />
              <FormField icon={FiMail} label="Email" name="email" type="email" value={formData.email} onChange={handleChange} />
            </div>

            <FormField icon={FiMessageSquare} label="Subject" name="subject" value={formData.subject} onChange={handleChange} required={false} />

            <FormField
              icon={FiMessageSquare}
              label="Message"
              name="message"
              as="textarea"
              value={formData.message}
              onChange={handleChange}
            />

            <motion.button
              type="submit"
              disabled={status === 'loading'}
              whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
              whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
              className="mt-2 flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#2DD4BF] text-[#0f1512] font-semibold text-sm disabled:opacity-60 disabled:cursor-not-allowed transition-opacity"
            >
              {status === 'loading' ? (
                <>
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                    className="w-4 h-4 border-2 border-[#0f1512] border-t-transparent rounded-full"
                  />
                  Sending...
                </>
              ) : (
                <>
                  Send Message <FiSend size={16} />
                </>
              )}
            </motion.button>

            {status === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-sm text-[#2DD4BF] font-mono"
              >
                <FiCheckCircle size={16} /> Message sent successfully!
              </motion.p>
            )}
            {status === 'error' && (
              <motion.p
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-sm text-red-400 font-mono"
              >
                <FiAlertCircle size={16} /> Something went wrong. Try again.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}