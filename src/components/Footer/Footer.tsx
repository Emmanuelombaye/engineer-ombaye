import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { personalInfo, socialLinks } from '../../data/personalInfo'

/**
 * Enterprise Footer
 * Syab-cloned minimal/premium architecture
 */
function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 border-t border-zinc-900 mt-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center font-black text-white text-sm">
              EO
            </div>
            <div>
              <p className="text-xs font-black text-white uppercase tracking-tighter">{personalInfo.name}</p>
              <p className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">Digital Architect © {currentYear}</p>
            </div>
          </div>

          <div className="flex gap-6">
            {[
              { icon: <FaGithub />, href: socialLinks.github },
              { icon: <FaLinkedin />, href: socialLinks.linkedin },
              { icon: <FaEnvelope />, href: `mailto:${personalInfo.email}` },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-blue-500 transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">System Status: Optimal</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
