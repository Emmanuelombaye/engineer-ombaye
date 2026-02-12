import { useScrollAnimation } from '../../hooks/useScrollAnimation'

/**
 * Stats Bar Component
 * Professional stats display with animations
 */
function StatsBar() {
  const { ref, isVisible } = useScrollAnimation()

  const stats = [
    { label: 'Projects Completed', value: '40+', suffix: '' },
    { label: 'Years Experience', value: '5+', suffix: '' },
    { label: 'Technologies', value: '50+', suffix: '' },
    { label: 'Client Satisfaction', value: '100', suffix: '%' },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950 border-y border-zinc-900 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`grid grid-cols-2 lg:grid-cols-4 gap-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center space-y-3"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tighter">
                {stat.value}
                <span className="text-2xl sm:text-3xl font-bold text-zinc-600">{stat.suffix}</span>
              </div>
              <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.4em]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsBar
