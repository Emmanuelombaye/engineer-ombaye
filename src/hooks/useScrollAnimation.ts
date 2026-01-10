import { useEffect, useRef, useState } from 'react'

/**
 * Hook for scroll-triggered animations
 * Adds fade-in-up animation when element enters viewport
 */
export function useScrollAnimation(options?: IntersectionObserverInit) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Optionally disconnect after first trigger
          // observer.disconnect()
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
        ...options,
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [options])

  return { ref, isVisible }
}
