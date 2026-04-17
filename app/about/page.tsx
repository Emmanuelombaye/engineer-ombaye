import { Section } from "@/components/Section";

export default function AboutPage() {
  return (
    <div className="pt-20">
      <Section className="bg-surface/30">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Nexus</h1>
          <p className="text-xl text-muted">We are an independent digital agency obsessed with creating the perfect balance between design and code.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Our Philosophy</h2>
            <p className="text-muted leading-relaxed">
              At Nexus, we believe that great design is invisible. Our goal is to craft digital experiences that feel so natural, they require zero explanation. 
              We work with founders, agencies, and enterprise teams to bring visionary ideas to life.
            </p>
            <p className="text-muted leading-relaxed">
              Based at the intersection of creativity and technology, we leverage tools like React, Next.js, and Framer Motion to build fast, SEO-friendly, and accessible platforms.
            </p>
          </div>
          <div className="relative aspect-square md:aspect-video rounded-3xl overflow-hidden glass flex items-center justify-center border-primary/20">
            <span className="text-primary opacity-50 font-mono text-xl">&lt;Code Meets Art /&gt;</span>
          </div>
        </div>
      </Section>
    </div>
  );
}
