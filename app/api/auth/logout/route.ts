import { NextRequest, NextResponse } from 'next/server'
import { deleteSession } from '@/lib/auth'

export async function POST(req: NextRequest) {
  try {
    const sessionId = req.cookies.get('sessionId')?.value

    if (sessionId) {
      deleteSession(sessionId)
    }

    const response = NextResponse.json(
      { message: 'Logged out successfully' },
      { status: 200 }
    )

    response.cookies.delete('sessionId')

    return response
  } catch (error) {
    console.error('POST /api/auth/logout error:', error)
    return NextResponse.json(
      { error: 'Failed to logout' },
      { status: 500 }
    )
  }
}
