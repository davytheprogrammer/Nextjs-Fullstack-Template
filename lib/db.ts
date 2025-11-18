/**
 * Database abstraction layer
 * Supports multiple databases (Turso, Neon, PlanetScale, etc.)
 * 
 * Usage:
 * 1. Set DATABASE_URL in your .env.local
 * 2. The getDb() function handles the connection based on your setup
 */

import { sql } from './sql-client'

export async function getDb() {
  return sql
}

// Example helper for queries
export async function query<T>(
  queryString: TemplateStringsArray,
  ...values: any[]
): Promise<T[]> {
  try {
    const result = await sql(queryString, ...values)
    return result as T[]
  } catch (error) {
    console.error('Database query error:', error)
    throw new Error('Failed to execute database query')
  }
}

// Example helper for single row queries
export async function queryOne<T>(
  queryString: TemplateStringsArray,
  ...values: any[]
): Promise<T | null> {
  try {
    const result = await sql(queryString, ...values)
    return (result[0] as T) || null
  } catch (error) {
    console.error('Database query error:', error)
    throw new Error('Failed to execute database query')
  }
}

// Example helper for mutations (insert, update, delete)
export async function mutate(
  queryString: TemplateStringsArray,
  ...values: any[]
): Promise<{ rowsAffected: number }> {
  try {
    const result = await sql(queryString, ...values)
    return { rowsAffected: result.rowsAffected || 0 }
  } catch (error) {
    console.error('Database mutation error:', error)
    throw new Error('Failed to execute database mutation')
  }
}
