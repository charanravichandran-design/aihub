import { AgentsHeader } from '@/components/AgentsHeader'
import { AgentsTable } from '@/components/AgentsTable'
import { fetchAgents } from '@/lib/couchbase'

export const dynamic = 'force-dynamic'

export default async function AgentsPage() {
  const agents = await fetchAgents()

  return (
    <div className="min-h-screen px-6 py-10 sm:px-10 lg:px-16">
      <AgentsHeader />

      {/* Hero */}
      <div className="max-w-6xl mx-auto mb-8">
        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
          AI Agents directory
        </h2>
        <p className="mt-1 text-sm text-gray-400 dark:text-gray-500 max-w-6xl">
          All AI agents available across the organization — who owns them and who can access them.
        </p>
      </div>

      {/* Table */}
      <main className="max-w-6xl mx-auto">
        {agents.length === 0 ? (
          <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-12 text-center shadow-sm">
            <p className="text-gray-400 dark:text-gray-500 text-sm">
              No agents found. Check the Couchbase connection or add agents via the Query Workbench.
            </p>
          </div>
        ) : (
          <AgentsTable agents={agents} />
        )}
      </main>
    </div>
  )
}
