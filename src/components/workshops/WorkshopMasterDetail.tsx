import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import downloadIcon from '../../assets/images/download-icon.svg'
import slide1 from '../../assets/images/slide-1.jpg'
import slide2 from '../../assets/images/slide-2.png'
import slide3 from '../../assets/images/slide-3.jpg'
import { workshops } from '../../data/workshops'
import WorkshopJourney from './WorkshopJourney'

const placeholderSlides = [slide1, slide3, slide2]

export default function WorkshopMasterDetail() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeWorkshop = workshops[activeIndex]

  return (
    <div className="flex w-full items-start gap-5">
      <div className="flex w-[230px] shrink-0 flex-col gap-0.5">
        {workshops.map((workshop, i) => {
          const active = i === activeIndex
          return (
            <button
              key={workshop.id}
              type="button"
              onClick={() => setActiveIndex(i)}
              aria-selected={active}
              className={`flex items-center gap-2.5 rounded-[10px] px-3.5 py-3 text-left transition-colors ${
                active ? 'bg-brand text-white' : 'bg-white text-[#111827] hover:bg-[#f6f7f9]'
              }`}
            >
              <span
                className={`text-[11px] font-semibold ${active ? 'text-white/65' : 'text-[#a6abb5]'}`}
              >
                {workshop.number}
              </span>
              <span className="text-[13px] font-medium">{workshop.title}</span>
            </button>
          )
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeWorkshop.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="flex flex-1 flex-col gap-6 rounded-2xl bg-[#f6f7f9] px-8 py-8"
        >
          <h3 className="text-xl font-bold leading-[1.3] text-[#111827]">
            {activeWorkshop.heading}
          </h3>

          <div className="flex flex-col gap-2">
            <p className="text-[11px] font-bold tracking-[0.88px] text-brand-dark">OVERVIEW</p>
            <p className="text-sm leading-[1.65] text-[#4b5563]">{activeWorkshop.overview}</p>
          </div>

          <div className="flex w-full gap-4">
            {placeholderSlides.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${activeWorkshop.id}-overview-slide-${i + 1}`}
                className={`h-[160px] rounded-[10px] object-cover ${
                  i === 1 ? 'flex-1' : 'w-[252px] shrink-0'
                }`}
              />
            ))}
          </div>

          <WorkshopJourney phases={activeWorkshop.phases} />

          <button
            type="button"
            className="flex w-fit items-center gap-2 rounded-lg bg-brand px-4 py-2.5 text-[13px] font-medium text-white transition-colors hover:bg-brand-dark"
          >
            <img src={downloadIcon} alt="" className="size-4" />
            Download Workshop Brief
          </button>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
