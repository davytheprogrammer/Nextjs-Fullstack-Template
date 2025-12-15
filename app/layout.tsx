import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/navbar'
import { Sidebar } from '@/components/layout/sidebar'
import { ThemeProvider } from '@/components/theme-provider'

const geist = Geist({ 
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap'
})

const geistMono = Geist_Mono({ 
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap'
})

export const metadata: Metadata = {
  title: {
    default: 'Simple Next.js Template - Clean Starter',
    template: '%s | Simple Next.js Template'
  },
  description: 'A clean, simple Next.js starter template with TypeScript, Tailwind CSS, and beautiful UI components. Perfect for modern web applications.',
  keywords: [
    'nextjs',
    'typescript',
    'tailwindcss',
    'template',
    'starter',
    'boilerplate',
    'modern web development',
    'ui components'
  ],
  authors: [{ name: 'DevStack Template' }],
  creator: 'DevStack Template',
  publisher: 'DevStack Template',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Simple Next.js Template - Clean Starter',
    description: 'A clean, simple Next.js starter template with TypeScript, Tailwind CSS, and beautiful UI components.',
    siteName: 'Simple Next.js Template',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Simple Next.js Template - Clean Starter',
    description: 'A clean, simple Next.js starter template with TypeScript, Tailwind CSS, and beautiful UI components.',
    creator: '@devstack',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} ${geistMono.variable} font-sans bg-background text-foreground antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex flex-1">
              <Sidebar />
              <main className="flex-1 overflow-auto">
                {children}
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
