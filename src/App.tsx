import { lazy, Suspense } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import { ThemeProvider } from './contexts/ThemeContext'
import { SEOProvider } from './components/SEOHead/SEOHead'
import SEOHead from './components/SEOHead/SEOHead'
import ScrollProgress from './components/ScrollProgress/ScrollProgress'

// Lazy load below-fold components for performance
const Experience = lazy(() => import('./components/Experience/Experience'))
const Projects = lazy(() => import('./components/Projects/Projects'))
const Skills = lazy(() => import('./components/Skills/Skills'))
const Contact = lazy(() => import('./components/Contact/Contact'))
const Footer = lazy(() => import('./components/Footer/Footer'))

// Loading fallback component
function LoadingFallback() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="w-8 h-8 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

/**
 * Main App Component
 * Syab-inspired Portfolio for Emmanuel Ombaye Okari
 */
function App() {
  return (
    <SEOProvider>
      <ThemeProvider>
        <SEOHead />
        <ScrollProgress />

        <div className="min-h-screen bg-zinc-950 text-white selection:bg-cyan-500/10 selection:text-cyan-400 transition-colors duration-300">
          <Header />

          <main className="relative z-10">
            {/* Above the fold - loaded immediately */}
            <Hero />
            <About />

            {/* Below the fold - lazy loaded */}
            <Suspense fallback={<LoadingFallback />}>
              <Experience />
              <Projects />
              <Skills />
              <Contact />
              <Footer />
            </Suspense>
          </main>
        </div>
      </ThemeProvider>
    </SEOProvider>
  )
}

export default App

