import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import {
  differentiatorTabs,
  type DifferentiatorGroup,
  type DifferentiatorSlide,
} from '../../data/differentiators'

function GroupHeading({ highlight }: { highlight: string }) {
  return (
    <p className="text-[11px] font-bold uppercase tracking-[0.88px]">
      <span className="text-black">Make it </span>
      <span className="text-brand-dark">{highlight}</span>
    </p>
  )
}

function SlideCard({
  slide,
  alt,
  fixedHeight,
}: {
  slide: DifferentiatorSlide
  alt: string
  fixedHeight: boolean
}) {
  return (
    <div className="flex min-h-0 min-w-0 flex-1 flex-col gap-2">
      <div
        className={`relative w-full overflow-hidden rounded-[10px] ${
          fixedHeight ? 'h-[142px]' : 'min-h-0 flex-1'
        }`}
      >
        {slide.crop ? (
          <img
            src={slide.src}
            alt={alt}
            className="absolute top-0 h-full max-w-none"
            style={{ left: slide.crop.left, width: slide.crop.width }}
          />
        ) : (
          <img src={slide.src} alt={alt} className="absolute inset-0 size-full object-cover" />
        )}
      </div>
      <p className="text-xs font-semibold text-brand-dark">{slide.caption}</p>
    </div>
  )
}

function QuadGroup({ group, tabKey }: { group: DifferentiatorGroup; tabKey: string }) {
  return (
    <div className="flex flex-col gap-2">
      <GroupHeading highlight={group.highlight} />
      <div className="flex w-full gap-2">
        {group.slides.map((slide) => (
          <SlideCard
            key={slide.caption}
            slide={slide}
            alt={`${tabKey}-${group.highlight}-${slide.caption}`}
            fixedHeight
          />
        ))}
      </div>
    </div>
  )
}

function StackedColumn({
  group,
  rowSizes,
  tabKey,
}: {
  group: DifferentiatorGroup
  rowSizes: number[]
  tabKey: string
}) {
  let cursor = 0
  const rows = rowSizes.map((size) => {
    const slides = group.slides.slice(cursor, cursor + size)
    cursor += size
    return slides
  })
  return (
    <div className="flex flex-col gap-2 md:h-[380px] md:justify-between">
      <GroupHeading highlight={group.highlight} />
      <div className="flex h-[359px] w-full flex-col gap-2">
        {rows.map((row, i) => (
          <div key={i} className="flex min-h-0 flex-1 gap-2">
            {row.map((slide) => (
              <SlideCard
                key={slide.caption}
                slide={slide}
                alt={`${tabKey}-${slide.caption}`}
                fixedHeight={false}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function DifferentiatorsTabs() {
  const [activeKey, setActiveKey] = useState(differentiatorTabs[0].key)
  const activeTab = differentiatorTabs.find((tab) => tab.key === activeKey) ?? differentiatorTabs[0]

  return (
    <div className="flex w-full flex-col items-start">
      <div className="flex w-full items-start gap-[5px] overflow-x-auto border-b border-[#e5e7eb]">
        {differentiatorTabs.map((tab) => {
          const active = tab.key === activeKey
          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveKey(tab.key)}
              aria-selected={active}
              className="group flex shrink-0 flex-col items-center gap-2 px-6 pt-3 md:px-10"
            >
              <span
                className={`whitespace-nowrap text-sm transition-colors ${
                  active
                    ? 'font-semibold text-brand-dark'
                    : 'font-medium text-[#6b7280] group-hover:text-[#111827]'
                }`}
              >
                {tab.label}
              </span>
              <span
                className={`h-0.5 w-full rounded-sm transition-colors ${
                  active ? 'bg-brand-dark' : 'bg-[#d9d9d9] group-hover:bg-[#9ca3af]'
                }`}
              />
            </button>
          )
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab.key}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="w-full py-8"
        >
          {activeTab.layout === 'quad' ? (
            <div className="grid w-full grid-cols-1 gap-x-[30px] gap-y-6 md:grid-cols-2">
              {activeTab.columns.map((column, i) => (
                <div key={i} className="flex flex-col justify-between gap-6 md:h-[382px]">
                  {column.map((group) => (
                    <QuadGroup key={group.highlight} group={group} tabKey={activeTab.key} />
                  ))}
                </div>
              ))}
            </div>
          ) : (
            <div className="grid w-full grid-cols-1 gap-x-[30px] gap-y-6 md:grid-cols-3">
              {activeTab.columns.map((column, i) => (
                <StackedColumn
                  key={i}
                  group={column[0]}
                  rowSizes={activeTab.rows?.[i] ?? [column[0].slides.length]}
                  tabKey={activeTab.key}
                />
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
