import { Link, useLocation } from 'react-router-dom'
import xenHubLogo from '../../assets/images/xen-hub-logo.png'
import iconSearch from '../../assets/images/icon-search.svg'
import iconChevronDown from '../../assets/images/icon-chevron-down.svg'
import { navSections } from '../../data/navigation'

export default function Sidebar() {
  const { pathname } = useLocation()

  return (
    <aside className="fixed inset-y-0 left-0 z-20 flex w-[260px] flex-col overflow-y-auto border-r border-[#edeff2] bg-white p-4">
      <div className="flex flex-col gap-2">
        <Link to="/" className="flex items-center justify-center px-4 py-2.5">
          <img src={xenHubLogo} alt="XEN HUB" className="h-[34px] w-auto" />
        </Link>

        <div className="flex h-10 w-full items-center gap-[9px] rounded-[10px] border border-[#e5e7eb] px-3">
          <img src={iconSearch} alt="" className="size-4" />
          <span className="text-[13px] text-[#6b7280]">Search</span>
        </div>

        <nav className="flex flex-col gap-2">
          {navSections.map((section) => (
            <div key={section.title} className="flex flex-col gap-0.5">
              <div className="flex items-center rounded-md px-3 py-2">
                <p className="flex-1 text-[14px] font-semibold uppercase text-[#111827]">
                  {section.title}
                </p>
                <img src={iconChevronDown} alt="" className="h-1.5 w-3" />
              </div>
              {section.items.map((item) => {
                const active = item.to && pathname === item.to
                const content = (
                  <>
                    <span className="flex-1">{item.label}</span>
                    {item.comingSoon && (
                      <span className="rounded bg-[#f2f5ff] px-1.5 py-0.5 text-[9px] text-[#6b7280]">
                        Coming soon
                      </span>
                    )}
                  </>
                )
                const rowClasses = `flex items-center gap-2 rounded-lg py-[7px] pl-7 pr-3 text-[14px] transition-colors ${
                  active
                    ? 'bg-brand text-white'
                    : 'text-[#6b7280]'
                }`
                return item.to ? (
                  <Link key={item.label} to={item.to} className={rowClasses}>
                    {content}
                  </Link>
                ) : (
                  <span
                    key={item.label}
                    className={`${rowClasses} cursor-default`}
                  >
                    {content}
                  </span>
                )
              })}
            </div>
          ))}
        </nav>
      </div>

      <div className="min-h-9 flex-1" />

      <div className="flex flex-col gap-3">
        <Link
          to="/connect-with-us"
          className="flex h-[41px] w-full items-center justify-center rounded-lg bg-brand text-[14px] font-semibold text-white transition-colors hover:bg-brand-dark"
        >
          Connect with us
        </Link>
      </div>
    </aside>
  )
}
