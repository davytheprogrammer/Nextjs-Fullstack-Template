import { query, mutate } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'

// GET - Fetch all items
export async function GET() {
  try {
    const items = await query`
      SELECT id, title, description, created_at as "createdAt"
      FROM items
      ORDER BY created_at DESC
      LIMIT 100
    `
    return NextResponse.json(items)
  } catch (error) {
    console.error('GET /api/items error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch items' },
      { status: 500 }
    )
  }
}

// POST - Create new item
export async function POST(req: NextRequest) {
  try {
    const { title, description } = await req.json()

    if (!title?.trim()) {
      return NextResponse.json(
        { error: 'Title is required' },
        { status: 400 }
      )
    }

    const result = await query`
      INSERT INTO items (title, description, created_at)
      VALUES (${title}, ${description || ''}, NOW())
      RETURNING id, title, description, created_at as "createdAt"
    `

    return NextResponse.json(result[0], { status: 201 })
  } catch (error) {
    console.error('POST /api/items error:', error)
    return NextResponse.json(
      { error: 'Failed to create item' },
      { status: 500 }
    )
  }
}
