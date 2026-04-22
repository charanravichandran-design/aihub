import { TileGrid } from '@/components/TileGrid'
import { ThemeToggle } from '@/components/ThemeToggle'
import { projects } from '@/data/projects'

export default function Home() {
  return (
    <div className="min-h-screen px-6 py-10 sm:px-10 lg:px-16">
      {/* Header */}
      <header className="max-w-6xl mx-auto flex items-center justify-between mb-10">
        <div className="flex items-center gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/couchbase-logo.svg" alt="Couchbase" className="h-7 w-auto" />
          <div className="flex flex-col leading-tight border-l border-gray-200 dark:border-gray-700 pl-4">
            <span className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              AIDLC Hub
            </span>
            <span className="text-xs text-gray-400 dark:text-gray-500">AI Projects &amp; Agents</span>
          </div>
        </div>
        <ThemeToggle />
      </header>

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
