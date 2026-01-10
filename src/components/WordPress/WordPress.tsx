import { FaWordpress, FaShoppingCart, FaLock, FaSearch, FaRocket, FaPlug, FaCode, FaSync } from 'react-icons/fa'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

/**
 * WordPress Services Section
 * Dedicated section for WordPress development services
 */
function WordPress() {
  const { ref, isVisible } = useScrollAnimation()
  const services = [
    {
      title: 'Custom WordPress Themes',
      description: 'Fully custom, responsive WordPress themes tailored to your brand and requirements.',
      icon: <FaCode className="text-4xl text-blue-600 dark:text-blue-400" />,
    },
    {
      title: 'Plugin Development',
      description: 'Custom WordPress plugins to extend functionality and meet specific business needs.',
      icon: <FaPlug className="text-4xl text-orange-600 dark:text-orange-400" />,
    },
    {
      title: 'WooCommerce Stores',
      description: 'Complete e-commerce solutions with WooCommerce, payment gateways, and inventory management.',
      icon: <FaShoppingCart className="text-4xl text-green-600 dark:text-green-400" />,
    },
    {
      title: 'Performance Optimization',
      description: 'Speed optimization, caching, image optimization, and database tuning for faster load times.',
      icon: <FaRocket className="text-4xl text-purple-600 dark:text-purple-400" />,
    },
    {
      title: 'Security Hardening',
      description: 'Security audits, malware removal, firewall configuration, and regular security updates.',
      icon: <FaLock className="text-4xl text-red-600 dark:text-red-400" />,
    },
    {
      title: 'SEO Optimization',
      description: 'On-page SEO, schema markup, meta optimization, and SEO-friendly structure implementation.',
      icon: <FaSearch className="text-4xl text-yellow-600 dark:text-yellow-400" />,
    },
    {
      title: 'Website Migration',
      description: 'Seamless migration from other platforms to WordPress or between hosting providers.',
      icon: <FaSync className="text-4xl text-cyan-600 dark:text-cyan-400" />,
    },
    {
      title: 'Maintenance & Support',
      description: 'Regular updates, backups, monitoring, and ongoing support to keep your site running smoothly.',
      icon: <FaWordpress className="text-4xl text-blue-500 dark:text-blue-400" />,
    },
  ]

  return (
    <section id="wordpress" className="py-24 px-4 sm:px-6 lg:px-8" style={{
      background: 'linear-gradient(to bottom right, rgb(239 246 255 / 0.5), rgb(255 255 255), rgb(238 242 255 / 0.4))',
    }}>
      <div className="container mx-auto max-w-7xl">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 space-y-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <FaWordpress className="text-6xl text-electric-500 dark:text-electric-400 mx-auto mb-4 animate-pulse-slow" />
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-charcoal-950 dark:text-slate-50 tracking-tight">
            WordPress Development
          </h2>
          <p className="text-xl text-charcoal-600 dark:text-slate-400 max-w-2xl mx-auto">
            Professional WordPress solutions for businesses of all sizes
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-electric-600 hover:bg-electric-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Need a WordPress website? Let's build it.
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WordPress
