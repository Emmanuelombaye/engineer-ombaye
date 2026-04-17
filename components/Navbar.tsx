import Link from 'next/link';
import { Button } from './Button';

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="font-bold text-xl tracking-tight flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white">N</span>
            Nexus Agency
          </Link>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/about" className="text-muted hover:text-foreground transition-colors">About</Link>
            <Link href="/services" className="text-muted hover:text-foreground transition-colors">Services</Link>
            <Link href="/portfolio" className="text-muted hover:text-foreground transition-colors">Portfolio</Link>
            <Link href="/contact" className="text-muted hover:text-foreground transition-colors">Contact</Link>
          </nav>
          
          <div className="hidden md:flex">
            <Button variant="primary" asChild>
              <Link href="/contact">Let&apos;s Talk</Link>
            </Button>
          </div>
          
          {/* Mobile menu button could go here */}
          <button className="md:hidden text-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </button>
        </div>
      </div>
    </header>
  );
}
