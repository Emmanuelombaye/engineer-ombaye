import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { skillCategories } from '../../data/skillsData'

/**
 * Technical Ecosystem Section
 * Syab-cloned clean architecture grid
 */
function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
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
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
            <div className="h-[1px] w-8 bg-cyan-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-400">Tech Ecosystem</span>
            <div className="h-[1px] w-8 bg-cyan-500" />
          </div>
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-display font-black text-white tracking-tighter">
            Architectural <span className="text-gradient">Core</span>
          </h2>
          <p className="text-xl text-dark-400 max-w-2xl mx-auto font-light leading-relaxed">
            A comprehensive stack built for resilience, scalability, and developer velocity.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {skillCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="glass p-10 rounded-[3rem] border border-white/5 space-y-8 hover:border-white/10 transition-colors"
            >
              <div className="space-y-2">
                <h3 className="text-3xl font-black text-white tracking-tight">{category.title}</h3>
                <div className="h-[2px] w-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full" />
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    variants={itemVariants}
                    className="px-5 py-3 bg-white/5 border border-white/5 rounded-2xl text-[10px] font-black uppercase tracking-widest text-dark-300 hover:text-white hover:border-cyan-500/30 transition-all cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills