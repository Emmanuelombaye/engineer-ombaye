import { motion, useScroll, useSpring } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'

/**
 * Scroll Progress Indicator
 * Premium reading progress bar at top of viewport
 */
function ScrollProgress() {
    const { scrollYProgress } = useScroll()
    const prefersReducedMotion = useReducedMotion()

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })

    if (prefersReducedMotion) {
        return null
    }

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-electric-500 to-emerald-500 origin-left z-50"
            style={{ scaleX }}
        />
    )
}

export default ScrollProgress
