import {
  Activity,
  BarChart3,
  BookOpenText,
  Bot,
  BrainCircuit,
  Code2,
  FileText,
  FlaskConical,
  GitPullRequest,
  LifeBuoy,
  PenLine,
  Plug,
  Search,
  type LucideIcon,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import type { Project } from '@/data/projects'

const iconMap: Record<string, LucideIcon> = {
  Activity,
  BarChart3,
  BookOpenText,
  Bot,
  BrainCircuit,
  Code2,
  FileText,
  FlaskConical,
  GitPullRequest,
  LifeBuoy,
  PenLine,
  Plug,
  Search,
}

const statusLabel: Record<string, string> = {
  live: 'Live',
  beta: 'Beta',
  'in-progress': 'In Progress',
  deprecated: 'Deprecated',
}

const statusStyles: Record<string, string> = {
  live: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400',
  beta: 'bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400',
  'in-progress': 'bg-sky-100 text-sky-700 dark:bg-sky-500/15 dark:text-sky-400',
  deprecated: 'bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-400',
}

const tileClass = `group relative flex flex-col gap-4 rounded-2xl p-6 cursor-pointer
  bg-white dark:bg-white/5
  border border-gray-200 dark:border-white/10
  shadow-sm
  hover:shadow-lg hover:-translate-y-1 hover:border-[#EA2328]/40 dark:hover:border-[#EA2328]/50
  transition-all duration-200 ease-out`

export function ProjectTile({ title, description, href, newTab, iconName, logoUrl, accentFrom, accentTo, status }: Project) {
  const Icon = iconMap[iconName] ?? BrainCircuit
  const isInternal = href.startsWith('/') && !newTab

  const content = (
    <>
      {logoUrl ? (
        <div className="w-12 h-12 rounded-xl overflow-hidden bg-white dark:bg-white/10 shadow-md flex items-center justify-center">
          <Image src={logoUrl} alt={`${title} logo`} width={48} height={48} className="object-contain" />
        </div>
      ) : (
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${accentFrom} ${accentTo} shadow-md`}>
          <Icon size={24} className="text-white" strokeWidth={1.75} />
        </div>
      )}

      <div className="flex flex-col gap-1 flex-1">
        <h2 className="font-semibold text-base text-gray-900 dark:text-white leading-snug">{title}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3">{description}</p>
      </div>

      {status && (
        <span className={`self-start text-xs font-medium px-2.5 py-0.5 rounded-full ${statusStyles[status]}`}>
          {statusLabel[status]}
        </span>
      )}

      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        style={{ boxShadow: '0 0 0 1.5px #EA232820' }}
      />
    </>
  )

  if (isInternal) {
    return (
      <Link href={href} aria-label={`Open ${title}`} className={tileClass}>
        {content}
      </Link>
    )
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`Open ${title}`} className={tileClass}>
      {content}
    </a>
  )
}
