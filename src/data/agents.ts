export type AccessLevel = 'All Employees' | 'All Engineering' | 'Support Org' | 'Customer Support' | 'Technical Field Engineers' | 'Capella Control Plane' | 'SRE' | 'QE' | 'Product'

export type Agent = {
  id: string
  name: string
  functionality: string
  steward: string
  access: AccessLevel | AccessLevel[]
  iconName: string
}
