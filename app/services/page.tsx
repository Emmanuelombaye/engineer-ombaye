import { Section } from "@/components/Section";

const services = [
  {
    title: "Web App Development",
    description: "Building scaleable, fast, and secure web applications using Next.js and typical modern stacks.",
    price: "Starts at $5k",
    features: ["Custom UI/UX", "Database Integration", "API Development", "Performance Optimization"]
  },
  {
    title: "Marketing Websites",
    description: "High conversion landing pages and corporate sites with stunning animations.",
    price: "Starts at $2k",
    features: ["SEO Optimization", "CMS Integration", "Responsive Design", "Analytics Setup"]
  },
  {
    title: "UI/UX Design",
    description: "Wireframing, prototyping, and creating premium visual identities for apps.",
    price: "Starts at $3k",
    features: ["Figma Prototypes", "Design Systems", "User Testing", "Brand Integration"]
  }
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <Section>
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-muted">Comprehensive digital solutions to scale your business and elevate your brand presence.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="glass rounded-3xl p-8 flex flex-col h-full hover:border-primary/50 transition-all group">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-muted mb-6 flex-1">{service.description}</p>
              
              <div className="mb-8">
                <span className="text-lg font-semibold text-foreground tracking-tight">{service.price}</span>
              </div>
              
              <ul className="space-y-3 pt-6 border-t border-border/50">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-sm text-foreground/80">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
