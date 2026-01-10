import { Helmet, HelmetProvider } from 'react-helmet-async'
import { personalInfo } from '../../data/personalInfo'

interface SEOHeadProps {
    title?: string
    description?: string
    keywords?: string
    ogImage?: string
    ogType?: string
}

/**
 * SEO Head Component
 * Manages meta tags, Open Graph, Twitter Cards, and structured data
 */
function SEOHead({
    title = `${personalInfo.name} | Senior Software Engineer`,
    description = personalInfo.valueProposition,
    keywords = 'Senior Software Engineer, Full-Stack Developer, System Architect, React, Node.js, TypeScript, AI/ML, Cloud, DevOps',
    ogImage = '/og-image.png',
    ogType = 'website',
}: SEOHeadProps) {
    const siteUrl = typeof window !== 'undefined' ? window.location.origin : ''
    const fullTitle = title.includes(personalInfo.name) ? title : `${title} | ${personalInfo.name}`

    // Structured data for rich snippets
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: personalInfo.name,
        jobTitle: 'Senior Software Engineer',
        description: personalInfo.valueProposition,
        url: siteUrl,
        sameAs: [
            personalInfo.github,
            personalInfo.linkedin || '',
        ].filter(Boolean),
        email: personalInfo.email,
    }

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={personalInfo.name} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={siteUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={`${siteUrl}${ogImage}`} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={siteUrl} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={`${siteUrl}${ogImage}`} />

            {/* Canonical URL */}
            <link rel="canonical" href={siteUrl} />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
        </Helmet>
    )
}

// Export with Provider wrapper
export function SEOProvider({ children }: { children: React.ReactNode }) {
    return <HelmetProvider>{children}</HelmetProvider>
}

export default SEOHead
