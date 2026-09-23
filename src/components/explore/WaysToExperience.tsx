import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import slideLab from '../../assets/images/slide-1.jpg'
import sapAppHausLogo from '../../assets/images/sap-apphaus-logo.png'
import sapLogo from '../../assets/images/sap-logo.png'
import sliderPhoto from '../../assets/images/slider-photo.jpg'
import unwiredPlaceholder from '../../assets/images/unwired-placeholder.png'
import ComparisonSlider from './ComparisonSlider'

const tabs = [
  {
    key: 'lab',
    label: 'XEN LAB',
    paragraphs: [
      'XEN LABs are spaces crafted for design-doing, bringing the spirit and philosophy of XEN to life across Pune and Bangalore.',
      'They move beyond conventional workspace structures. They embrace the tension between chaos and order, giving teams the freedom to write, sketch, draw, prototype, and collaborate. A team certified to conduct design-doing sessions brings each space to life.',
      "We're proud to share that XEN LAB PNQ is recognised as India's first SAP AppHaus partner.",
    ],
  },
  {
    key: 'box',
    label: 'XEN-in-a-BOX',
    paragraphs: [
      'XEN-in-a-BOX takes the XEN experience beyond the XEN LAB through a portable format (quite literally in a suitcase) that can travel anywhere.',
      'It enables teams to recreate the hands-on, collaborative nature of XEN, wherever they come together to solve problems.',
    ],
  },
  {
    key: 'unwired',
    label: 'XEN Unwired',
    paragraphs: [
      'XEN Unwired extends the XEN experience into an interactive online format, enabling teams to collaborate, experiment, and explore together beyond the physical space.',
      'It brings the same spirit of design doing into virtual sessions, making XEN more accessible across locations.',
    ],
  },
] as const

const tabWidths: Record<string, string> = {
  lab: 'w-[92px]',
  box: 'w-[125px]',
  unwired: 'w-[120px]',
}

export default function WaysToExperience() {
  const [activeKey, setActiveKey] = useState<(typeof tabs)[number]['key']>('lab')
  const activeTab = tabs.find((tab) => tab.key === activeKey) ?? tabs[0]

  return (
    <div className="flex w-full flex-col items-start">
      <div className="flex w-full items-start border-b border-[#e5e7eb]">
        {tabs.map((tab) => {
          const active = tab.key === activeKey
          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveKey(tab.key)}
              aria-selected={active}
              className={`group flex flex-col items-center gap-2 pt-3 ${tabWidths[tab.key]}`}
            >
              <span
                className={`text-sm transition-colors ${
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
          className="flex w-full flex-col items-center gap-8 py-8 md:flex-row md:items-center"
        >
          <div className="flex-1">
            <div className="flex flex-col gap-4 text-[15px] leading-6 text-body">
              {activeTab.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {activeKey === 'lab' && (
                <p className="font-semibold text-brand-dark">
                  For more information, visit{' '}
                  <a
                    href="https://apphaus.sap.com/network/pune"
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    SAP AppHaus Network Pune page
                  </a>
                  .
                </p>
              )}
            </div>
          </div>

          <div className="flex shrink-0 flex-col items-start gap-8">
            {activeKey === 'lab' && (
              <>
                <img
                  src={slideLab}
                  alt="XEN LAB workspace"
                  className="h-[251px] w-full rounded-xl object-cover md:w-[326px]"
                />
                <div className="relative h-[59px] w-full overflow-hidden md:w-[326px]">
                  <img
                    src={sapAppHausLogo}
                    alt="Member of the SAP AppHaus Network"
                    className="absolute inset-0 size-full object-cover"
                  />
                  <img
                    src={sapLogo}
                    alt=""
                    className="absolute left-[49%] top-0 h-[33%] w-[10.5%] object-cover"
                  />
                </div>
              </>
            )}
            {activeKey === 'box' && (
              <ComparisonSlider
                image={sliderPhoto}
                beforeLabel="XEN-in-a-BOX, tinted view"
                afterLabel="XEN-in-a-BOX, natural view"
              />
            )}
            {activeKey === 'unwired' && (
              <img
                src={unwiredPlaceholder}
                alt="A XEN Unwired virtual session"
                className="h-[200px] w-full rounded-xl object-cover md:w-[326px]"
              />
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
