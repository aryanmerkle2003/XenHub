import iconList from '../../assets/images/icon-list.svg'
import { useScrollSpy } from '../../hooks/useScrollSpy'

export type PageSection = {
  id: string
  label: string
}

export default function OnThisPage({ sections }: { sections: PageSection[] }) {
  const activeId = useScrollSpy(sections.map((s) => s.id))

  return (
    <div className="sticky top-8 flex w-[200px] shrink-0 flex-col gap-1">
      <div className="flex items-center gap-1.5 pb-3.5">
        <img src={iconList} alt="" className="size-3.5" />
        <p className="text-[11px] font-semibold uppercase text-[#6b7280]">
          On this page
        </p>
      </div>
      {sections.map((section) => {
        const active = section.id === activeId
        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="flex items-start rounded-lg"
          >
            <span
              className={`h-9 w-0.5 shrink-0 rounded-sm transition-colors ${
                active ? 'bg-[#2855f5]' : 'bg-[#e5e7eb]'
              }`}
            />
            <span
              className={`flex-1 rounded-lg px-3 py-2 text-[13px] leading-[1.4] transition-colors ${
                active ? 'font-medium text-[#2855f5]' : 'text-[#6b7280]'
              }`}
            >
              {section.label}
            </span>
          </a>
        )
      })}
    </div>
  )
}
