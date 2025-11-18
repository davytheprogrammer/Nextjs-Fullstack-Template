import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { TrendingUp, Users, ActivitySquare, Zap } from 'lucide-react'

export default function DashboardPage() {
  const stats = [
    { label: 'Total Items', value: '24', icon: ActivitySquare, trend: '+12%' },
    { label: 'Active Users', value: '182', icon: Users, trend: '+5%' },
    { label: 'API Calls', value: '4.2K', icon: Zap, trend: '+23%' },
    { label: 'Growth', value: '34%', icon: TrendingUp, trend: '+2%' },
  ]

  return (
    <div className="p-6 md:p-8 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-neutral-400">Welcome back! Here's your project overview.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, i) => {
          const Icon = stat.icon
          return (
            <Card key={i}>
              <CardContent className="flex items-center justify-between">
                <div>
                  <p className="text-neutral-400 text-sm mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <p className="text-xs text-success mt-2">{stat.trend}</p>
                </div>
                <Icon className="w-8 h-8 text-primary opacity-50" />
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0 text-sm font-bold">1</div>
                <div>
                  <p className="font-medium">Setup your database</p>
                  <p className="text-sm text-neutral-400">Configure DATABASE_URL in your environment variables</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0 text-sm font-bold">2</div>
                <div>
                  <p className="font-medium">Create API routes</p>
                  <p className="text-sm text-neutral-400">Use app/api/* for your endpoints with proper error handling</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0 text-sm font-bold">3</div>
                <div>
                  <p className="font-medium">Build your features</p>
                  <p className="text-sm text-neutral-400">Use the included components and database utilities</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Links</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button variant="ghost" className="w-full justify-start" asChild>
              <a href="/items">Manage Items</a>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <a href="/api-test">Test APIs</a>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <a href="/docs">Documentation</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
