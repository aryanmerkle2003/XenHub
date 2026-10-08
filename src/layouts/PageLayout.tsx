import type { ReactNode } from 'react'
import PageFooter from '../components/PageFooter'
import Sidebar from '../components/nav/Sidebar'

export default function PageLayout({
  children,
  footerClassName,
  hideFooter = false,
}: {
  children: ReactNode
  footerClassName?: string
  hideFooter?: boolean
}) {
  return (
    <div className="min-h-screen w-full bg-white">
      <Sidebar />
      <div className="ml-[260px] flex min-h-screen flex-col">
        <div className="flex flex-1 flex-col">{children}</div>
        {!hideFooter && <PageFooter className={footerClassName} />}
      </div>
    </div>
  )
}
