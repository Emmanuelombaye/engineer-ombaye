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
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[2px] w-12 bg-gradient-to-r from-cyan-500 to-purple-600" />
            <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-cyan-400">Portfolio</span>
          </div>
          <h2 className="text-5xl sm:text-7xl font-bold text-white tracking-tighter mb-8 leading-[1.1]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-purple-500 to-purple-600">
              Projects
            </span>
          </h2>
          <p className="text-lg text-dark-300 max-w-3xl font-normal leading-relaxed">
            I specialize in building complex, high-scale production systems. Here's a selected overview of my architectural contributions across full-stack engineering and AI/ML.
          </p>
        </motion.div>

        {/* Two-Tier Filter Navigation */}
        <div className="space-y-10 mb-20 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>

          {/* Tier 1: Categories */}
          <div className="flex flex-col space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-dark-500">Domain Filter</span>
            <div className="flex flex-wrap gap-3">
              {['All', ...projectCategories].map((cat) => (
                <button
                  key={cat}
                  onClick={() => { setActiveCategory(cat); setActiveSkill('All'); }}
                  className={`px-8 py-3 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all duration-300 border ${activeCategory === cat
                    ? 'bg-gradient-to-r from-cyan-600 to-purple-600 border-transparent text-white shadow-xl shadow-cyan-500/10'
                    : 'bg-dark-900/50 border-dark-800 text-dark-400 hover:border-cyan-500/50 hover:text-white'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Tier 2: Technical Skills */}
          <div className="flex flex-col space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-dark-500">Technology Focus</span>
            <div className="flex flex-wrap gap-2">
              {allSkills.slice(0, 15).map((skill) => (
                <button
                  key={skill}
                  onClick={() => setActiveSkill(skill)}
                  className={`px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 border ${activeSkill === skill
                    ? 'bg-cyan-500/10 border-cyan-500 text-cyan-400'
                    : 'bg-dark-900/30 border-dark-800/50 text-dark-500 hover:border-dark-700 hover:text-dark-300'
                    }`}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
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
                exit={{ opacity: 0, scale: 0.95 }}
                className="h-full group"
              >
                <div className="h-full bg-dark-900/40 border border-dark-800/60 rounded-xl overflow-hidden hover:border-dark-700 hover:bg-dark-900/60 transition-all duration-500 relative flex flex-col group p-6">
                  {/* Decorative Project Header */}
                  <div className="mb-6 h-32 w-full rounded-lg bg-dark-950/80 relative overflow-hidden flex items-center justify-center group-hover:bg-dark-950 transition-colors">
                    <div className={`absolute inset-0 opacity-10 bg-gradient-to-br ${project.id % 3 === 0 ? 'from-cyan-500 to-purple-500' :
                      project.id % 3 === 1 ? 'from-purple-500 to-blue-500' :
                        'from-emerald-500 to-cyan-500'
                      }`} />
                    <FaCode className="text-4xl text-dark-800 group-hover:text-cyan-500/20 transition-all group-hover:scale-125 duration-700" />
                  </div>

                  {/* Project Info */}
                  <div className="flex-1 space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-0.5 rounded bg-dark-950 border border-dark-800 text-[9px] font-black uppercase tracking-widest text-cyan-500">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-dark-300 font-normal leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.techStack.slice(0, 4).map((tech: string) => (
                        <span key={tech} className="text-[9px] font-bold text-dark-500 uppercase tracking-tighter">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links Footer */}
                  <div className="mt-8 flex items-center justify-between border-t border-dark-800 pt-6">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-400 flex items-center gap-2 group/btn"
                    >
                      Read More <FaChevronRight size={10} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>

                    <div className="flex gap-4">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener"
                        className="text-dark-500 hover:text-white transition-colors"
                        title="Visit GitHub"
                      >
                        <FaGithub size={18} />
                      </a>
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener"
                          className="text-dark-500 hover:text-white transition-colors"
                          title="Live Demo"
                        >
                          <FaGlobe size={18} />
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
