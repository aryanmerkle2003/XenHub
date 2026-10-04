import { motion } from 'framer-motion'
import iconLearn from '../../assets/images/icon-usage-learn.svg'
import iconPitch from '../../assets/images/icon-usage-pitch.svg'
import iconActivate from '../../assets/images/icon-usage-activate.svg'
import Reveal from '../Reveal'

const cards = [
  {
    icon: iconLearn,
    background: '#1f1a8c',
    title: 'Learn',
    description: 'Understand Merkle XEN, its offerings, and how it can help you',
  },
  {
    icon: iconPitch,
    background: '#8c2680',
    title: 'Pitch',
    description: "Showcase Merkle XEN's capabilities and success stories",
  },
  {
    icon: iconActivate,
    background: '#5926bf',
    title: 'Activate',
    description: 'Equip yourself to think like a Merkle XEN Practitioner',
  },
]

export default function UsageSection() {
  return (
    <section className="flex w-full flex-col gap-8 px-6 py-14 md:px-[76px] md:py-[56px]">
      <Reveal>
        <h2 className="text-2xl font-semibold text-[#121212] md:text-[36px]">
          How to use the XEN HUB
        </h2>
      </Reveal>

      <div className="flex flex-col gap-5 py-[17px] md:flex-row md:gap-[28px]">
        {cards.map((card, i) => (
          <Reveal key={card.title} delay={i * 0.1} className="flex-1">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="flex h-full flex-col justify-center gap-7 overflow-clip rounded-[20px] py-[22px] pl-7 pr-[34px] shadow-[0px_16px_30px_0px_rgba(0,0,0,0.14)]"
              style={{ backgroundColor: card.background }}
            >
              <div className="flex flex-col gap-3">
                <img src={card.icon} alt="" className="size-[42px]" />
                <p className="text-[28px] tracking-[-0.84px] text-white">
                  {card.title}
                </p>
              </div>
              <p className="text-base leading-normal text-white">
                {card.description}
              </p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
