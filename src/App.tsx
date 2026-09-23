import { Route, Routes } from 'react-router-dom'
import ExploreXen from './pages/ExploreXen'
import Home from './pages/Home'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore-xen" element={<ExploreXen />} />
    </Routes>
  )
}

export default App
