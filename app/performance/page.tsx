"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const performanceData = [
  { month: 'Jan', return: 2.5 },
  { month: 'Feb', return: 1.8 },
  { month: 'Mar', return: 3.2 },
  { month: 'Apr', return: -0.5 },
  { month: 'May', return: 2.1 },
  { month: 'Jun', return: 1.9 },
  { month: 'Jul', return: 2.8 },
  { month: 'Aug', return: 3.5 },
  { month: 'Sep', return: 1.2 },
  { month: 'Oct', return: 2.3 },
  { month: 'Nov', return: 2.9 },
  { month: 'Dec', return: 3.1 },
]

export default function PerformancePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Trading Performance</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Returns (%)</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="return" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Key Performance Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div>
                <p className="text-sm font-medium">Win Rate</p>
                <p className="text-2xl font-bold">68%</p>
              </div>
              <div>
                <p className="text-sm font-medium">Profit Factor</p>
                <p className="text-2xl font-bold">2.3</p>
              </div>
              <div>
                <p className="text-sm font-medium">Average RRR</p>
                <p className="text-2xl font-bold">1:2.5</p>
              </div>
              <div>
                <p className="text-sm font-medium">Max Drawdown</p>
                <p className="text-2xl font-bold">12%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}