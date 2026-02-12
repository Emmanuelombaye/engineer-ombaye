import React, { useState } from 'react'
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa'
import { personalInfo, socialLinks } from '../../data/personalInfo'

/**
 * Enterprise Contact Section
 * Syab-cloned premium form architecture
 */
function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="bento-card col-span-4 space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-black tracking-tight uppercase">Initiate Protocol</h2>
        <div className="text-[10px] font-bold text-zinc-500 tracking-widest uppercase italic">Contact System</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <p className="text-zinc-400 text-sm leading-relaxed">
            Scalable systems or immersive frontends — I'm ready for the next architectural challenge.
            Reach out via the system interfaces below.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: <FaEnvelope />, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
              { icon: <FaLinkedin />, label: 'LinkedIn', value: 'Emmanuel Ombaye', href: socialLinks.linkedin },
              { icon: <FaGithub />, label: 'GitHub', value: socialLinks.github.replace('https://github.com/', ''), href: socialLinks.github },
              { icon: <FaPhone />, label: 'Status', value: 'Available for Hire', href: '#' },
            ].map((item, i) => (
              <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-blue-500/30 transition-all group/item">
                <div className="flex items-center gap-3">
                  <div className="text-blue-500 group-hover/item:scale-110 transition-transform">{item.icon}</div>
                  <div>
                    <div className="text-[8px] font-black uppercase tracking-widest text-zinc-600">{item.label}</div>
                    <div className="text-[11px] font-bold text-zinc-300 truncate max-w-[120px]">{item.value}</div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="p-6 bg-blue-500/5 border border-blue-500/10 rounded-2xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest">Average Response Latency</span>
              <div className="flex gap-1">
                {[1, 2, 3].map(i => <div key={i} className="w-1 h-3 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />)}
              </div>
            </div>
            <div className="text-2xl font-black text-white">&lt; 12 HOURS</div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="IDENTITY"
              className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-lg focus:border-blue-500/50 outline-none transition-all text-xs font-bold uppercase tracking-widest placeholder:text-zinc-800"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="ENCRYPTED EMAIL"
              className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-lg focus:border-blue-500/50 outline-none transition-all text-xs font-bold uppercase tracking-widest placeholder:text-zinc-800"
            />
          </div>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            placeholder="SYSTEM SUBJECT"
            className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-lg focus:border-blue-500/50 outline-none transition-all text-xs font-bold uppercase tracking-widest placeholder:text-zinc-800"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            placeholder="DETAILED BRIEF..."
            className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-lg focus:border-blue-500/50 outline-none transition-all text-xs font-bold uppercase tracking-widest placeholder:text-zinc-800 resize-none"
          />
          <button
            type="submit"
            disabled={isSubmitted}
            className={`w-full py-4 rounded-lg font-black uppercase tracking-[0.3em] text-[10px] transition-all flex items-center justify-center gap-2 ${isSubmitted ? 'bg-emerald-500 text-white' : 'bg-white text-black hover:bg-blue-500 hover:text-white'
              }`}
          >
            {isSubmitted ? 'TRANSMISSION_COMPLETE' : 'INITIATE PROTOCOL'}
          </button>
        </form>
      </div>
    </section >
  )
}

export default Contact
