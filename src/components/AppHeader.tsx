import { ThemeToggle } from './ThemeToggle'

type Props = {
  pageTitle?: string
}

export function AppHeader({ pageTitle }: Props) {
  return (
    <header className="max-w-6xl mx-auto flex items-center justify-between mb-10">
      <div className="flex items-center gap-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/couchbase-logo.svg" alt="Couchbase" className="h-7 w-auto" />

        {pageTitle && (
          <div className="flex flex-col leading-tight border-l border-gray-200 dark:border-gray-700 pl-4">
            <span className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {pageTitle}
            </span>
            <span className="text-xs text-gray-400 dark:text-gray-500">AI Projects &amp; Agents</span>
          </div>
        )}
      </div>

      <ThemeToggle />
    </header>
  )
}
