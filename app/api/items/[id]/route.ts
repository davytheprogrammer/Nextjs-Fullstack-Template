import { query, mutate, queryOne } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'

// GET - Fetch single item
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const item = await queryOne`
      SELECT id, title, description, created_at as "createdAt"
      FROM items
      WHERE id = ${params.id}
    `

    if (!item) {
      return NextResponse.json(
        { error: 'Item not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(item)
  } catch (error) {
    console.error('GET /api/items/[id] error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch item' },
      { status: 500 }
    )
  }
}

// PUT - Update item
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { title, description } = await req.json()

    const result = await mutate`
      UPDATE items
      SET title = ${title}, description = ${description}
      WHERE id = ${params.id}
    `

    if (result.rowsAffected === 0) {
      return NextResponse.json(
        { error: 'Item not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('PUT /api/items/[id] error:', error)
    return NextResponse.json(
      { error: 'Failed to update item' },
      { status: 500 }
    )
  }
}

// DELETE - Delete item
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const result = await mutate`
      DELETE FROM items
      WHERE id = ${params.id}
    `

    if (result.rowsAffected === 0) {
      return NextResponse.json(
        { error: 'Item not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('DELETE /api/items/[id] error:', error)
    return NextResponse.json(
      { error: 'Failed to delete item' },
      { status: 500 }
    )
  }
}
