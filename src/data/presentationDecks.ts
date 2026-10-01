import deckXenSayHello from '../assets/images/deck-xen-say-hello.png'
import deckXenReimagined from '../assets/images/deck-xen-reimagined.webp'

export type PresentationDeck = {
  id: string
  title: string
  subtitle: string
  thumbnail: string
  pdfUrl?: string
  pptUrl?: string
}

export const presentationDecks: PresentationDeck[] = [
  {
    id: 'xen-showcase',
    title: 'XEN Showcase',
    subtitle: 'An introduction to the XEN mindset and methodology.',
    thumbnail: deckXenSayHello,
    pdfUrl:
      'https://globalappsportal.sharepoint.com/:b:/s/XENTeam/IQDARd0cZOxqRpX6Kl-cEMd6AXrKDt_4LbpfzjadPcBR36c?e=LYQ0vv&download=1',
    pptUrl:
      'https://globalappsportal.sharepoint.com/:p:/s/XENTeam/IQC4IN3TlZlHRp-bkh-E4VQdAZdxz3Enzg7Phhvcz4wfIOA?e=6twD47&download=1',
  },
  {
    id: 'xen-reimagined',
    title: 'XEN Reimagined',
    subtitle: 'A look at how the XEN experience has been reimagined.',
    thumbnail: deckXenReimagined,
    pdfUrl:
      'https://globalappsportal.sharepoint.com/:b:/s/XENTeam/IQDARd0cZOxqRpX6Kl-cEMd6ASf5AdfEePRm7iJ0pTeLnXY?e=sFWQoI&download=1',
    pptUrl:
      'https://globalappsportal.sharepoint.com/:p:/s/XENTeam/IQALnW5ijdDDSpQIPo8gtbA0AfP2GpW5Ku9lpCzTp0BPEr8?e=ENcDdx&download=1',
  },
]
