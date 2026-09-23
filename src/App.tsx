import { Route, Routes } from 'react-router-dom'
import ExploreXen from './pages/ExploreXen'
import Home from './pages/Home'
import WorkshopOverview from './pages/WorkshopOverview'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore-xen" element={<ExploreXen />} />
      <Route path="/workshop-overview" element={<WorkshopOverview />} />
    </Routes>
  )
}

export default App
