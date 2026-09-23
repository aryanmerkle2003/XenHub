import { motion } from 'framer-motion'
import iconLearn from '../../assets/images/icon-learn.svg'
import iconPitch from '../../assets/images/icon-pitch.svg'
import iconActivate from '../../assets/images/icon-activate.svg'
import Reveal from '../Reveal'

const cards = [
  {
    icon: iconLearn,
    accent: '#1e1eb5',
    title: 'Learn',
    description: 'Understand Merkle XEN, its offerings, and how it can help you',
  },
  {
    icon: iconPitch,
    accent: '#9933cc',
    title: 'Pitch',
    description: "Showcase Merkle XEN's capabilities and success stories",
  },
  {
    icon: iconActivate,
    accent: '#00a68c',
    title: 'Activate',
    description: 'Equip yourself to think like a Merkle XEN Practitioner',
  },
]

export default function UsageSection() {
  return (
    <section className="flex w-full flex-col gap-8 px-6 py-14 md:px-[76px] md:py-[56px]">
      <Reveal>
        <h2 className="text-2xl font-semibold text-ink md:text-[36px]">
          How to use the XEN HUB
        </h2>
      </Reveal>

      <div className="flex flex-col gap-5 md:flex-row">
        {cards.map((card, i) => (
          <Reveal key={card.title} delay={i * 0.1} className="flex-1">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="flex h-full min-h-[214px] flex-col gap-3 rounded-xl border border-[#ededed] bg-surface p-6"
            >
              <div
                className="h-1 w-10 rounded-full"
                style={{ backgroundColor: card.accent }}
              />
              <div className="flex size-9 items-center justify-center overflow-clip rounded-lg bg-icon-bg">
                <img src={card.icon} alt="" className="size-6" />
              </div>
              <p className="text-lg font-semibold" style={{ color: card.accent }}>
                {card.title}
              </p>
              <p className="text-sm leading-[22px] text-body">
                {card.description}
              </p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
