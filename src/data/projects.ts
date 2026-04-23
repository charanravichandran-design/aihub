export type ProjectStatus = 'live' | 'beta' | 'in-progress' | 'deprecated'

export type Project = {
  id: string
  title: string
  description: string
  href: string
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
    href: 'http://127.0.0.1:5500/frontend/index.html',
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
  href: '#',
  iconName: 'FileText',
  accentFrom: 'from-indigo-500',
  accentTo: 'to-purple-600',
  tags: ['Platform', 'Specs'],
  status: 'in-progress',
  },
  {
    id: 'ai-eval',
    title: 'AI Eval',
    description: 'Platform for evaluating and analyzing how users interact with and utilize various AI tools across the organization.',
    href: '#',
    iconName: 'Activity',
    accentFrom: 'from-sky-500',
    accentTo: 'to-blue-600',
    tags: ['AI', 'Evaluation'],
    status: 'in-progress',
  },
  {
    id: 'agent-hub',
    title: 'Agent Hub',
    description: 'Central hub for discovering, managing, and reusing AI agents built by engineers across the company.',
    href: '#',
    iconName: 'Bot',
    accentFrom: 'from-emerald-500',
    accentTo: 'to-teal-600',
    tags: ['Agents', 'Platform'],
    status: 'in-progress',
  },
  {
    id: 'engineering-context-mcp',
    title: 'Engineering Context MCP',
    description: 'Find and connect to MCP endpoints for richer project context directly inside your AI coding tools.',
    href: 'http://172.16.12.57:3002/',
    iconName: 'Plug',
    accentFrom: 'from-violet-500',
    accentTo: 'to-fuchsia-600',
    tags: ['MCP', 'Dev Tools'],
    status: 'live',
  },
  {
    id: 'support-ai',
    title: 'Support AI',
    description: 'Enable support engineers to triage, debug, summarize, and hand over support tickets in Zendesk.',
    href: '#',
    iconName: 'LifeBuoy',
    accentFrom: 'from-orange-500',
    accentTo: 'to-amber-500',
    tags: ['Support', 'Zendesk'],
    status: 'in-progress',
  },
  {
    id: 'doc-ai',
    title: 'Doc AI',
    description: 'Enable documentation teams to generate fast documentation drafts using SKG and pre-canned skill files.',
    href: '#',
    iconName: 'PenLine',
    accentFrom: 'from-blue-500',
    accentTo: 'to-indigo-600',
    tags: ['Docs', 'SKG'],
    status: 'in-progress',
  },
  {
    id: 'code-review-bot',
    title: 'Code Review Bot',
    description: 'Enable it on your repo to get AI-driven code reviews powered by Copilot.',
    href: '#',
    iconName: 'GitPullRequest',
    accentFrom: 'from-green-500',
    accentTo: 'to-emerald-600',
    tags: ['Dev Tools', 'Copilot'],
    status: 'in-progress',
  },
  {
    id: 'test-regression-agent',
    title: 'Test Regression Agent',
    description: 'Reviews test regressions and identifies potential regressor PRs automatically.',
    href: '#',
    iconName: 'FlaskConical',
    accentFrom: 'from-rose-500',
    accentTo: 'to-red-600',
    tags: ['Testing', 'CI'],
    status: 'in-progress',
  },
]
