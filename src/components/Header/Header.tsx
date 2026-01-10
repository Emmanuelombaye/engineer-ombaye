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
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center font-black text-white text-lg shadow-glow-cyan/20 group-hover:scale-110 transition-transform">
            EO
          </div>
          <span className="text-xl font-display font-black tracking-tighter text-white group-hover:text-cyan-400 transition-colors">
            {personalInfo.name.split(' ')[0]} <span className="text-dark-400 group-hover:text-white">{personalInfo.name.split(' ')[1]}</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all relative group ${activeSection === link.id ? 'text-cyan-400 bg-cyan-500/5' : 'text-dark-300 hover:text-white'
                }`}
            >
              {link.name}
              {activeSection === link.id && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute bottom-1 left-4 right-4 h-[2px] bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
                />
              )}
            </a>
          ))}

          <div className="h-6 w-[1px] bg-dark-800 mx-2" />

          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl hover:bg-white/5 transition-all text-dark-300 hover:text-cyan-400"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl bg-white/5 text-dark-300"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400"
          >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-x-4 top-24 md:hidden glass rounded-3xl p-6 shadow-2xl z-40 border-white/10"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-6 py-4 rounded-2xl font-bold transition-colors ${activeSection === link.id ? 'bg-cyan-500/10 text-cyan-400' : 'text-dark-300 hover:bg-white/5'
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
