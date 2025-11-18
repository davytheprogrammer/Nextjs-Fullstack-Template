import { mutate, queryOne } from '@/lib/db'
import { hashPassword, createSession } from '@/lib/auth'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { email, password, name } = await req.json()

    // Validation
    if (!email?.trim() || !password || !name?.trim()) {
      return NextResponse.json(
        { error: 'Email, password, and name are required' },
        { status: 400 }
      )
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: 'Password must be at least 6 characters' },
        { status: 400 }
      )
    }

    // Check if user exists
    const existingUser = await queryOne`
      SELECT id FROM users WHERE email = ${email.toLowerCase()}
    `

    if (existingUser) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 409 }
      )
    }

    // Hash password
    const hashedPassword = await hashPassword(password)

    // Create user
    const result = await mutate`
      INSERT INTO users (email, password, name, created_at)
      VALUES (${email.toLowerCase()}, ${hashedPassword}, ${name}, NOW())
    `

    // Get the created user
    const user = await queryOne`
      SELECT id, email, name, created_at as "createdAt"
      FROM users
      WHERE email = ${email.toLowerCase()}
    `

    // Create session
    const sessionId = createSession(user.id)

    const response = NextResponse.json(
      { 
        message: 'User created successfully',
        user,
      },
      { status: 201 }
    )

    // Set session cookie
    response.cookies.set('sessionId', sessionId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 24 * 60 * 60,
    })

    return response
  } catch (error) {
    console.error('POST /api/auth/register error:', error)
    return NextResponse.json(
      { error: 'Failed to create user' },
      { status: 500 }
    )
  }
}
