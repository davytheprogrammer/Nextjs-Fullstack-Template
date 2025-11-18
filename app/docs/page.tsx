import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Code2, Database, FileText, Zap } from 'lucide-react'

export default function DocsPage() {
  const sections = [
    {
      icon: Database,
      title: 'Database Setup',
      description: 'Configure your database connection',
      items: [
        'Install dependencies for your database (neon, @libsql/client, etc)',
        'Set DATABASE_URL environment variable',
        'Run migration scripts in /scripts folder',
        'Database abstraction layer automatically detects your DB type',
      ],
    },
    {
      icon: Code2,
      title: 'API Routes',
      description: 'Build RESTful APIs with Next.js',
      items: [
        'Create files in app/api/* directory',
        'Use query and mutate helpers from lib/db.ts',
        'Handle errors with try-catch blocks',
        'Return JSON responses with appropriate status codes',
      ],
    },
    {
      icon: Zap,
      title: 'Features',
      description: 'Template includes',
      items: [
        'Database abstraction layer (works with any SQL DB)',
        'Example CRUD API routes for items',
        'Client-side form handling with React hooks',
        'Reusable UI components (Button, Input, Card)',
        'Modern design system with Tailwind CSS',
      ],
    },
    {
      icon: FileText,
      title: 'File Structure',
      description: 'Recommended organization',
      items: [
        'app/* - Pages and layouts',
        'app/api/* - API routes',
        'components/* - React components',
        'lib/* - Utilities and helpers',
        'scripts/* - Database migrations',
      ],
    },
  ]

  return (
    <div className="p-6 md:p-8 max-w-7xl">
      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-2">Documentation</h1>
        <p className="text-neutral-400">Learn how to use this template to build your full-stack application.</p>
      </div>

      <div className="space-y-8">
        {sections.map((section, i) => {
          const Icon = section.icon
          return (
            <Card key={i}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Icon className="w-6 h-6 text-primary" />
                  <div>
                    <CardTitle>{section.title}</CardTitle>
                    <p className="text-sm text-neutral-400 mt-1">{section.description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex gap-3 text-sm">
                      <span className="text-primary font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Card className="mt-8 bg-primary/5 border-primary/20">
        <CardContent className="pt-6">
          <h3 className="font-semibold mb-2">Getting Started Checklist</h3>
          <div className="space-y-2 text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded" />
              <span>Set up your database connection</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded" />
              <span>Create tables in your database</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded" />
              <span>Test API endpoints</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded" />
              <span>Customize components for your needs</span>
            </label>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
