export type ProjectStatus = 'live' | 'beta' | 'in-progress' | 'deprecated'

export type Project = {
  id: string
  title: string
  description: string
  href: string
  newTab?: boolean        // force open in new tab even for internal links
  iconName: string        // Lucide icon name (fallback when no logoUrl)
  logoUrl?: string        // path to image in /public, e.g. '/logos/myproject.png'
  accentFrom: string      // Tailwind gradient-from color class
  accentTo: string        // Tailwind gradient-to color class
  tags?: string[]
  status?: ProjectStatus
}

export const projects: Project[] = [
  {
    id: 'skg-onboarding',
    title: 'SKG Onboarding',
    description: 'Used to ingest documents and GitHub repos into the SKG Knowledge Base.',
    href: 'http://aihub.couchbase.com/skg',
    iconName: 'Activity',
    accentFrom: 'from-cyan-500',
    accentTo: 'to-indigo-500',
    tags: ['SKG', 'Capella Cluster'],
    status: 'live',
  },
  {
    id: 'spec-registry',
    title: 'Spec Registry',
    description: 'Central system for managing and storing specifications generated across coding tools and workflows.',
    href: 'https://github.com/couchbaselabs/spec-registry/tree/main',
    iconName: 'FileText',
    accentFrom: 'from-indigo-500',
    accentTo: 'to-purple-600',
    tags: ['Platform', 'Specs'],
    status: 'live',
  },
  {
    id: 'ai-eval',
    title: 'AI Eval',
    description: 'Platform for evaluating and analyzing how users interact with and utilize various AI tools across the organization.',
    href: 'http://aihub.couchbase.com/AIEval',
    iconName: 'Activity',
    accentFrom: 'from-sky-500',
    accentTo: 'to-blue-600',
    tags: ['AI', 'Evaluation'],
    status: 'live',
  },
  {
    id: 'agent-hub',
    title: 'Agent Hub',
    description: 'Central hub for discovering, managing, and reusing AI agents built by engineers across the company.',
    href: '/agents',
    newTab: true,
    iconName: 'Bot',
    accentFrom: 'from-emerald-500',
    accentTo: 'to-teal-600',
    tags: ['Agents', 'Platform'],
    status: 'live',
  },
  {
    id: 'engineering-context-mcp',
    title: 'Engineering Context MCP',
    description: 'Find and connect to MCP endpoints for richer project context directly inside your AI coding tools.',
    href: 'http://aihub.couchbase.com/EngContextMCP',
    iconName: 'Plug',
    accentFrom: 'from-violet-500',
    accentTo: 'to-fuchsia-600',
    tags: ['MCP', 'Dev Tools'],
    status: 'live',
  },
]
