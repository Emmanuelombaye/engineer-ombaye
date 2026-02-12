import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowRight, FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa'
import { personalInfo, socialLinks } from '../../data/personalInfo'
import { useReducedMotion } from '../../hooks/useReducedMotion'

/**
 * Senior-level Hero Section
 * Syab-inspired architecture with 2026 premium aesthetics
 */
function Hero() {
  const prefersReducedMotion = useReducedMotion()

  const roles = [
    'Senior Software Engineer',
    'System Architect',
    'Technical Leader',
    'Enterprise Solutions Expert',
  ]

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)

  useEffect(() => {
    if (prefersReducedMotion) return
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [prefersReducedMotion])

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants: any = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for senior feel
      },
    },
  }

  return (
    <section className="bento-card col-span-2 row-span-2 flex flex-col justify-between group">
      {/* Technical Overlay */}
      <div className="absolute top-0 right-0 p-4 text-[10px] text-zinc-800 font-mono leading-tight text-right opacity-50">
        SYSTEM_STATUS: ACTIVE<br />
        CORE_ARCH: X64_64<br />
        ENCRYPT: AES-256<br />
        UPLINK: STABLE
      </div>

      {/* Scanner Effect */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-blue-500/10 blur-sm animate-scan pointer-events-none" />

      <div className="space-y-6 relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-mono text-blue-500">System Architect</span>
        </div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl lg:text-7xl font-black tracking-tighter leading-none"
        >
          EMMANUEL <br />
          <span className="text-zinc-500">OMBAYE</span>
        </motion.h1>

        <p className="text-zinc-400 max-w-sm text-sm lg:text-base">
          {personalInfo.tagline}
        </p>
      </div>

      <div className="flex flex-wrap gap-4 mt-8 relative z-10">
        <button className="px-6 py-2 bg-white text-black text-xs font-bold rounded-full hover:bg-zinc-200 transition-colors">
          VIEW PROJECTS
        </button>
        <div className="flex gap-4 items-center">
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
            <FaGithub size={20} />
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero

