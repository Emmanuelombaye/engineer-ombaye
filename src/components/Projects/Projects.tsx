import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaChevronRight, FaCode } from 'react-icons/fa'
import { projects, projectCategories } from '../../data/projectsData'

/**
 * Syab-Cloned Projects Section
 * Precise replication of syab.tech design and UX patterns
 */
function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const [activeSkill, setActiveSkill] = useState<string>('All')
  const [selectedProject, setSelectedProject] = useState<any>(null)

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

  return (
    <>
      <section id="projects" className="col-span-4 grid grid-cols-4 gap-4 p-0">
        <div className="col-span-4 mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-black tracking-tight">PROJECTS</h2>
          <div className="flex gap-2">
            {['All', ...projectCategories].slice(0, 4).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border transition-all ${activeCategory === cat ? 'bg-white text-black border-white' : 'border-zinc-900 text-zinc-500 hover:border-zinc-700'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="popLayout">
          {filteredProjects.slice(0, 2).map((project) => (
            <div
              key={project.id}
              className="bento-card col-span-2 row-span-1 flex flex-col justify-between group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="space-y-2">
                <div className="text-mono text-blue-500">{project.category}</div>
                <h3 className="text-xl font-bold tracking-tight group-hover:text-blue-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-500 text-xs line-clamp-2">
                  {project.description}
                </p>
              </div>

              <div className="flex justify-between items-center mt-4">
                <div className="flex gap-2">
                  {project.techStack.slice(0, 2).map((tech: string) => (
                    <span key={tech} className="text-[8px] font-bold text-zinc-700 uppercase tracking-widest">
                      {tech}
                    </span>
                  ))}
                </div>
                <FaChevronRight size={10} className="text-zinc-800 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}
        </AnimatePresence>
      </section>

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
    </>
  )
}

export default Projects
