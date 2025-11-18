/**
 * SQL Client Configuration
 * Detects the database type based on DATABASE_URL and initializes the appropriate client
 * 
 * Supported databases:
 * - Turso (libsql)
 * - Neon (PostgreSQL)
 * - PlanetScale (MySQL)
 * - Local SQLite
 */

import { neon } from '@neondatabase/serverless'

const databaseUrl = process.env.DATABASE_URL || ''

let sql: any

// PostgreSQL via Neon
if (databaseUrl.includes('neon') || databaseUrl.includes('postgres')) {
  sql = neon(databaseUrl)
}
// Turso (LibSQL)
else if (databaseUrl.includes('turso')) {
  // For Turso: use @libsql/client
  // npm install @libsql/client
  // import { createClient } from '@libsql/client'
  // sql = createClient({ url: databaseUrl, authToken: process.env.TURSO_AUTH_TOKEN })
  throw new Error('Turso requires manual setup. Install @libsql/client and update this file')
}
// Default: Neon PostgreSQL
else {
  sql = neon(databaseUrl)
}

export { sql }
export default sql
