export type AccessLevel = 'All Employees' | 'All Engineering' | 'Only Support Org'

export type Agent = {
  id: string
  name: string
  functionality: string
  steward: string
  access: AccessLevel
  iconName: string
}

export const agents: Agent[] = [
  {
    id: 'support-ai',
    name: 'Support AI',
    functionality: 'Enable support engineers to triage, debug, summarize, and hand over support tickets in Zendesk.',
    steward: 'Shashank Chandok',
    access: 'Only Support Org',
    iconName: 'LifeBuoy',
  },
  {
    id: 'doc-ai',
    name: 'Doc AI',
    functionality: 'Enable documentation teams to generate fast documentation drafts using SKG and pre-canned skill files.',
    steward: 'Supritha Kumar, Tim Fletcher',
    access: 'All Employees',
    iconName: 'PenLine',
  },
  {
    id: 'code-review-bot',
    name: 'Code Review Bot',
    functionality: 'Enable it on your repo to get AI-driven code reviews powered by Copilot.',
    steward: 'James Lee',
    access: 'All Engineering',
    iconName: 'GitPullRequest',
  },
  {
    id: 'test-regression-agent',
    name: 'Test Regression Analysis Agent',
    functionality: 'Reviews test regressions and identifies potential regressor PRs.',
    steward: 'Bala Gopal',
    access: 'All Engineering',
    iconName: 'FlaskConical',
  },
]
