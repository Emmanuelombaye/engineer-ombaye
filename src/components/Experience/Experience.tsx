import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBriefcase, FaCalendar, FaTerminal, FaCheckCircle } from 'react-icons/fa'
import { professionalExperience } from '../../data/experienceData'
import { useReducedMotion } from '../../hooks/useReducedMotion'

/**
 * Technical Career Journey
 * Syab-cloned sequential card architecture
 */
function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const prefersReducedMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">

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
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-purple-400">Career Timeline</span>
            <div className="h-[1px] w-8 bg-purple-500" />
          </div>
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-display font-black text-white tracking-tighter">
            System <span className="text-gradient">Evolution</span>
          </h2>
          <p className="text-xl text-dark-400 max-w-2xl mx-auto font-light leading-relaxed">
            A history of architecting scalable infrastructure and leading high-performance engineering teams.
          </p>
        </motion.div>

        {/* Sequential Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid gap-12"
        >
          {professionalExperience.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={cardVariants}
              className="relative group lg:even:translate-x-12 transition-transform duration-700"
            >
              {/* Index Number Shadow */}
              <div className="absolute -left-12 -top-12 text-[12rem] font-black text-white/[0.02] pointer-events-none select-none hidden lg:block">
                0{index + 1}
              </div>

              <div className="glass p-10 sm:p-16 rounded-[3rem] border border-white/5 hover:border-white/10 transition-all duration-500 shadow-2xl relative overflow-hidden">
                {/* Accent line */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500 to-purple-600 opacity-20 group-hover:opacity-100 transition-opacity" />

                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 mb-12">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="p-4 bg-white/5 rounded-2xl text-cyan-400">
                        <FaBriefcase size={24} />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tighter group-hover:text-cyan-400 transition-colors">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-3 text-sm font-black uppercase tracking-widest text-dark-500">
                          <span className="text-purple-400 italic">{exp.company}</span>
                          <span>•</span>
                          <span>{exp.engagementType}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="px-6 py-3 bg-dark-900/50 border border-white/5 rounded-2xl flex items-center gap-3">
                    <FaCalendar className="text-dark-500" size={14} />
                    <span className="text-sm font-black text-white tracking-widest uppercase">{exp.startDate} — {exp.endDate}</span>
                  </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-12">
                  <div className="lg:col-span-12 space-y-8">
                    <div className="space-y-4">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-dark-500 flex items-center gap-3">
                        <FaTerminal size={12} className="text-cyan-500" /> Strategic Impact
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-6">
                        {exp.responsibilities.map((resp, i) => (
                          <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors group/item">
                            <FaCheckCircle className="text-cyan-500/40 mt-1 flex-shrink-0 group-hover/item:text-cyan-400 transition-colors" size={14} />
                            <p className="text-dark-300 text-sm leading-relaxed font-light">{resp}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4 pt-4">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-dark-500 flex items-center gap-3">
                        <span className="text-purple-500">◈</span> Core Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.techStack.map((tech) => (
                          <span key={tech} className="px-3 py-1.5 bg-dark-950/50 border border-white/5 rounded-lg text-[10px] font-bold text-dark-400 hover:text-white hover:border-cyan-500/30 transition-all cursor-default">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default Experience

