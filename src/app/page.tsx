import { AppHeader } from '@/components/AppHeader'
import { TileGrid } from '@/components/TileGrid'
import { projects } from '@/data/projects'

export default function Home() {
  return (
    <div className="min-h-screen px-6 py-10 sm:px-10 lg:px-16">
      <AppHeader pageTitle="AIDLC Hub" />

      {/* Hero */}
      <div className="max-w-6xl mx-auto mb-8">
        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
          Explore our AI projects
        </h2>
        <p className="mt-1 text-sm text-gray-400 dark:text-gray-500 max-w-6xl">
          A single place to discover all AI agents, tools, and initiatives built on Couchbase.
        </p>
      </div>

      {/* Grid */}
      <main className="max-w-6xl mx-auto">
        <TileGrid projects={projects} />
      </main>
    </div>
  )
}
