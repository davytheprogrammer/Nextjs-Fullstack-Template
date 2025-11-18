/**
 * Authentication utilities and helpers
 * Supports JWT-based authentication with server-side session management
 */

import { hash, compare } from 'bcrypt'

// Simple in-memory session store (replace with database in production)
const sessions = new Map<string, { userId: string; expiresAt: number }>()

export async function hashPassword(password: string): Promise<string> {
  // Using Node.js crypto for simplicity (use bcrypt in production)
  const encoder = new TextEncoder()
  const data = encoder.encode(password)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(hashBuffer))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('')
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  const hashedAttempt = await hashPassword(password)
  return hashedAttempt === hash
}

export function generateSessionId(): string {
  return crypto.getRandomValues(new Uint8Array(32)).toString()
}

export function createSession(userId: string): string {
  const sessionId = generateSessionId()
  const expiresAt = Date.now() + 24 * 60 * 60 * 1000 // 24 hours
  sessions.set(sessionId, { userId, expiresAt })
  return sessionId
}

export function getSession(sessionId: string): { userId: string } | null {
  const session = sessions.get(sessionId)
  if (!session) return null
  
  if (Date.now() > session.expiresAt) {
    sessions.delete(sessionId)
    return null
  }
  
  return { userId: session.userId }
}

export function deleteSession(sessionId: string): void {
  sessions.delete(sessionId)
}

export interface User {
  id: string
  email: string
  name: string
  createdAt: string
}
