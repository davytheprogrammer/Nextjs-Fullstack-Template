# DevStack - Full-Stack Next.js Template

A production-ready, database-agnostic full-stack template built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🗄️ **Database Agnostic** - Works with Turso, Neon, PlanetScale, SQLite, and any SQL database
- 🔄 **Full-Stack Ready** - API routes, server actions, and middleware included
- 🎨 **Modern UI** - Beautiful components with Tailwind CSS and custom design system
- 🛡️ **Production Ready** - Error handling, logging, and security best practices
- 📦 **Well-Organized** - Clear file structure and best practices
- ⚡ **Developer Experience** - TypeScript, hot reload, and great DX

## Quick Start

### 1. Setup Database

\`\`\`bash
# Copy .env.example to .env.local
cp .env.example .env.local

# Add your DATABASE_URL
DATABASE_URL=your_database_url_here
\`\`\`

Supported databases:
- **Turso**: `libsql://[database].turso.io?authToken=[token]`
- **Neon**: `postgresql://user:password@host.neon.tech/db`
- **PlanetScale**: `mysql://user:password@host.pscale.io/db`

### 2. Install Dependencies

\`\`\`bash
npm install
# or
yarn install
\`\`\`

### 3. Run Migrations

The template includes example migrations in `scripts/`. Execute them on your database to create the items table.

### 4. Start Development

\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

Visit `http://localhost:3000`

## Project Structure

\`\`\`
├── app/
│   ├── api/                 # API routes
│   ├── dashboard/           # Dashboard page
│   ├── items/              # Items CRUD example
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/
│   ├── layout/             # Layout components
│   └── ui/                 # UI components
├── lib/
│   ├── db.ts               # Database helpers
│   ├── sql-client.ts       # Database client initialization
│   └── utils.ts            # Utility functions
├── scripts/
│   └── init.sql            # Database initialization
└── public/                 # Static assets
\`\`\`

## Database Helpers

### Query (SELECT)

\`\`\`typescript
import { query, queryOne } from '@/lib/db'

// Get multiple rows
const items = await query`SELECT * FROM items WHERE active = true`

// Get single row
const item = await queryOne`SELECT * FROM items WHERE id = ${id}`
\`\`\`

### Mutate (INSERT, UPDATE, DELETE)

\`\`\`typescript
import { mutate } from '@/lib/db'

const result = await mutate`
  INSERT INTO items (title, description)
  VALUES (${title}, ${description})
`
\`\`\`

## API Routes

Create endpoints in `app/api/`:

\`\`\`typescript
import { query } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const data = await query`SELECT * FROM items`
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed' },
      { status: 500 }
    )
  }
}
\`\`\`

## UI Components

Pre-built components are available:

- `Button` - Customizable button with variants
- `Input` - Styled input field
- `Card` - Container component with glass effect
- `Navbar` - Navigation bar
- `Sidebar` - Sidebar navigation

## Environment Variables

Create `.env.local`:

\`\`\`
DATABASE_URL=your_database_url
NEXT_PUBLIC_API_URL=http://localhost:3000
\`\`\`

## Deployment

Deploy to Vercel:

\`\`\`bash
vercel deploy
\`\`\`

Set environment variables in Vercel dashboard.

## License

MIT
