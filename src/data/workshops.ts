export type WorkshopPhase = {
  title: string
  description: string
}

export type Workshop = {
  id: string
  number: string
  title: string
  overview: string
  phases: WorkshopPhase[]
}

// Placeholder content: every workshop currently shares the same overview,
// journey, and images. Swap in real per-workshop content later — the
// image alt text below is named per workshop + slide to make that easy.
const sharedOverview =
  'Assess how well your digital experiences align with evolving user expectations and identify opportunities to future-ready your transformation efforts.'

const sharedPhases: WorkshopPhase[] = [
  {
    title: 'Determine',
    description: 'Identify the trends that matter most based on business priorities.',
  },
  {
    title: 'Recognize',
    description: 'Uncover gaps within the current digital ecosystem.',
  },
  {
    title: 'Identify',
    description: 'Pinpoint opportunities to better align experiences with evolving trends.',
  },
  {
    title: 'Verify',
    description: 'Validate ideas and assess their potential impact.',
  },
  {
    title: 'Explore',
    description: 'Examine business priorities and customer needs to refine opportunities.',
  },
  {
    title: 'Refine',
    description: 'Prioritize initiatives and shape a roadmap for action.',
  },
]

const titles = [
  'Vision Alignment',
  'Discovery & Definition',
  'Business AI',
  'Process Design',
  'Experience Trends',
  'Product Adoption',
  'Service Design',
  'Solution Rollout',
]

export const workshops: Workshop[] = titles.map((title, i) => ({
  id: title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
  number: String(i + 1).padStart(2, '0'),
  title,
  overview: sharedOverview,
  phases: sharedPhases,
}))
