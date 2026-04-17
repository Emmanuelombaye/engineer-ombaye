import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="font-bold text-xl tracking-tight flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white">N</span>
              Nexus Agency
            </Link>
            <p className="text-muted max-w-md">
              We build premium digital experiences that elevate your brand and drive results. Specially crafted with Next.js, Framer Motion, and Tailwind CSS.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-muted hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-muted hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="text-muted hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link href="/contact" className="text-muted hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted hover:text-primary transition-colors">Twitter</a></li>
              <li><a href="#" className="text-muted hover:text-primary transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-muted hover:text-primary transition-colors">GitHub</a></li>
              <li><a href="#" className="text-muted hover:text-primary transition-colors">Dribbble</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/50 text-center text-sm text-muted">
          <p>&copy; {new Date().getFullYear()} Nexus Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
