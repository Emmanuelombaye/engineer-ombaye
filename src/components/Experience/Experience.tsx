import React from 'react'
import { professionalExperience } from '../../data/experienceData'

/**
 * Technical Career Journey
 * Syab-cloned sequential card architecture
 */
function Experience() {
  return (
    <section id="experience" className="bento-card col-span-4 space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-black tracking-tight uppercase">Experience</h2>
        <div className="text-[10px] font-bold text-zinc-500 tracking-widest uppercase italic">Career Journey</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {professionalExperience.map((exp, index) => (
          <div key={exp.id} className="space-y-4 p-6 bg-zinc-900 shadow-sm rounded-xl border border-zinc-800 hover:border-blue-500/30 transition-all group">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="text-lg font-bold group-hover:text-blue-500 transition-colors uppercase tracking-tight">{exp.role}</h3>
                <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{exp.company} • {exp.engagementType}</div>
              </div>
              <div className="text-[9px] font-mono text-zinc-600 bg-black/50 px-2 py-1 rounded">
                {exp.startDate} — {exp.endDate}
              </div>
            </div>

            <p className="text-[11px] text-zinc-400 leading-relaxed line-clamp-2 italic">
              {exp.responsibilities[0]}
            </p>

            <div className="flex flex-wrap gap-2">
              {exp.techStack.slice(0, 4).map(tech => (
                <span key={tech} className="text-[8px] font-bold text-zinc-700 uppercase tracking-tighter">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience

