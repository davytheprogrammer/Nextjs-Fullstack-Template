import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Code2, Database, Zap, Lock } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="gradient-text">Production-Ready</span> Full-Stack Template
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              A modern, scalable Next.js template with database abstraction, API routes, authentication, and beautiful UI components. Start building in minutes.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" asChild>
                <Link href="/dashboard">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/docs">Read Docs</Link>
              </Button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-20">
            {[
              {
                icon: Database,
                title: 'DB Agnostic',
                description: 'Works with Turso, Neon, PlanetScale, and any SQL database',
              },
              {
                icon: Code2,
                title: 'Full-Stack',
                description: 'API routes, middleware, and server actions included',
              },
              {
                icon: Zap,
                title: 'Production Ready',
                description: 'Error handling, logging, and best practices built-in',
              },
              {
                icon: Lock,
                title: 'Secure',
                description: 'Authentication patterns and RLS setup included',
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
