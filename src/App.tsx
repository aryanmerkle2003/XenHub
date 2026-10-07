import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import CommunicationTemplates from './pages/CommunicationTemplates'
import ConnectWithUs from './pages/ConnectWithUs'
import ExploreXen from './pages/ExploreXen'
import Home from './pages/Home'
import ProprietaryXenTools from './pages/ProprietaryXenTools'
import PresentationDecks from './pages/PresentationDecks'
import WorkshopOverview from './pages/WorkshopOverview'
import XenBooksLibrary from './pages/XenBooksLibrary'
import XenMedia from './pages/XenMedia'
import XenFaqs from './pages/XenFaqs'
import XenTools from './pages/XenTools'
import XenToolsRecommender from './pages/XenToolsRecommender'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore-xen" element={<ExploreXen />} />
        <Route path="/workshop-overview" element={<WorkshopOverview />} />
        <Route path="/presentation-decks" element={<PresentationDecks />} />
        <Route path="/xenbooks-library" element={<XenBooksLibrary />} />
        <Route path="/xen-faqs" element={<XenFaqs />} />
        <Route path="/connect-with-us" element={<ConnectWithUs />} />
        <Route path="/communication-templates" element={<CommunicationTemplates />} />
        <Route path="/xen-media" element={<XenMedia />} />
        <Route path="/proprietary-xentools" element={<ProprietaryXenTools />} />
        <Route path="/xentools-recommender" element={<XenToolsRecommender />} />
        <Route path="/xen-tools" element={<XenTools />} />
      </Routes>
    </>
  )
}

export default App
