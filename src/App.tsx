import { lazy, Suspense } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import StatsBar from './components/StatsBar/StatsBar'
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

        <div className="min-h-screen bg-black text-white selection:bg-blue-500/10 selection:text-blue-400">
          <Header />

          <main className="pt-24 pb-12 px-4">
            <div className="bento-container">
              <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading System...</div>}>
                <Hero />
                <StatsBar />
                <About />
                <Projects />
                <Experience />
                <Skills />
                <Contact />
              </Suspense>
            </div>
          </main>

          <Footer />
        </div>
      </ThemeProvider>
    </SEOProvider>
  )
}

export default App

