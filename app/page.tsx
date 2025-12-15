import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Code2, Zap, Palette } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden px-4 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="gradient-text">Simple</span> Next.js Template
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              A clean, modern Next.js template with TypeScript, Tailwind CSS, and beautiful UI components. Start building immediately.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg">Get Started</Button>
              <Button size="lg" variant="outline">Learn More</Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-20">
            {[
              {
                icon: Code2,
                title: 'TypeScript',
                description: 'Full type safety with modern TypeScript',
              },
              {
                icon: Palette,
                title: 'Beautiful UI',
                description: 'Tailwind CSS with custom components',
              },
              {
                icon: Zap,
                title: 'Fast Setup',
                description: 'Ready to use with zero configuration',
              },
            ].map((feature, i) => {
              const Icon = feature.icon
              return (
                <Card key={i} className="text-center">
                  <CardContent className="space-y-3">
                    <Icon className="w-8 h-8 text-primary mx-auto" />
                    <h3 className="font-semibold">{feature.title}</h3>
                    <p className="text-sm text-neutral-400">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
