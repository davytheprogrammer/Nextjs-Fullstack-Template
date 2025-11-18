# 🚀 Next.js Full-Stack Template

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC)](https://tailwindcss.com/)

**The ultimate production-ready, database-agnostic full-stack starter template for modern web applications.** Built with Next.js 15, TypeScript, Tailwind CSS, and designed to work seamlessly with any SQL database including Turso, Neon, PlanetScale, and SQLite.

Perfect for developers who want to ship fast without compromising on code quality, performance, or scalability.

## ✨ Why Choose This Template?

- **🏃‍♂️ Ship Faster**: Pre-configured with everything you need to start building immediately
- **🗄️ Database Freedom**: Works with any SQL database - switch providers without code changes  
- **🎨 Beautiful by Default**: Modern UI components with glass morphism and dark mode
- **🛡️ Production Ready**: Security best practices, error handling, and performance optimizations
- **📱 Responsive**: Mobile-first design that looks great on all devices
- **⚡ Developer Experience**: Hot reload, TypeScript, ESLint, and excellent DX

## 🎯 Features

### Core Features
- **🗄️ Database Agnostic** - Seamlessly works with Turso, Neon, PlanetScale, SQLite, PostgreSQL, MySQL
- **🔄 Full-Stack Ready** - Complete API routes, server actions, and middleware setup
- **🎨 Modern UI System** - Beautiful components with Tailwind CSS and custom design system
- **🛡️ Production Ready** - Comprehensive error handling, logging, and security best practices
- **📦 Well-Organized** - Clean architecture with clear separation of concerns
- **⚡ Optimized Performance** - Built-in performance optimizations and best practices

### Developer Experience
- **🔧 TypeScript First** - Full type safety across the entire stack
- **🎨 Tailwind CSS** - Utility-first CSS framework with custom design tokens
- **🌙 Dark Mode** - Built-in theme switching with next-themes
- **📱 Responsive Design** - Mobile-first approach with responsive components
- **🔥 Hot Reload** - Instant feedback during development
- **📝 ESLint & Prettier** - Code quality and formatting tools pre-configured

### UI Components
- **🎛️ Radix UI** - Accessible, unstyled UI primitives
- **✨ Glass Morphism** - Modern glass effect design system
- **🎭 Animations** - Smooth transitions and micro-interactions
- **📊 Charts & Graphs** - Built-in data visualization components
- **🔔 Toast Notifications** - User feedback system
- **📋 Forms** - Validated forms with react-hook-form and Zod

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### 1. Clone & Install

```bash
# Clone the repository
git clone https://github.com/your-username/nextjs-fullstack-template.git
cd nextjs-fullstack-template

# Install dependencies
npm install
# or
yarn install
# or  
pnpm install
```

### 2. Environment Setup

```bash
# Copy environment template
cp .env.example .env.local

# Edit .env.local with your database URL
DATABASE_URL=your_database_url_here
```

**Supported Database URLs:**
```bash
# Turso (Recommended for edge applications)
DATABASE_URL=libsql://[database].turso.io?authToken=[token]

# Neon (PostgreSQL, great for production)
DATABASE_URL=postgresql://user:password@host.neon.tech/db

# PlanetScale (MySQL, excellent scaling)
DATABASE_URL=mysql://user:password@host.pscale.io/db

# Local SQLite (perfect for development)
DATABASE_URL=file:./dev.db
```

### 3. Database Setup

```bash
# Run the included database migrations
# Execute the SQL files in scripts/ directory on your database

# For SQLite (local development):
sqlite3 dev.db < scripts/init.sql
sqlite3 dev.db < scripts/init_auth.sql
```

### 4. Start Development

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

🎉 **That's it!** Visit [http://localhost:3000](http://localhost:3000) to see your application running.

## 📁 Project Structure

```
nextjs-fullstack-template/
├── 📁 app/                    # Next.js 13+ App Router
│   ├── 📁 api/               # API routes and endpoints
│   │   ├── 📁 auth/          # Authentication endpoints
│   │   └── 📁 items/         # CRUD example endpoints
│   ├── 📁 auth/              # Authentication pages
│   ├── 📁 dashboard/         # Protected dashboard
│   ├── 📁 items/             # Items management example
│   ├── layout.tsx            # Root layout with providers
│   └── page.tsx              # Landing page
├── 📁 components/            # Reusable UI components
│   ├── 📁 layout/            # Layout-specific components
│   │   ├── navbar.tsx        # Navigation bar
│   │   └── sidebar.tsx       # Sidebar navigation
│   ├── 📁 ui/                # Base UI components
│   │   ├── button.tsx        # Button component
│   │   ├── card.tsx          # Card component
│   │   └── input.tsx         # Input component
│   └── theme-provider.tsx    # Theme context provider
├── 📁 lib/                   # Utility libraries
│   ├── auth.ts               # Authentication helpers
│   ├── db.ts                 # Database query helpers
│   ├── sql-client.ts         # Database client setup
│   └── utils.ts              # General utilities
├── 📁 public/                # Static assets
├── 📁 scripts/               # Database scripts
│   ├── init.sql              # Initial database schema
│   └── init_auth.sql         # Authentication tables
├── 📁 styles/                # Global styles
└── 📄 Configuration files    # Next.js, TypeScript, Tailwind configs
```

## 🛠️ Usage Guide

### Database Operations

The template provides simple, type-safe database helpers that work with any SQL database:

#### Querying Data (SELECT)

```typescript
import { query, queryOne } from '@/lib/db'

// Get multiple rows
const items = await query`
  SELECT * FROM items 
  WHERE active = true 
  ORDER BY created_at DESC
`

// Get single row with type safety
const item = await queryOne`
  SELECT * FROM items 
  WHERE id = ${itemId}
`
```

#### Mutating Data (INSERT, UPDATE, DELETE)

```typescript
import { mutate } from '@/lib/db'

// Insert new record
const result = await mutate`
  INSERT INTO items (title, description, user_id)
  VALUES (${title}, ${description}, ${userId})
`

// Update existing record
await mutate`
  UPDATE items 
  SET title = ${newTitle}, updated_at = CURRENT_TIMESTAMP
  WHERE id = ${itemId}
`

// Delete record
await mutate`
  DELETE FROM items 
  WHERE id = ${itemId} AND user_id = ${userId}
`
```

### API Routes

Create robust API endpoints in the `app/api/` directory:

```typescript
// app/api/items/route.ts
import { query } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = searchParams.get('limit') || '10'
    
    const items = await query`
      SELECT * FROM items 
      ORDER BY created_at DESC 
      LIMIT ${parseInt(limit)}
    `
    
    return NextResponse.json({ 
      success: true, 
      data: items 
    })
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch items' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, description } = body
    
    const result = await mutate`
      INSERT INTO items (title, description)
      VALUES (${title}, ${description})
    `
    
    return NextResponse.json({ 
      success: true, 
      data: result 
    }, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to create item' },
      { status: 500 }
    )
  }
}
```

### UI Components

The template includes a comprehensive set of pre-built, accessible components:

```typescript
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export default function ExamplePage() {
  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Beautiful Components</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input placeholder="Enter your email" type="email" />
        <Button className="w-full">
          Get Started
        </Button>
      </CardContent>
    </Card>
  )
}
```

**Available Components:**
- `Button` - Multiple variants (default, destructive, outline, secondary, ghost, link)
- `Card` - Container with header, content, and footer sections
- `Input` - Styled form inputs with validation states
- `Navbar` - Responsive navigation with mobile menu
- `Sidebar` - Collapsible sidebar navigation
- And many more Radix UI components pre-configured

## 🚀 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/nextjs-fullstack-template)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard
# Add your DATABASE_URL and other environment variables
```

### Deploy to Netlify

```bash
# Build the project
npm run build

# Deploy to Netlify
# Upload the .next folder to Netlify
```

### Deploy to Railway

```bash
# Connect your GitHub repository to Railway
# Set environment variables in Railway dashboard
# Railway will automatically deploy on git push
```

### Environment Variables for Production

Make sure to set these environment variables in your deployment platform:

```bash
DATABASE_URL=your_production_database_url
NEXT_PUBLIC_APP_URL=https://your-domain.com
NEXT_PUBLIC_API_URL=https://your-domain.com/api
```

## 🎨 Customization

### Theming

The template uses a sophisticated theming system with CSS variables:

```css
/* styles/globals.css */
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  /* ... more theme variables */
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* ... dark theme variables */
}
```

### Adding New Database Providers

The template is designed to work with any SQL database. To add a new provider:

1. Install the database client:
```bash
npm install your-database-client
```

2. Update `lib/sql-client.ts`:
```typescript
// Add your database client configuration
import { YourDatabaseClient } from 'your-database-client'

