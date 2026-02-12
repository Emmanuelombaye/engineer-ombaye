import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa'
import { useTheme } from '../../contexts/ThemeContext'
import { personalInfo } from '../../data/personalInfo'

/**
 * Enhanced Header Component - Syab-inspired
 * Fixed glassmorphism navbar with active indicators and smooth transitions
 */
function Header() {
  const { theme, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Update active section based on scroll position
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 py-4 ${isScrolled ? 'top-2' : 'top-0'
        }`}
    >
      <nav
        className={`container mx-auto max-w-7xl rounded-2xl transition-all duration-500 ${isScrolled
          ? 'glass py-3 px-6 shadow-glow-cyan/10 border-white/10'
          : 'bg-transparent py-5 px-4 border-transparent'
          } flex items-center justify-between border`}
      >
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center font-black text-white text-base shadow-lg group-hover:border-cyan-500/50 transition-all">
            EO
          </div>
          <span className="text-xl font-black tracking-tighter text-white">
            {personalInfo.name.split(' ')[0]} <span className="text-zinc-500 group-hover:text-zinc-300 transition-colors">{personalInfo.name.split(' ')[1]}</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`px-4 py-2 rounded-lg text-[13px] font-bold tracking-tight transition-all relative group ${activeSection === link.id ? 'text-white' : 'text-zinc-500 hover:text-white'
                }`}
            >
              {link.name}
              {activeSection === link.id && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute bottom-1 left-4 right-4 h-[2px] bg-cyan-500 rounded-full"
                />
              )}
            </a>
          ))}

          <div className="h-4 w-[1px] bg-zinc-800 mx-2" />

          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-lg hover:bg-zinc-900 transition-all text-zinc-500 hover:text-white"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <FaSun size={16} /> : <FaMoon size={16} />}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-lg bg-zinc-900/50 text-zinc-500"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <FaSun size={16} /> : <FaMoon size={16} />}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-500"
          >
            {isMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -10 }}
            className="fixed inset-x-4 top-20 md:hidden glass rounded-2xl p-6 shadow-2xl z-40 border-white/5"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-6 py-3 rounded-xl font-bold text-sm tracking-tight transition-colors ${activeSection === link.id ? 'bg-cyan-500/10 text-cyan-400' : 'text-zinc-400 hover:bg-zinc-900'
                    }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
