import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Code2, Palette, FileText, Zap } from 'lucide-react'

export default function DocsPage() {
  const sections = [
    {
      icon: Code2,
      title: 'TypeScript Setup',
      description: 'Full type safety out of the box',
      items: [
        'Pre-configured TypeScript with strict mode',
        'Type definitions for all components',
        'ESLint and Prettier configured',
        'Hot reload with type checking',
      ],
    },
    {
      icon: Palette,
      title: 'Styling System',
      description: 'Modern CSS with Tailwind',
      items: [
        'Tailwind CSS 4 with custom design tokens',
        'Dark mode support with next-themes',
        'Custom utility classes for glass effects',
        'Responsive design patterns',
      ],
    },
    {
      icon: Zap,
      title: 'UI Components',
      description: 'Pre-built accessible components',
      items: [
        'Radix UI primitives for accessibility',
        'Custom styled components with variants',
        'Form components with validation',
        'Navigation and layout components',
      ],
    },
    {
      icon: FileText,
      title: 'File Structure',
      description: 'Clean and organized',
      items: [
        'app/* - Pages and layouts (App Router)',
        'components/* - Reusable UI components',
        'components/ui/* - Base UI components',
        'components/layout/* - Layout components',
      ],
    },
  ]

  return (
    <div className="p-6 md:p-8 max-w-7xl">
      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-2">Documentation</h1>
        <p className="text-neutral-400">Learn how to use this simple Next.js template to build beautiful applications.</p>
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
              <span>Customize the theme colors</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded" />
              <span>Add your own components</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded" />
              <span>Update the navigation</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded" />
              <span>Deploy to your platform</span>
            </label>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
