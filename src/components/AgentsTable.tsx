'use client'

import { useState } from 'react'
import {
  Blocks,
  FileCheck,
  FileSearch,
  FlaskConical,
  GitPullRequest,
  LifeBuoy,
  PenLine,
  SearchCode,
  TestTube,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  type LucideIcon,
} from 'lucide-react'
import type { Agent, AccessLevel } from '@/data/agents'

const iconMap: Record<string, LucideIcon> = {
  Blocks, FileCheck, FileSearch, FlaskConical,
  GitPullRequest, LifeBuoy, PenLine, SearchCode, TestTube,
}

const accessStyles: Record<AccessLevel, string> = {
  'All Employees':             'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400',
  'All Engineering':           'bg-sky-100 text-sky-700 dark:bg-sky-500/15 dark:text-sky-400',
  'Support Org':               'bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400',
  'Customer Support':          'bg-purple-100 text-purple-700 dark:bg-purple-500/15 dark:text-purple-400',
  'Technical Field Engineers': 'bg-indigo-100 text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-400',
  'Capella Control Plane':     'bg-cyan-100 text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-400',
  'SRE':                       'bg-rose-100 text-rose-700 dark:bg-rose-500/15 dark:text-rose-400',
  'QE':                        'bg-orange-100 text-orange-700 dark:bg-orange-500/15 dark:text-orange-400',
  'Product':                   'bg-violet-100 text-violet-700 dark:bg-violet-500/15 dark:text-violet-400',
}

const PAGE_SIZE_OPTIONS = [5, 10, 25]

export function AgentsTable({ agents }: { agents: Agent[] }) {
  const [pageSize, setPageSize] = useState(5)
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.max(1, Math.ceil(agents.length / pageSize))
  const safeCurrentPage = Math.min(currentPage, totalPages)
  const startIndex = (safeCurrentPage - 1) * pageSize
  const pageAgents = agents.slice(startIndex, startIndex + pageSize)
  const startItem = startIndex + 1
  const endItem = Math.min(startIndex + pageSize, agents.length)

  function handlePageSizeChange(size: number) {
    setPageSize(size)
    setCurrentPage(1)
  }

  return (
    <>
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
            {pageAgents.map((agent, index) => {
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
                  <td className="px-8 py-6 align-top text-gray-500 dark:text-gray-400 leading-relaxed max-w-sm">
                    {agent.functionality}
                  </td>
                  <td className="px-8 py-6 align-top w-56">
                    <div className="flex flex-col gap-1">
                      {agent.steward.split(', ').map((name) => (
                        <span key={name} className="text-gray-700 dark:text-gray-300 font-medium leading-snug">
                          {name}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-8 py-6 align-top w-52">
                    {typeof agent.access === 'string' ? (
                      <span className={`inline-flex text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap ${accessStyles[agent.access]}`}>
                        {agent.access}
                      </span>
                    ) : (
                      <div className="flex flex-col gap-1 items-start">
                        {agent.access.map((access) => (
                          <span key={access} className={`inline-flex text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap ${accessStyles[access]}`}>
                            {access}
                          </span>
                        ))}
                      </div>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>

        {/* Pagination bar */}
        <div className="flex items-center justify-between px-8 py-4 border-t border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-white/[0.02]">
          {/* Rows per page */}
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <span>Rows per page</span>
            <div className="flex items-center rounded-lg border border-gray-200 dark:border-white/10 overflow-hidden">
              {PAGE_SIZE_OPTIONS.map((size) => (
                <button
                  key={size}
                  onClick={() => handlePageSizeChange(size)}
                  className={`px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer
                    ${pageSize === size
                      ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
                      : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10'
                    }
                  `}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Page info + navigation */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {startItem}–{endItem} of {agents.length}
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setCurrentPage(1)}
                disabled={safeCurrentPage === 1}
                className="p-1.5 rounded-lg transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10"
                aria-label="First page"
              >
                <ChevronsLeft size={16} />
              </button>
              <button
                onClick={() => setCurrentPage(safeCurrentPage - 1)}
                disabled={safeCurrentPage === 1}
                className="p-1.5 rounded-lg transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10"
                aria-label="Previous page"
              >
                <ChevronLeft size={16} />
              </button>
              <span className="px-2 text-sm font-medium text-gray-700 dark:text-gray-300 min-w-[4rem] text-center">
                {safeCurrentPage} / {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage(safeCurrentPage + 1)}
                disabled={safeCurrentPage === totalPages}
                className="p-1.5 rounded-lg transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10"
                aria-label="Next page"
              >
                <ChevronRight size={16} />
              </button>
              <button
                onClick={() => setCurrentPage(totalPages)}
                disabled={safeCurrentPage === totalPages}
                className="p-1.5 rounded-lg transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10"
                aria-label="Last page"
              >
                <ChevronsRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
