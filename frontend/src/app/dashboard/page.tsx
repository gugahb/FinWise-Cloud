'use client'

import { useQuery } from '@tanstack/react-query'
import { apiClient } from '@/lib/api'

export default function DashboardPage() {
  const { data: health, isLoading } = useQuery({
    queryKey: ['api-health'],
    queryFn: () => apiClient.get('/health'),
  })

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Financial Dashboard
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500">Total Balance</h3>
            <p className="text-2xl font-bold text-green-600">$12,345.67</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500">Monthly Income</h3>
            <p className="text-2xl font-bold text-blue-600">$5,000.00</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500">Monthly Expenses</h3>
            <p className="text-2xl font-bold text-red-600">$3,456.78</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500">Savings Rate</h3>
            <p className="text-2xl font-bold text-purple-600">31%</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">API Health Status</h2>
          {isLoading ? (
            <p className="text-gray-500">Loading...</p>
          ) : (
            <div className="space-y-2">
              <p><strong>Status:</strong> {health?.data?.status || 'Unknown'}</p>
              <p><strong>Environment:</strong> {health?.data?.environment || 'Unknown'}</p>
              <p><strong>Database:</strong> {health?.data?.database || 'Unknown'}</p>
              <p><strong>Redis:</strong> {health?.data?.redis || 'Unknown'}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}