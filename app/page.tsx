import Link from "next/link";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Section className="relative overflow-hidden pt-32 pb-40 lg:pt-48 lg:pb-56 min-h-[90vh] flex items-center">
        {/* Glow effect background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-50 pointer-events-none" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface/50 backdrop-blur-sm text-sm font-medium text-muted tracking-wide mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Premium Digital Solutions
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            We build digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">masterpieces</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted mb-12 max-w-2xl mx-auto leading-relaxed">
            Elevate your brand with a state-of-the-art web presence. We specialize in high-performance, aesthetically stunning Next.js and React applications.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild className="w-full sm:w-auto">
              <Link href="/portfolio">View Our Work</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
              <Link href="/contact">Start a Project</Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Services Preview */}
      <Section className="bg-surface/50 border-t border-border">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expertise</h2>
          <p className="text-muted max-w-2xl mx-auto">Discover how we can help your business grow with cutting-edge technology and design.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Web Development",
              desc: "Fast, SEO-optimized, and totally responsive websites built with modern frameworks like Next.js.",
              icon: "💻"
            },
            {
              title: "UI/UX Design",
              desc: "Sleek, dark-mode ready interfaces with intuitive navigation and micro-animations.",
              icon: "✨"
            },
            {
              title: "E-Commerce",
              desc: "Highly converting online stores featuring the latest in payment tech and inventory management.",
              icon: "🛍️"
            }
          ].map((service, i) => (
            <div key={i} className="glass p-8 rounded-2xl hover:border-primary/50 transition-colors group">
              <div className="w-14 h-14 rounded-xl bg-surface border border-border flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="glass rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to transform your digital presence?</h2>
            <p className="text-xl text-muted mb-10">Let&apos;s discuss how we can bring your vision to life.</p>
            <Button size="lg" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
