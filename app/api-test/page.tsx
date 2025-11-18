'use client'

import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function ApiTestPage() {
  const [endpoint, setEndpoint] = useState('/api/items')
  const [method, setMethod] = useState('GET')
  const [response, setResponse] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  async function testApi() {
    setLoading(true)
    try {
      const res = await fetch(endpoint, {
        method,
        headers: { 'Content-Type': 'application/json' },
      })
      const data = await res.json()
      setResponse({ status: res.status, data })
    } catch (error) {
      setResponse({ error: String(error) })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-6 md:p-8 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">API Testing</h1>
        <p className="text-neutral-400">Test your API endpoints directly from the dashboard.</p>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Test Endpoint</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Endpoint</label>
              <Input
                value={endpoint}
                onChange={(e) => setEndpoint(e.target.value)}
                placeholder="/api/items"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Method</label>
              <select
                value={method}
                onChange={(e) => setMethod(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-neutral-700 border border-neutral-600 text-foreground"
              >
                <option>GET</option>
                <option>POST</option>
                <option>PUT</option>
                <option>DELETE</option>
              </select>
            </div>
          </div>
          <Button onClick={testApi} disabled={loading} className="w-full">
            {loading ? 'Testing...' : 'Send Request'}
          </Button>
        </CardContent>
      </Card>

      {response && (
        <Card>
          <CardHeader>
            <CardTitle>Response</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-neutral-900 p-4 rounded-lg overflow-auto text-sm text-green-400 font-mono">
              {JSON.stringify(response, null, 2)}
            </pre>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
