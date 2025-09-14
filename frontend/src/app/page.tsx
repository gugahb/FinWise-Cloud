import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-primary-600">FinWise</span> Cloud
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Your comprehensive financial management platform. Track expenses, manage budgets, 
            and gain insights into your financial health.
          </p>
          
          <div className="flex gap-4 justify-center">
            <Link 
              href="/dashboard"
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Go to Dashboard
            </Link>
            <Link 
              href="/api-docs"
              className="border border-primary-600 text-primary-600 hover:bg-primary-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              View API Docs
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">💰 Expense Tracking</h3>
            <p className="text-gray-600">
              Monitor your spending patterns and categorize expenses automatically.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">📊 Financial Analytics</h3>
            <p className="text-gray-600">
              Get detailed insights with beautiful charts and reports.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">🎯 Budget Goals</h3>
            <p className="text-gray-600">
              Set and track your financial goals with smart notifications.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}