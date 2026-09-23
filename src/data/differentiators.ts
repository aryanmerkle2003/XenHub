export type DifferentiatorGroup = {
  key: string
  highlight: string
  slideCount: 2 | 3
}

export type DifferentiatorTab = {
  key: string
  label: string
}

// Placeholder content: all three tabs currently share the same four
// groups and images. Swap in real per-tab content later.
export const differentiatorTabs: DifferentiatorTab[] = [
  { key: 'stage', label: 'We set the stage' },
  { key: 'surprise', label: 'We design for surprise' },
  { key: 'participants', label: 'We engage participants' },
]

export const differentiatorGroups: DifferentiatorGroup[] = [
  { key: 'engaging', highlight: 'Engaging', slideCount: 3 },
  { key: 'competitive', highlight: 'Competitive', slideCount: 2 },
  { key: 'urgent', highlight: 'Urgent', slideCount: 2 },
  { key: 'fun', highlight: 'Fun', slideCount: 2 },
]
