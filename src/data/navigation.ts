export type NavSubItem = {
  label: string
  to?: string
  comingSoon?: boolean
}

export type NavSection = {
  title: string
  items: NavSubItem[]
}

export const navSections: NavSection[] = [
  {
    title: 'Learn',
    items: [
      { label: 'Explore XEN', to: '/explore-xen' },
      { label: 'Workshop Overview', to: '/workshop-overview' },
    ],
  },
  {
    title: 'Pitch',
    items: [
      { label: 'Presentation Decks' },
      { label: 'Case Studies', comingSoon: true },
      { label: 'XENBooks Libraries' },
      { label: 'XEN Media' },
      { label: 'XEN FAQs' },
    ],
  },
  {
    title: 'Activate',
    items: [
      { label: 'Communication Templates' },
      { label: 'XENTools' },
      { label: 'XENTools Recommender' },
      { label: 'Proprietary XENTools' },
      { label: 'XEN Skills' },
    ],
  },
]
