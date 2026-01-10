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
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-electric-600 via-teal-600 to-emerald-600 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`grid grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center space-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                {stat.value}
                <span className="text-2xl sm:text-3xl">{stat.suffix}</span>
              </div>
              <div className="text-white/90 text-sm sm:text-base font-medium">
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
