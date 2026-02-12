import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowRight, FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa'
import { socialLinks } from '../../data/personalInfo'
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
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Dynamic Background Motion */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_65%)] from-cyan-500/5 to-transparent opacity-50" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col items-center text-center space-y-12">

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl space-y-8"
          >
            <div className="space-y-6">
              <motion.div variants={itemVariants} className="flex flex-col items-center space-y-4">
                <span className="inline-block px-4 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-500">
                  EST. 2019 • SENIOR ENGINEER
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-6xl sm:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] text-white"
              >
                Architecting <br />
                <span className="text-zinc-500">
                  Digital Legacy.
                </span>
              </motion.h1>

              <motion.div
                variants={itemVariants}
                className="h-10 sm:h-12 flex items-center justify-center overflow-hidden"
              >
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentRoleIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="text-lg sm:text-2xl font-mono tracking-widest text-zinc-400 uppercase"
                  >
                    {roles[currentRoleIndex]}
                  </motion.p>
                </AnimatePresence>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed font-normal"
              >
                I build high-scale, mission-critical systems that merge robust architecture with exceptional user experiences. Focused on ROI, performance, and future-proof scalability.
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-6 pt-4"
            >
              <a
                href="#projects"
                className="group relative px-10 py-5 bg-white text-black rounded-xl font-bold uppercase tracking-widest text-xs transition-all duration-300 hover:bg-cyan-500 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-3 overflow-hidden"
              >
                Explore Works
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="px-10 py-5 bg-transparent border border-zinc-800 hover:border-zinc-700 text-white rounded-xl font-bold uppercase tracking-widest text-xs transition-all duration-300 backdrop-blur-md hover:bg-zinc-900/50 flex items-center gap-3 active:scale-[0.98]"
              >
                Connect Now
              </a>
            </motion.div>

            {/* Socials & Identity */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center gap-8 pt-8"
            >
              {[
                { icon: <FaGithub size={18} />, link: socialLinks.github, label: 'GitHub' },
                { icon: <FaLinkedin size={18} />, link: socialLinks.linkedin, label: 'LinkedIn' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
              <div className="h-4 w-[1px] bg-zinc-800" />
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Available for Projects</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator - Syab style */}
      {!prefersReducedMotion && (
        <motion.a
          href="#projects"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-dark-500 hover:text-cyan-400 transition-colors cursor-pointer flex flex-col items-center gap-3"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.5em] rotate-180 [writing-mode:vertical-lr]">Scroll</span>
          <FaArrowDown size={14} />
        </motion.a>
      )}
    </section>
  )
}

export default Hero

