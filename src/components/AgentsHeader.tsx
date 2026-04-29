import { ExternalLink } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'

export function AgentsHeader() {
  return (
    <header className="max-w-6xl mx-auto flex items-center justify-between mb-10">
      {/* Left: Logo + Title */}
      <div className="flex items-center gap-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/couchbase-logo.svg" alt="Couchbase" className="h-7 w-auto" />
        <div className="flex flex-col leading-tight border-l border-gray-200 dark:border-gray-700 pl-4">
          <span className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Agent Hub
          </span>
          <span className="text-xs text-gray-400 dark:text-gray-500">AI Projects &amp; Agents</span>
        </div>
      </div>

      {/* Right: Home Button + Theme Toggle */}
      <div className="flex items-center gap-3">
        <a
          href="http://aihub.couchbase.com"
          target="_self"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 h-9 rounded-full font-semibold text-sm
            border-2 border-[#EA2328] text-[#EA2328]
            hover:bg-[#EA2328] hover:text-white
            dark:border-[#EA2328] dark:text-[#EA2328]
            dark:hover:bg-[#EA2328] dark:hover:text-white
            transition-all duration-200 ease-out
            group"
          aria-label="Go to AIDLC Hub home"
        >
          AIDLC Hub
          <ExternalLink size={14} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
        <ThemeToggle />
      </div>
    </header>
  )
}
