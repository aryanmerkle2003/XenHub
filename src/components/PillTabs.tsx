type PillTab = { key: string; label: string }

export default function PillTabs({
  tabs,
  activeKey,
  onChange,
}: {
  tabs: readonly PillTab[]
  activeKey: string
  onChange: (key: string) => void
}) {
  return (
    <div className="flex w-full flex-wrap gap-2">
      {tabs.map((tab) => {
        const active = tab.key === activeKey
        return (
          <button
            key={tab.key}
            type="button"
            onClick={() => onChange(tab.key)}
            aria-pressed={active}
            className={`rounded-[20px] px-4 py-2 text-[13px] font-semibold transition-colors ${
              active ? 'bg-[#0328d1] text-white' : 'text-[#0328d1]'
            }`}
          >
            {tab.label}
          </button>
        )
      })}
    </div>
  )
}
