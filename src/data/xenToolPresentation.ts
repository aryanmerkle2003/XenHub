import type { Tool } from './recommender'

// Presentation-only mapping. Tool content comes from Supabase; the old
// `category_color` column is intentionally never read here.
export const XEN_COLORS = {
  purple: '#5d3abf',
  darkBlue: '#2041ce',
  red: '#e25454',
  lightBlue: '#538fe4',
} as const

export type BranchId = 'people' | 'business' | 'problem' | 'explore' | 'validate'

export type Branch = {
  id: BranchId
  label: string
  color: string
  tools: string[]
}

// Blueprint: each branch lists tools by name; a tool may sit in several branches.
export const BRANCHES: Branch[] = [
  {
    id: 'people',
    label: 'Learn about people',
    color: XEN_COLORS.purple,
    tools: [
      'Persona',
      'Roleplaying',
      'Extremes and Mainstreams',
      'Customer Journey Map',
      'Jobs to Be Done',
      'Buzz Reports',
      'Desirability Studies',
    ],
  },
  {
    id: 'business',
    label: 'Know the business',
    color: XEN_COLORS.darkBlue,
    tools: [
      'Golden Circles',
      'Value Proposition Canvas',
      'Business Vision',
      'Competitor Matrix',
      'SWOT Analysis',
      'Ways to Grow Matrix',
      'Power Matrix',
    ],
  },
  {
    id: 'problem',
    label: 'Understand the problem',
    color: XEN_COLORS.red,
    tools: [
      'Roleplaying',
      'Ishikawa Diagram',
      'Customer Journey Map',
      'How Might We',
      'Insight Statements',
      'Problem Statement Frame',
      'Persona',
      'Value Proposition Canvas',
      'UX Honeycomb Scorecard',
    ],
  },
  {
    id: 'explore',
    label: 'Explore solutions',
    color: XEN_COLORS.lightBlue,
    tools: [
      'Card Sorting',
      'NABC',
      'Rose, Thorn, Bud',
      'Inversion',
      'Roleplaying',
      'Crazy 8s',
      'Six Thinking Hats',
      'Mash Up',
      'Headlines for the Future',
      'Participatory Prototyping',
      'Paper Prototype',
    ],
  },
  {
    id: 'validate',
    label: 'Validate concepts',
    color: XEN_COLORS.purple,
    tools: [
      'RICE',
      'Dot Voting',
      'Impact vs. Effort',
      'A/B Testing',
      'Roleplaying',
      'Remote Moderated Testing',
      'Six Thinking Hats',
      'Golden Circles',
      'Prototype Report Card',
      'Usability Benchmarking',
      'KPI Evaluation Scorecard',
      'Eisenhower Matrix',
    ],
  },
]

// Alternate spellings / database slugs for the same blueprint tool.
const ALIASES: Record<string, string[]> = {
  goldencircles: ['businessvaluegoldencircles'],
  businessvision: ['businessvisionframe'],
  swotanalysis: ['swot'],
  howmightwe: ['howmightwestatements'],
  insightstatements: ['createinsightstatements'],
  mashup: ['meshup'],
  rice: ['riceprioritization', 'riceprioritizationframework'],
  impactvseffort: ['impacteffort', 'impactvseffortmatrix'],
  uxhoneycombscorecard: ['uxhoneycombanalysis'],
  ishikawadiagram: ['ishikawa'],
  sixthinkinghats: ['6thinkinghats'],
  rosethornbud: ['rosethornbud'],
  nabc: ['needapproachbenefitcompetitionnabc'],
}

const normalize = (value: string) => value.toLowerCase().replace(/[^a-z0-9]/g, '')

const branchKeys = BRANCHES.map(
  (branch) => new Set(branch.tools.flatMap((name) => {
    const key = normalize(name)
    return [key, ...(ALIASES[key] ?? [])]
  })),
)

export function branchesForTool(tool: Pick<Tool, 'id' | 'name'>): Branch[] {
  const keys = [normalize(tool.id), normalize(tool.name)]
  return BRANCHES.filter((_, i) => keys.some((key) => branchKeys[i].has(key)))
}

export function branchFromLabel(label: string): Branch | undefined {
  const text = label.toLowerCase()
  if (text.includes('people')) return BRANCHES[0]
  if (text.includes('business')) return BRANCHES[1]
  if (text.includes('problem')) return BRANCHES[2]
  if (text.includes('explore')) return BRANCHES[3]
  if (text.includes('validate')) return BRANCHES[4]
  return undefined
}

// Colour for a tool: the active branch/context when the tool belongs to it,
// otherwise the tool's first blueprint branch, otherwise XEN dark blue.
export function toolColor(
  tool: Pick<Tool, 'id' | 'name'>,
  contextBranch?: Branch,
): string {
  const owned = branchesForTool(tool)
  if (contextBranch && owned.some((b) => b.id === contextBranch.id)) {
    return contextBranch.color
  }
  return owned[0]?.color ?? XEN_COLORS.darkBlue
}
