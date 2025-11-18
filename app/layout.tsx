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
    default: 'Next.js Full-Stack Template - Production Ready Starter',
    template: '%s | Next.js Full-Stack Template'
  },
  description: 'The ultimate production-ready, database-agnostic full-stack starter template for modern web applications. Built with Next.js 15, TypeScript, Tailwind CSS, and designed to work seamlessly with any SQL database.',
  keywords: [
    'nextjs',
    'typescript',
    'tailwindcss',
    'fullstack',
    'template',
    'starter',
    'boilerplate',
    'database-agnostic',
    'turso',
    'neon',
    'planetscale',
    'sqlite',
    'postgresql',
    'mysql',
    'production-ready',
    'modern web development'
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
    title: 'Next.js Full-Stack Template - Production Ready Starter',
    description: 'The ultimate production-ready, database-agnostic full-stack starter template for modern web applications.',
    siteName: 'Next.js Full-Stack Template',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Next.js Full-Stack Template',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js Full-Stack Template - Production Ready Starter',
    description: 'The ultimate production-ready, database-agnostic full-stack starter template for modern web applications.',
    images: ['/og-image.png'],
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
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
    ],
    apple: '/apple-icon.png',
  },
  manifest: '/manifest.json',
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
