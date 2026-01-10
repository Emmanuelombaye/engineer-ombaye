import { useState, useEffect } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

/**
 * Animated Banner Component
 * Professional rotating banner with smooth transitions
 */
function AnimatedBanner() {
  const banners = [
    {
      id: 1,
      title: 'Full-Stack Development',
      subtitle: 'Scalable web applications',
      description: 'End-to-end solutions from concept to deployment',
      gradient: 'from-electric-600 via-teal-600 to-emerald-600',
    },
    {
      id: 2,
      title: 'AI & Machine Learning',
      subtitle: 'Intelligent solutions',
      description: 'Custom AI models and ML-powered applications',
      gradient: 'from-purple-600 via-pink-600 to-rose-600',
    },
    {
      id: 3,
      title: 'Cloud & DevOps',
      subtitle: 'Scalable infrastructure',
      description: 'AWS, Azure, and modern deployment pipelines',
      gradient: 'from-cyan-600 via-blue-600 to-indigo-600',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [banners.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % banners.length)
  }

  return (
    <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl mb-16 group">
      {/* Banner Slides */}
      <div className="relative h-full">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${banner.gradient} ${
                index === currentIndex ? 'animate-scale-in' : ''
              }`}
            >
              <div className="absolute inset-0 bg-black/20" />
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: '40px 40px',
                }} />
              </div>
            </div>
            
            {/* Content */}
            <div
              className={`relative z-10 h-full flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 ${
                index === currentIndex ? 'animate-fade-in-up' : ''
              }`}
            >
              <div className="max-w-4xl space-y-6">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white drop-shadow-lg">
                  {banner.title}
                </h2>
                <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 font-semibold">
                  {banner.subtitle}
                </p>
                <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
                  {banner.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
        aria-label="Previous slide"
      >
        <FaArrowLeft size={20} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
        aria-label="Next slide"
      >
        <FaArrowRight size={20} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-8 bg-white'
                : 'w-2 bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default AnimatedBanner
