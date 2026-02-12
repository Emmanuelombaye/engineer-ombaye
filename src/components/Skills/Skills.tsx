import React from 'react'
import { skillCategories } from '../../data/skillsData'

/**
 * Technical Ecosystem Section
 * Syab-cloned clean architecture grid
 */
function Skills() {
  return (
    <section id="skills" className="bento-card col-span-4 space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-black tracking-tight uppercase">Technical Ecosystem</h2>
        <div className="text-[10px] font-bold text-zinc-500 tracking-widest uppercase italic">Core Architecture</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category) => (
          <div key={category.id} className="space-y-4">
            <h3 className="text-[10px] font-black text-white tracking-widest uppercase border-b border-zinc-900 pb-2">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span key={skill} className="px-3 py-1.5 bg-zinc-900/50 border border-zinc-800 rounded-md text-[10px] font-bold text-zinc-500 hover:text-blue-500 hover:border-blue-500/30 transition-all cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills