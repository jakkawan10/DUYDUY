import { ConnectionTest } from "@/components/connection-test"

export default async function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">🚀 DUYDUY MVP</h1>
          <p className="text-xl text-gray-600">Next.js + Supabase Configuration & Deployment Setup</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">📋 Setup Status</h2>
            <ConnectionTest />
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">🔧 Configuration</h2>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Environment Variables</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Supabase Integration</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Database Migration</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>CI/CD Pipeline</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">📚 Next Steps</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-gray-700 mb-2">1. Environment Setup</h3>
              <p className="text-sm text-gray-600">Configure your .env.local file with Supabase credentials</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-gray-700 mb-2">2. Database Migration</h3>
              <p className="text-sm text-gray-600">Run the SQL scripts to create your database schema</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-gray-700 mb-2">3. Deploy to Vercel</h3>
              <p className="text-sm text-gray-600">Set up automatic deployment from your Git repository</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
