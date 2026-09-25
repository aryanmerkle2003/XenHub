import deckXenSayHello from '../assets/images/deck-xen-say-hello.png'
import deckXenReimagined from '../assets/images/deck-xen-reimagined.webp'

export type PresentationDeck = {
  id: string
  title: string
  subtitle: string
  thumbnail: string
}

export const presentationDecks: PresentationDeck[] = [
  {
    id: 'say-hello-to-xen',
    title: 'Say Hello to XEN',
    subtitle: 'An introduction to the XEN mindset and methodology.',
    thumbnail: deckXenSayHello,
  },
  {
    id: 'xen-reimagined',
    title: 'XEN Reimagined',
    subtitle: 'A look at how the XEN experience has been reimagined.',
    thumbnail: deckXenReimagined,
  },
]
