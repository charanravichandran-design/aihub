import { TileGrid } from '@/components/TileGrid'
import { ThemeToggle } from '@/components/ThemeToggle'
import { projects } from '@/data/projects'
import { Layers } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen px-6 py-10 sm:px-10 lg:px-16">
      {/* Header */}
      <header className="max-w-6xl mx-auto flex items-center justify-between mb-12">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#EA2328] to-rose-700 flex items-center justify-center shadow-md">
            <Layers size={20} className="text-white" strokeWidth={1.75} />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white leading-none">
              AI Hub
            </h1>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Couchbase AI Projects</p>
          </div>
        </div>
        <ThemeToggle />
      </header>

      {/* Hero */}
      <div className="max-w-6xl mx-auto mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          Explore our AI projects
        </h2>
        <p className="mt-2 text-base text-gray-500 dark:text-gray-400 max-w-xl">
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
