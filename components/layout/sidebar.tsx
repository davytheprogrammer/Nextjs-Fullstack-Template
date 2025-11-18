'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { BarChart3, FileText, Settings, Code2, Database } from 'lucide-react'

const sidebarLinks = [
  { href: '/dashboard', label: 'Dashboard', icon: BarChart3 },
  { href: '/items', label: 'Items', icon: FileText },
  { href: '/api-test', label: 'API Testing', icon: Code2 },
  { href: '/database', label: 'Database', icon: Database },
  { href: '/settings', label: 'Settings', icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden md:flex w-64 bg-neutral-800/50 border-r border-neutral-600/20 flex-col">
      <nav className="flex-1 p-4 space-y-2">
        {sidebarLinks.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
              pathname.startsWith(href)
                ? 'bg-primary/20 text-primary border border-primary/30'
                : 'text-neutral-400 hover:bg-neutral-700 hover:text-foreground'
            }`}
          >
            <Icon className="w-5 h-5" />
            <span>{label}</span>
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-neutral-600/20">
        <p className="text-xs text-neutral-500 font-mono">v1.0.0</p>
      </div>
    </aside>
  )
}
