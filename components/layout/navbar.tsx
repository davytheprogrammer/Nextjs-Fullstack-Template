'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { LogOut, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'

interface User {
  id: string
  email: string
  name: string
}

export function Navbar() {
  const pathname = usePathname()
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch('/api/auth/me')
        if (res.ok) {
          const userData = await res.json()
          setUser(userData)
        }
      } catch (error) {
        console.error('Failed to fetch user:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchUser()
  }, [])

  async function handleLogout() {
    await fetch('/api/auth/logout', { method: 'POST' })
    setUser(null)
    router.push('/auth/login')
  }

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
          {user && (
            <>
              <Link 
                href="/dashboard" 
                className={`text-sm transition-colors ${
                  pathname.startsWith('/dashboard') 
                    ? 'text-primary font-semibold' 
                    : 'text-neutral-400 hover:text-foreground'
                }`}
              >
                Dashboard
              </Link>
              <Link 
                href="/items" 
                className={`text-sm transition-colors ${
                  pathname.startsWith('/items') 
                    ? 'text-primary font-semibold' 
                    : 'text-neutral-400 hover:text-foreground'
                }`}
              >
                Items
              </Link>
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
            </>
          )}
        </div>

        <div className="flex items-center gap-2">
          {!loading && user ? (
            <>
              <span className="hidden sm:inline text-sm text-neutral-400">{user.name}</span>
              <Button 
                variant="outline" 
                size="sm" 
                className="gap-2 hidden sm:flex"
                onClick={handleLogout}
              >
                <LogOut className="w-4 h-4" />
                Logout
              </Button>
            </>
          ) : !loading && !user ? (
            <>
              <Button variant="ghost" size="sm" asChild className="hidden sm:flex">
                <Link href="/auth/login">Login</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/auth/register">Sign Up</Link>
              </Button>
            </>
          ) : null}
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
