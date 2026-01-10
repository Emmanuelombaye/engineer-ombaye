import { FaGithub, FaLinkedin, FaArrowUp, FaEnvelope } from 'react-icons/fa'
import { personalInfo, socialLinks } from '../../data/personalInfo'

/**
 * Enterprise Footer
 * Syab-cloned minimal/premium architecture
 */
function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">

        <div className="flex flex-col items-center text-center space-y-16">

          {/* Big CTA */}
          <div className="space-y-6">
            <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tighter">
              Ready to <span className="text-gradient">Architect</span> The Next Big Thing?
            </h3>
            <p className="text-dark-400 font-light max-w-xl mx-auto">
              Currently accepting high-impact roles and consulting opportunities for 2026.
            </p>
            <div className="flex justify-center gap-6 pt-4">
              <a href="#contact" className="px-8 py-4 bg-white text-dark-950 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-cyan-400 transition-colors">Start A Discussion</a>
            </div>
          </div>

          {/* Brand & Socials */}
          <div className="w-full pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center font-black text-white text-xl">
                EO
              </div>
              <div className="text-left">
                <p className="text-lg font-black text-white leading-none">{personalInfo.name}</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-dark-500 mt-1">Senior Software Engineer</p>
              </div>
            </div>

            <div className="flex gap-4">
              {[
                { icon: <FaGithub />, href: socialLinks.github },
                { icon: <FaLinkedin />, href: socialLinks.linkedin },
                { icon: <FaEnvelope />, href: socialLinks.email },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-white hover:bg-cyan-500 hover:text-dark-950 transition-all duration-500"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group flex flex-col items-center gap-2"
            >
              <div className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center text-white group-hover:border-cyan-500 transition-colors">
                <FaArrowUp />
              </div>
              <span className="text-[8px] font-black uppercase tracking-[0.3em] text-dark-500 group-hover:text-white transition-colors">Back To Top</span>
            </button>
          </div>

          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 text-[9px] font-black uppercase tracking-[0.3em] text-dark-600">
            <p>© {currentYear} • EMMANUEL OMBAYE OKARI</p>
            <div className="flex gap-8">
              <span>System Verified</span>
              <span>WCAG compliant</span>
              <span>Global Distribution</span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
