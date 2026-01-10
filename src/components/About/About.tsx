import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaChartBar, FaCode, FaLightbulb, FaRocket, FaQuoteLeft, FaGithub, FaLinkedin } from 'react-icons/fa'
import { personalInfo, engineeringPrinciples } from '../../data/personalInfo'

/**
 * Professional Bio & Philosophy
 * Dashboard-inspired Syab layout
 */
function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">

        <div className="grid lg:grid-cols-12 gap-16 items-start">

          {/* Left Column: Bio & Stats */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-7 space-y-12"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-[1px] w-8 bg-cyan-500" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-400">Engineering Profile</span>
              </div>
              <h2 className="text-5xl sm:text-7xl font-display font-black text-white tracking-tighter leading-none">
                Architecting <span className="text-gradient">The Future.</span>
              </h2>
              <p className="text-xl text-dark-300 font-light leading-relaxed max-w-2xl">
                Senior Software Engineer with a decade of experience building mission-critical systems and fluid digital experiences. I specialize in bridging the gap between complex backend architectures and intuitive human interfaces.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { label: 'Experience', value: '8+ Yrs', icon: <FaChartBar className="text-cyan-400" /> },
                { label: 'Projects', value: '40+', icon: <FaCode className="text-purple-400" /> },
                { label: 'Uptime', value: '99.9%', icon: <FaRocket className="text-blue-400" /> },
              ].map((stat, i) => (
                <div key={i} className="glass p-8 rounded-[2.5rem] border border-white/5 space-y-3 hover:border-white/10 transition-colors">
                  <div className="text-xl">{stat.icon}</div>
                  <div className="text-3xl font-black text-white">{stat.value}</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-dark-500">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 relative overflow-hidden group">
              <FaQuoteLeft className="absolute -top-4 -left-4 text-white/[0.03] text-8xl" />
              <p className="text-dark-400 italic font-light relative z-10 text-lg leading-relaxed">
                "{personalInfo.valueProposition}"
              </p>
            </div>
          </motion.div>

          {/* Right Column: Principles Dashboard */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-5 space-y-8"
          >
            <div className="glass p-10 rounded-[3rem] border border-white/5 space-y-10">
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-white text-center">Core Principles</h3>

              <div className="space-y-6">
                {engineeringPrinciples.map((principle: any, index: number) => (
                  <motion.div
                    key={principle.title}
                    variants={itemVariants}
                    className="flex gap-6 group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-dark-950 transition-all duration-500 shrink-0">
                      {index === 0 && <FaChartBar />}
                      {index === 1 && <FaCode />}
                      {index === 2 && <FaLightbulb />}
                      {index === 3 && <FaRocket />}
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-lg font-black text-white tracking-tight">{principle.title}</h4>
                      <p className="text-dark-400 text-sm font-light leading-relaxed">{principle.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <div className="flex gap-4">
                  <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full text-white hover:bg-cyan-500 hover:text-dark-950 transition-all"><FaGithub /></a>
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full text-white hover:bg-purple-500 hover:text-dark-950 transition-all"><FaLinkedin /></a>
                </div>
                <button className="px-6 py-3 bg-white text-dark-950 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-cyan-400 transition-colors">Download CV</button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default About
