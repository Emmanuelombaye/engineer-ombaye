import { FaCode, FaRobot, FaCog, FaWordpress, FaServer, FaCloud } from 'react-icons/fa'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

/**
 * Services Section Component
 * Professional services display with refined cards
 */
function Services() {
  const { ref, isVisible } = useScrollAnimation()

  const services = [
    {
      title: 'Full-Stack Web Development',
      description: 'Complete web applications from frontend to backend, including databases, APIs, and deployment.',
      icon: FaCode,
      color: 'electric',
    },
    {
      title: 'AI & Machine Learning Solutions',
      description: 'Custom AI models, chatbots, recommendation systems, and ML-powered applications.',
      icon: FaRobot,
      color: 'emerald',
    },
    {
      title: 'Automation & Bots',
      description: 'Business process automation, web scraping, API automation, and custom bots.',
      icon: FaCog,
      color: 'teal',
    },
    {
      title: 'WordPress Development',
      description: 'Custom themes, plugins, WooCommerce stores, and WordPress optimization.',
      icon: FaWordpress,
      color: 'electric',
    },
    {
      title: 'API Development',
      description: 'RESTful and GraphQL APIs, microservices, and backend architecture design.',
      icon: FaServer,
      color: 'teal',
    },
    {
      title: 'Cloud Deployment & Optimization',
      description: 'AWS, Azure deployment, CI/CD pipelines, and infrastructure optimization.',
      icon: FaCloud,
      color: 'emerald',
    },
  ]

  const getColorClasses = (color: string) => {
    const colors: Record<string, string> = {
      electric: 'text-electric-600 dark:text-electric-400 bg-electric-100 dark:bg-electric-900/30',
      emerald: 'text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/30',
      teal: 'text-teal-600 dark:text-teal-400 bg-teal-100 dark:bg-teal-900/30',
    }
    return colors[color] || colors.electric
  }

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8" style={{
      background: 'linear-gradient(to bottom right, rgb(255 255 255), rgb(239 246 255 / 0.4), rgb(238 242 255 / 0.3))',
    }}>
      <div className="container mx-auto max-w-7xl">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 space-y-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-charcoal-950 dark:text-slate-50 tracking-tight">
            Services
          </h2>
          <p className="text-xl text-charcoal-600 dark:text-slate-400 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className="group bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-charcoal-100 dark:border-slate-700 hover:border-electric-300 dark:hover:border-electric-700"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className={`inline-flex p-4 rounded-xl mb-6 ${getColorClasses(service.color)}`}>
                  <IconComponent className="text-4xl" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-charcoal-950 dark:text-slate-50 group-hover:text-electric-600 dark:group-hover:text-electric-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-charcoal-600 dark:text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
