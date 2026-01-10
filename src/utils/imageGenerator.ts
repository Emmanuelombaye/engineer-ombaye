/**
 * Image Generator Utility
 * Generates beautiful gradient-based images for projects and cards
 */

export interface ImageOptions {
  seed?: string
  width?: number
  height?: number
  gradient?: string[]
}

/**
 * Generate a gradient color palette based on project name
 */
export function generateGradientFromName(name: string): string[] {
  const gradients = [
    ['#3b82f6', '#06b6d4', '#10b981'], // Electric to Teal to Emerald
    ['#8b5cf6', '#ec4899', '#f43f5e'], // Purple to Pink to Rose
    ['#06b6d4', '#3b82f6', '#6366f1'], // Cyan to Blue to Indigo
    ['#f59e0b', '#ef4444', '#ec4899'], // Amber to Red to Pink
    ['#10b981', '#14b8a6', '#06b6d4'], // Emerald to Teal to Cyan
    ['#6366f1', '#8b5cf6', '#a855f7'], // Indigo to Purple to Violet
    ['#ec4899', '#f43f5e', '#ef4444'], // Pink to Rose to Red
    ['#3b82f6', '#2563eb', '#1d4ed8'], // Blue shades
  ]

  // Use project name to deterministically select gradient
  const hash = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
  return gradients[hash % gradients.length]
}

/**
 * Generate SVG gradient image
 */
export function generateGradientImage(
  name: string,
  width = 800,
  height = 600
): string {
  const gradient = generateGradientFromName(name)
  const [color1, color2, color3] = gradient

  return `data:image/svg+xml,${encodeURIComponent(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
          <stop offset="50%" style="stop-color:${color2};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${color3};stop-opacity:1" />
        </linearGradient>
        <pattern id="pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="20" cy="20" r="1" fill="white" opacity="0.1"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad)"/>
      <rect width="100%" height="100%" fill="url(#pattern)"/>
      <text x="50%" y="50%" font-family="Inter, sans-serif" font-size="120" font-weight="bold" 
            fill="white" opacity="0.2" text-anchor="middle" dominant-baseline="middle">
        ${name.charAt(0).toUpperCase()}
      </text>
    </svg>
  `)}`
}

/**
 * Get gradient classes for Tailwind
 */
export function getGradientClasses(name: string): string {
  const gradients: Record<number, string> = {
    0: 'from-electric-600 via-teal-600 to-emerald-600',
    1: 'from-purple-600 via-pink-600 to-rose-600',
    2: 'from-cyan-600 via-blue-600 to-indigo-600',
    3: 'from-amber-500 via-red-500 to-pink-500',
    4: 'from-emerald-500 via-teal-500 to-cyan-500',
    5: 'from-indigo-600 via-purple-600 to-violet-600',
    6: 'from-pink-500 via-rose-500 to-red-500',
    7: 'from-blue-600 via-blue-700 to-blue-800',
  }

  const hash = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
  return gradients[hash % 8] || gradients[0]
}
