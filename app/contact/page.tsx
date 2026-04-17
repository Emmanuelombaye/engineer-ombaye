import { Section } from "@/components/Section";
import { Button } from "@/components/Button";

export default function ContactPage() {
  return (
    <div className="pt-20">
      <Section>
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Let&apos;s start a project</h1>
            <p className="text-xl text-muted mb-12">
              Fill out the form and our team will get back to you within 24 hours to discuss your next big idea.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-primary">📍</div>
                <div>
                  <h4 className="font-medium text-foreground">HQ Location</h4>
                  <p className="text-muted">123 Nexus Street, Tech District, CA</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-primary">✉️</div>
                <div>
                  <h4 className="font-medium text-foreground">Email us</h4>
                  <p className="text-muted">hello@nexusagency.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass rounded-3xl p-8 md:p-10">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">First Name</label>
                  <input type="text" className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Last Name</label>
                  <input type="text" className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email Address</label>
                <input type="email" className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Project Details</label>
                <textarea rows={4} className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none" placeholder="Tell us about your project timeline and budget..." />
              </div>
              <Button size="lg" className="w-full">Submit Inquiry</Button>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
}