export const client = new YourDatabaseClient(process.env.DATABASE_URL)
```

3. The query helpers in `lib/db.ts` will work automatically!

### Custom Components

Create new components following the established patterns:

```typescript
// components/ui/your-component.tsx
import { cn } from '@/lib/utils'
import { forwardRef } from 'react'

interface YourComponentProps {
  className?: string
  // ... other props
}

const YourComponent = forwardRef<HTMLDivElement, YourComponentProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("your-base-styles", className)}
        {...props}
      />
    )
  }
)

YourComponent.displayName = "YourComponent"

export { YourComponent }
```

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style and patterns
- Add TypeScript types for all new code
- Test your changes thoroughly
- Update documentation as needed
- Keep commits focused and descriptive

## 📚 Learn More

### Next.js Resources
- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - Interactive Next.js tutorial

### Database Resources
- [Turso Documentation](https://docs.turso.tech/) - Edge SQLite database
- [Neon Documentation](https://neon.tech/docs) - Serverless PostgreSQL
- [PlanetScale Documentation](https://planetscale.com/docs) - Serverless MySQL

### UI Resources
- [Tailwind CSS](https://tailwindcss.com/docs) - Utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) - Accessible component primitives
- [Lucide Icons](https://lucide.dev/) - Beautiful & consistent icons

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) for accessible component primitives
- [Vercel](https://vercel.com/) for the deployment platform
- All the amazing open-source contributors who made this possible

---

<div align="center">

**[⭐ Star this repository](https://github.com/your-username/nextjs-fullstack-template)** if you found it helpful!

Made with ❤️ by developers, for developers.

</div>
