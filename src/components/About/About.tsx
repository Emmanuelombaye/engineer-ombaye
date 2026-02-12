import React from 'react'
import { personalInfo, engineeringPrinciples } from '../../data/personalInfo'

/**
 * Professional Bio & Philosophy
 * Dashboard-inspired Syab layout
 */
function About() {
  return (
    <section id="about" className="bento-card col-span-2 flex flex-col justify-center space-y-6">
      <div className="flex items-center gap-2">
        <div className="w-1.5 h-[1px] bg-blue-500" />
        <span className="text-mono text-zinc-500">Architecture & Strategy</span>
      </div>

      <h2 className="text-3xl font-black tracking-tighter">
        ENGINEERING <span className="text-blue-500">FOR IMPACT.</span>
      </h2>

      <p className="text-zinc-400 text-sm leading-relaxed">
        I specialize in bridging the gap between complex backend architectures and intuitive human interfaces.
        Focusing on ROI, performance, and future-proof scalability.
      </p>

      <div className="grid grid-cols-2 gap-4 pt-4">
        {engineeringPrinciples.slice(0, 2).map((principle: any) => (
          <div key={principle.title} className="space-y-1">
            <h4 className="text-[10px] font-bold text-white uppercase tracking-wider">{principle.title}</h4>
            <p className="text-[10px] text-zinc-500 leading-tight">{principle.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default About
