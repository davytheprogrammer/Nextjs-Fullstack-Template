'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="glass-effect border-b border-neutral-600/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl gradient-text">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-mono text-sm">
            DS
          </div>
          DevStack
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link 
            href="/docs" 
            className={`text-sm transition-colors ${
              pathname.startsWith('/docs') 
                ? 'text-primary font-semibold' 
                : 'text-neutral-400 hover:text-foreground'
            }`}
          >
            Docs
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Button size="sm">Get Started</Button>
          <button 
            className="md:hidden p-2 hover:bg-neutral-700 rounded-lg transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </nav>
  )
}
