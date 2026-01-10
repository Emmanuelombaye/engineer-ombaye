import { useEffect, useState } from 'react'

/**
 * Floating Elements Component
 * Adds subtle floating geometric shapes for visual interest
 */
function FloatingElements() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const shapes = [
    { id: 1, size: 60, top: '10%', left: '5%', delay: 0, duration: 20 },
    { id: 2, size: 80, top: '20%', right: '10%', delay: 5, duration: 25 },
    { id: 3, size: 40, bottom: '15%', left: '8%', delay: 10, duration: 15 },
    { id: 4, size: 100, bottom: '10%', right: '5%', delay: 15, duration: 30 },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 opacity-30 dark:opacity-20">
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className="absolute rounded-full bg-gradient-to-br from-electric-400/20 to-teal-400/20 blur-xl"
          style={{
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            top: shape.top,
            left: shape.left,
            right: (shape as any).right,
            bottom: shape.bottom,
            animation: `float ${shape.duration}s ease-in-out infinite`,
            animationDelay: `${shape.delay}s`,
          }}
        />
      ))}
    </div>
  )
}

export default FloatingElements
