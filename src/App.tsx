import { Route, Routes } from 'react-router-dom'
import ExploreXen from './pages/ExploreXen'
import Home from './pages/Home'
import PresentationDecks from './pages/PresentationDecks'
import WorkshopOverview from './pages/WorkshopOverview'
import XenBooksLibrary from './pages/XenBooksLibrary'
import XenFaqs from './pages/XenFaqs'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore-xen" element={<ExploreXen />} />
      <Route path="/workshop-overview" element={<WorkshopOverview />} />
      <Route path="/presentation-decks" element={<PresentationDecks />} />
      <Route path="/xenbooks-library" element={<XenBooksLibrary />} />
      <Route path="/xen-faqs" element={<XenFaqs />} />
    </Routes>
  )
}

export default App
