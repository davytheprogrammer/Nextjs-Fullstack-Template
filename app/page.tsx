import { Button } from '@/components/ui/button'
import { ArrowRight, Github, Twitter } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/95">
      {/* Navigation */}
      <nav className="border-b border-border/40 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-bold text-xl">logo.</div>
          <div className="flex gap-6 items-center">
            <a href="#features" className="text-sm text-foreground/70 hover:text-foreground transition">Features</a>
            <a href="#about" className="text-sm text-foreground/70 hover:text-foreground transition">About</a>
            <Button variant="default" size="sm">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 py-20 md:py-32">
        <div className="space-y-8 text-center">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-balance">
              Build something amazing
            </h1>
            <p className="text-xl text-foreground/60 text-balance max-w-2xl mx-auto leading-relaxed">
              A minimalist template to kickstart your next project. Clean, simple, and ready to customize.
            </p>
          </div>
          
          <div className="flex gap-4 justify-center pt-4">
            <Button size="lg" className="gap-2">
              Get Started <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-5xl mx-auto px-6 py-20">
        <div className="space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">Simple & Minimal</h2>
            <p className="text-foreground/60">Everything you need to get started</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Fast', desc: 'Built with Next.js for optimal performance' },
              { title: 'Clean', desc: 'Minimalist design that just works' },
              { title: 'Ready', desc: 'Fully configured and ready to deploy' },
            ].map((feature) => (
              <div key={feature.title} className="border border-border/40 rounded-lg p-6 hover:border-border/80 transition">
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-foreground/60">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="border border-border/40 rounded-lg p-12 text-center space-y-6 bg-background/50">
          <h2 className="text-3xl font-bold">Ready to build?</h2>
          <p className="text-foreground/60 max-w-xl mx-auto">
            Start customizing this template with your own content and design. It&apos;s all yours now.
          </p>
          <Button size="lg">Start Building</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 mt-20">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="flex items-center justify-between mb-8">
            <div className="font-bold">logo.</div>
            <div className="flex gap-4">
              <a href="#" className="text-foreground/60 hover:text-foreground transition">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-foreground transition">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          <p className="text-sm text-foreground/40">© 2024. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
