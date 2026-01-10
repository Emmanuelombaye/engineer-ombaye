import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedin, FaCheckCircle, FaPaperPlane, FaPhone } from 'react-icons/fa'
import { personalInfo, socialLinks } from '../../data/personalInfo'
import { useInView } from 'react-intersection-observer'

/**
 * Enterprise Contact Section
 * Syab-cloned premium form architecture
 */
function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 space-y-4"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-purple-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-purple-400">Initiate Connection</span>
            <div className="h-[1px] w-8 bg-purple-500" />
          </div>
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-display font-black text-white tracking-tighter">
            Let's Build <span className="text-gradient">Together.</span>
          </h2>
          <p className="text-xl text-dark-400 max-w-2xl mx-auto font-light leading-relaxed">
            Scalable systems or immersive frontends — I'm ready for the next architectural challenge.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">

          {/* Contact Details Dashboard */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-5 space-y-8"
          >
            <div className="glass p-10 rounded-[3rem] border border-white/5 space-y-12">
              <div className="space-y-6">
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Contact Points</h3>

                <div className="space-y-4">
                  {[
                    { icon: <FaEnvelope />, label: 'Direct Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                    { icon: <FaPhone />, label: 'Execution line', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
                    { icon: <FaLinkedin />, label: 'Professional Network', value: 'Emmanuel Ombaye', href: socialLinks.linkedin },
                    { icon: <FaGithub />, label: 'Source Integrity', value: '@Emmanuelombaye', href: socialLinks.github },
                  ].map((item, i) => (
                    <motion.a
                      key={i}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={itemVariants}
                      className="flex items-center gap-6 p-6 bg-white/[0.02] border border-white/5 rounded-[2rem] hover:border-cyan-500/30 transition-all group"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-dark-950 transition-all duration-500">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-[9px] font-black uppercase tracking-widest text-dark-500 mb-1">{item.label}</p>
                        <p className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">{item.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between p-8 bg-gradient-to-br from-cyan-500/10 to-purple-600/10 rounded-[2rem] border border-white/5">
                <div className="space-y-1">
                  <p className="text-[8px] font-black uppercase tracking-widest text-dark-400">Response Latency</p>
                  <p className="text-xl font-black text-white">&lt; 12 Hours</p>
                </div>
                <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-glow-emerald animate-pulse" />
              </div>
            </div>
          </motion.div>

          {/* Premium Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="glass p-10 sm:p-16 rounded-[3rem] border border-white/5 space-y-10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-12 opacity-5">
                <FaPaperPlane size={150} className="text-white group-hover:rotate-12 transition-transform duration-1000" />
              </div>

              <div className="grid sm:grid-cols-2 gap-8 relative z-10">
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-widest text-dark-500 px-2">Project Identity</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-8 py-5 bg-white/5 border border-white/5 rounded-2xl focus:border-cyan-500/50 outline-none transition-all text-white text-sm font-light placeholder:text-dark-600"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-widest text-dark-500 px-2">Encryption (Email)</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-8 py-5 bg-white/5 border border-white/5 rounded-2xl focus:border-cyan-500/50 outline-none transition-all text-white text-sm font-light placeholder:text-dark-600"
                  />
                </div>
              </div>

              <div className="space-y-4 relative z-10">
                <label className="text-[10px] font-black uppercase tracking-widest text-dark-500 px-2">Core Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="New System Architecture"
                  className="w-full px-8 py-5 bg-white/5 border border-white/5 rounded-2xl focus:border-cyan-500/50 outline-none transition-all text-white text-sm font-light placeholder:text-dark-600"
                />
              </div>

              <div className="space-y-4 relative z-10">
                <label className="text-[10px] font-black uppercase tracking-widest text-dark-500 px-2">Detailed Brief</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Outline the scope and technical requirements..."
                  className="w-full px-8 py-5 bg-white/5 border border-white/5 rounded-2xl focus:border-cyan-500/50 outline-none transition-all text-white text-sm font-light placeholder:text-dark-600 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className={`w-full py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] transition-all flex items-center justify-center gap-4 relative overflow-hidden group ${isSubmitted ? 'bg-emerald-500 text-white' : 'bg-white text-dark-950 hover:bg-cyan-400'
                  }`}
              >
                {isSubmitted ? (
                  <>
                    <FaCheckCircle className="animate-bounce" /> Transmission Successful
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                    Initiate Protocol
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

export default Contact
