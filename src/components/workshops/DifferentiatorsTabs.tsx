import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import slide1 from '../../assets/images/slide-1.jpg'
import slide2 from '../../assets/images/slide-2.png'
import slide3 from '../../assets/images/slide-3.jpg'
import { differentiatorGroups, differentiatorTabs } from '../../data/differentiators'

const placeholderSlides = [slide1, slide2, slide3]

export default function DifferentiatorsTabs() {
  const [activeKey, setActiveKey] = useState(differentiatorTabs[0].key)

  return (
    <div className="flex w-full flex-col items-start">
      <div className="flex w-full items-start gap-1 border-b border-[#e5e7eb]">
        {differentiatorTabs.map((tab) => {
          const active = tab.key === activeKey
          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveKey(tab.key)}
              aria-selected={active}
              className="group flex flex-col items-center gap-2 pt-3"
            >
              <span
                className={`whitespace-nowrap px-1 text-sm transition-colors ${
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
          key={activeKey}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="grid w-full grid-cols-1 gap-x-8 gap-y-6 py-8 sm:grid-cols-2"
        >
          {differentiatorGroups.map((group) => (
            <div key={group.key} className="flex flex-col gap-2">
              <p className="text-[11px] font-bold tracking-[0.88px]">
                <span className="text-black">Make it </span>
                <span className="text-brand-dark">{group.highlight}</span>
              </p>
              <div className="flex h-[142px] w-full gap-2">
                {placeholderSlides.slice(0, group.slideCount).map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`${activeKey}-${group.key}-slide-${i + 1}`}
                    className="h-full flex-1 rounded-[10px] object-cover"
                  />
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
