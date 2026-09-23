import type { ReactNode } from 'react'
import Sidebar from '../components/nav/Sidebar'

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-white">
      <Sidebar />
      <div className="ml-[260px]">{children}</div>
    </div>
  )
}
