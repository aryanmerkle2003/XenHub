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
      { label: 'Presentation Decks', to: '/presentation-decks' },
      { label: 'Case Studies', comingSoon: true },
      { label: 'XENBooks Library', to: '/xenbooks-library' },
      { label: 'XEN Media', comingSoon: true },
      { label: 'XEN FAQs', to: '/xen-faqs' },
    ],
  },
  {
    title: 'Activate',
    items: [
      { label: 'Communication Templates' },
      { label: 'XENTools', to: '/xen-tools' },
      { label: 'XENTools Recommender', comingSoon: true },
      { label: 'Proprietary XENTools', comingSoon: true },
      { label: 'XEN Skills', comingSoon: true },
    ],
  },
]
