import React from 'react'

/**
 * Stats Bar Component
 * Professional stats display with animations
 */
function StatsBar() {
  const stats = [
    { label: 'Projects Completed', value: '40+', suffix: '' },
    { label: 'Years Experience', value: '5+', suffix: '' },
    { label: 'Technologies', value: '50+', suffix: '' },
    { label: 'Client Satisfaction', value: '100', suffix: '%' },
  ]

  return (
    <>
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bento-card col-span-1 flex flex-col justify-center items-start space-y-2 hover:border-blue-500/30 group"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="text-4xl font-black text-white group-hover:text-blue-500 transition-colors">
            {stat.value}
            <span className="text-xl text-zinc-600 ml-1">{stat.suffix}</span>
          </div>
          <div className="text-mono text-[9px] text-zinc-600 group-hover:text-zinc-400">
            {stat.label}
          </div>
        </div>
      ))}
    </>
  )
}

export default StatsBar
