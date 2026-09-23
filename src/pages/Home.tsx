import Footer from '../components/Footer'
import ConnectBanner from '../components/home/ConnectBanner'
import Hero from '../components/home/Hero'
import RecentProject from '../components/home/RecentProject'
import UsageSection from '../components/home/UsageSection'
import WhatIsXen from '../components/home/WhatIsXen'
import WorkshopOfferings from '../components/home/WorkshopOfferings'
import XenTools from '../components/home/XenTools'

function Divider() {
  return <div className="h-px w-full bg-hairline" />
}

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center overflow-x-clip bg-white">
      <Hero />
      <UsageSection />
      <Divider />
      <WhatIsXen />
      <Divider />
      <WorkshopOfferings />
      <Divider />
      <XenTools />
      <RecentProject />
      <Divider />
      <ConnectBanner />
      <Footer />
    </div>
  )
}
