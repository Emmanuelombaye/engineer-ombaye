import { Section } from "@/components/Section";

const projects = [
  { id: 1, title: "FinTech Dashboard", category: "Web App", image: "finance" },
  { id: 2, title: "Moda E-Commerce", category: "Retail", image: "store" },
  { id: 3, title: "Alpha SaaS", category: "Platform", image: "saas" },
  { id: 4, title: "Echo Crypto", category: "Web3", image: "crypto" },
  { id: 5, title: "Zenith Real Estate", category: "Corporate", image: "realestate" },
  { id: 6, title: "Lumina AI", category: "Landing Page", image: "ai" },
];

export default function PortfolioPage() {
  return (
    <div className="pt-20">
      <Section>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Featured Work</h1>
            <p className="text-xl text-muted">A selection of premium projects we&apos;ve shipped for clients worldwide.</p>
          </div>
          <div className="flex gap-2">
            {/* Filter tags placeholder */}
            <span className="px-4 py-2 rounded-full border border-primary text-primary text-sm font-medium">All</span>
            <span className="px-4 py-2 rounded-full border border-border text-muted text-sm font-medium hover:text-foreground">Apps</span>
            <span className="px-4 py-2 rounded-full border border-border text-muted text-sm font-medium hover:text-foreground">Websites</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-surface border border-border">
              {/* Image Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-surface to-border transition-transform duration-500 group-hover:scale-105 flex items-center justify-center opacity-30">
                <span className="font-mono text-muted text-xs uppercase tracking-widest">{project.image}.jpg</span>
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-primary font-medium mb-1 text-sm">{project.category}</p>
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
