import {
  FlaskConical,
  GitPullRequest,
  LifeBuoy,
  PenLine,
  type LucideIcon,
} from 'lucide-react'
import { AppHeader } from '@/components/AppHeader'
import { agents, type AccessLevel } from '@/data/agents'

const iconMap: Record<string, LucideIcon> = {
  LifeBuoy,
  PenLine,
  GitPullRequest,
  FlaskConical,
}

const accessStyles: Record<AccessLevel, string> = {
  'All Employees':    'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400',
  'All Engineering':  'bg-sky-100 text-sky-700 dark:bg-sky-500/15 dark:text-sky-400',
  'Only Support Org': 'bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400',
}

export default function AgentsPage() {
  return (
    <div className="min-h-screen px-6 py-10 sm:px-10 lg:px-16">
      <AppHeader pageTitle="Agent Hub" />

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
        <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 overflow-hidden shadow-sm">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.03]">
                <th className="text-left px-8 py-5 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Agent
                </th>
                <th className="text-left px-8 py-5 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Functionality
                </th>
                <th className="text-left px-8 py-5 text-xs font-semibold text-gray-400 uppercase tracking-wider whitespace-nowrap">
                  Agent Steward
                </th>
                <th className="text-left px-8 py-5 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Access
                </th>
              </tr>
            </thead>
            <tbody>
              {agents.map((agent, index) => {
                const Icon = iconMap[agent.iconName] ?? LifeBuoy
                return (
                  <tr
                    key={agent.id}
                    className={`
                      transition-colors duration-150
                      hover:bg-gray-50 dark:hover:bg-white/[0.04]
                      ${index !== 0 ? 'border-t border-gray-100 dark:border-white/10' : ''}
                    `}
                  >
                    {/* Agent name + icon */}
                    <td className="px-8 py-6 align-top w-72">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-white/10 flex items-center justify-center shrink-0">
                          <Icon size={16} className="text-gray-600 dark:text-gray-300" strokeWidth={1.75} />
                        </div>
                        <span className="font-semibold text-gray-900 dark:text-white leading-snug">
                          {agent.name}
                        </span>
                      </div>
                    </td>

                    {/* Functionality */}
                    <td className="px-8 py-6 align-top text-gray-500 dark:text-gray-400 leading-relaxed max-w-sm">
                      {agent.functionality}
                    </td>

                    {/* Steward */}
                    <td className="px-8 py-6 align-top w-56">
                      <div className="flex flex-col gap-1">
                        {agent.steward.split(', ').map((name) => (
                          <span key={name} className="text-gray-700 dark:text-gray-300 font-medium leading-snug">
                            {name}
                          </span>
                        ))}
                      </div>
                    </td>

                    {/* Access badge */}
                    <td className="px-8 py-6 align-top w-52">
                      <span className={`inline-flex text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap ${accessStyles[agent.access]}`}>
                        {agent.access}
                      </span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}
