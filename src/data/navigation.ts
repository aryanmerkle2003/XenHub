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
      { label: 'XEN Media', to: '/xen-media' },
      { label: 'XEN FAQs', to: '/xen-faqs' },
    ],
  },
  {
    title: 'Activate',
    items: [
      { label: 'Communication Templates', to: '/communication-templates' },
      { label: 'XENTools', to: '/xen-tools' },
      { label: 'XENTools Recommender', to: '/xentools-recommender' },
      { label: 'XENTools Library', to: '/xentools-library' },
      { label: 'Proprietary XENTools', to: '/proprietary-xentools' },
      { label: 'XEN Skills', comingSoon: true },
    ],
  },
]
