import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaTimes, FaGlobe, FaChevronRight, FaCode } from 'react-icons/fa'
import { projects, projectCategories } from '../../data/projectsData'
import { useReducedMotion } from '../../hooks/useReducedMotion'

/**
 * Syab-Cloned Projects Section
 * Precise replication of syab.tech design and UX patterns
 */
function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const [activeSkill, setActiveSkill] = useState<string>('All')
  const [selectedProject, setSelectedProject] = useState<any>(null)

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  })

  // Extract all unique skills from filtered projects (or all projects)
  const allSkills = useMemo(() => {
    const skills = new Set<string>()
    projects.forEach(p => p.skills?.forEach(s => skills.add(s)))
    return ['All', ...Array.from(skills)]
  }, [])

  const filteredProjects = useMemo(() => {
    return projects.filter(p => {
      const categoryMatch = activeCategory === 'All' || p.category === activeCategory
      const skillMatch = activeSkill === 'All' || p.skills?.includes(activeSkill)
      return categoryMatch && skillMatch
    })
  }, [activeCategory, activeSkill])

  // Framer Motion Variants
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] },
    },
  }

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-950 font-sans overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">

        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-10 bg-cyan-500" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-cyan-500">Selected Works</span>
          </div>
          <h2 className="text-5xl sm:text-7xl font-black text-white tracking-tighter mb-6 leading-none">
            Projects
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl font-normal leading-relaxed">
            A showcase of complex systems, from distributed architectures to mission-critical applications.
          </p>
        </motion.div>

        {/* Simplified Filter Navigation */}
        <div className="flex flex-wrap gap-2 mb-16 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          {['All', ...projectCategories].map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setActiveSkill('All'); }}
              className={`px-6 py-2.5 rounded-lg text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 border ${activeCategory === cat
                ? 'bg-white border-white text-black'
                : 'bg-zinc-900/50 border-zinc-800 text-zinc-500 hover:border-zinc-700 hover:text-white'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={cardVariants}
                exit={{ opacity: 0, scale: 0.98 }}
                className="h-full"
              >
                <div className="h-full bg-zinc-900/30 border border-zinc-800/50 rounded-xl overflow-hidden hover:border-zinc-700 hover:bg-zinc-900/50 transition-all duration-500 flex flex-col p-6 group">
                  {/* Decorative Project Header */}
                  <div className="mb-6 h-32 w-full rounded-lg bg-zinc-950 flex items-center justify-center group-hover:bg-zinc-900 transition-colors border border-zinc-800/50">
                    <FaCode className="text-3xl text-zinc-800 group-hover:text-cyan-500/20 transition-all duration-700" />
                  </div>

                  {/* Project Info */}
                  <div className="flex-1 space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-cyan-500">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-zinc-400 font-normal leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.techStack.slice(0, 3).map((tech: string) => (
                        <span key={tech} className="text-[8px] font-bold text-zinc-600 uppercase tracking-widest px-2 py-1 bg-zinc-900 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links Footer */}
                  <div className="mt-8 flex items-center justify-between border-t border-zinc-800/50 pt-6">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 hover:text-white flex items-center gap-2 transition-colors"
                    >
                      Case Study <FaChevronRight size={8} />
                    </button>

                    <div className="flex gap-4">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener"
                        className="text-zinc-500 hover:text-white transition-colors"
                        title="View Code"
                      >
                        <FaGithub size={16} />
                      </a>
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener"
                          className="text-zinc-500 hover:text-white transition-colors"
                          title="Live Demo"
                        >
                          <FaGlobe size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Premium Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 md:p-12 backdrop-blur-3xl bg-dark-950/90"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                className="bg-dark-950 border border-dark-800 w-full max-w-5xl max-h-full overflow-hidden rounded-2xl relative shadow-2xl flex flex-col md:flex-row"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Visual Side */}
                <div className="w-full md:w-2/5 p-8 bg-dark-900 flex flex-col justify-center items-center relative overflow-hidden border-b md:border-b-0 md:border-r border-dark-800">
                  <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-cyan-500 to-purple-600" />
                  <FaCode size={120} className="text-dark-800 relative z-10" />
                  <div className="relative z-10 mt-8 text-center">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-500 mb-2">Project ID #{selectedProject.id}</p>
                    <h4 className="text-2xl font-bold text-white">{selectedProject.title}</h4>
                  </div>
                </div>

                {/* Modal Content Side */}
                <div className="flex-1 overflow-y-auto p-8 sm:p-12 space-y-10 no-scrollbar">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-6 right-6 p-2 text-dark-500 hover:text-white transition-colors z-20"
                  >
                    <FaTimes size={20} />
                  </button>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-dark-500">Problem Statement</h3>
                      <p className="text-lg text-white font-medium leading-relaxed italic">
                        "{selectedProject.problemStatement}"
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-dark-500">Solution Brief</h3>
                      <p className="text-dark-300 font-normal leading-relaxed">
                        {selectedProject.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-8 pt-4">
                      <div className="space-y-3">
                        <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-dark-500">Tech Ecosystem</h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.techStack.map((t: string) => (
                            <span key={t} className="px-3 py-1 bg-dark-900 border border-dark-800 rounded-md text-[10px] font-bold text-white uppercase tracking-widest">{t}</span>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-dark-500">Operational Integrity</h3>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          <span className="text-[11px] font-bold text-white uppercase tracking-widest">{selectedProject.status}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 flex flex-wrap gap-4 border-t border-dark-800">
                    <a href={selectedProject.githubLink} target="_blank" rel="noopener" className="flex-1 min-w-[150px] px-8 py-5 bg-white text-dark-950 rounded-xl font-bold uppercase tracking-[0.2em] text-[11px] text-center hover:bg-cyan-400 transition-colors">Source Integrity</a>
                    <a href={selectedProject.liveLink || '#'} target="_blank" rel="noopener" className="flex-1 min-w-[150px] px-8 py-5 bg-dark-900 border border-dark-800 text-white rounded-xl font-bold uppercase tracking-[0.2em] text-[11px] text-center hover:bg-white hover:text-dark-950 transition-colors">System Live</a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}

export default Projects
