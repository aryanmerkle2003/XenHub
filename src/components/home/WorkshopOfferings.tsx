import { motion } from 'framer-motion'
import decorCell1 from '../../assets/images/decor-cell-1.svg'
import decorCell2 from '../../assets/images/decor-cell-2.svg'
import decorCell3 from '../../assets/images/decor-cell-3.svg'
import decorCell4 from '../../assets/images/decor-cell-4.svg'
import decorCell5 from '../../assets/images/decor-cell-5.svg'
import decorCell6 from '../../assets/images/decor-cell-6.svg'
import decorCell7 from '../../assets/images/decor-cell-7.svg'
import decorCell8 from '../../assets/images/decor-cell-8.svg'
import group128 from '../../assets/images/group128.svg'
import group130 from '../../assets/images/group130.svg'
import group133 from '../../assets/images/group133.svg'
import group134 from '../../assets/images/group134.svg'
import Reveal from '../Reveal'

type Workshop = {
  title: string
  gradient: string
}

const workshops: Workshop[] = [
  {
    title: 'Vision Alignment & Roadmapping',
    gradient: 'linear-gradient(153deg, #141473 0%, #401fa6 71%)',
  },
  {
    title: 'Discovery & Definition',
    gradient: 'linear-gradient(90deg, #2e26c7 0%, #5938d9 100%)',
  },
  {
    title: 'Business AI',
    gradient: 'linear-gradient(21deg, #5926bf 14%, #8c40d9 86%)',
  },
  {
    title: 'Process Design',
    gradient: 'linear-gradient(90deg, #732eb8 0%, #9e4794 100%)',
  },
  {
    title: 'Experience Design Trends Alignment',
    gradient: 'linear-gradient(159deg, #1e1eb5 20%, #2640e5 80%)',
  },
  {
    title: 'Product Adoption & Retention',
    gradient: 'linear-gradient(90deg, #0d0f59 0%, #1f1a8c 100%)',
  },
  {
    title: 'Service Design',
    gradient: 'linear-gradient(124deg, #8c2680 0%, #b84073 100%)',
  },
  {
    title: 'Solution Rollout Strategy',
    gradient: 'linear-gradient(90deg, #0f3380 0%, #1a4db2 100%)',
  },
]

function WorkshopCard({ title, gradient }: Workshop) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="flex h-[130px] w-full items-end overflow-clip rounded-lg p-4 shrink-0 md:w-[346px]"
      style={{ backgroundImage: gradient }}
    >
      <p className="text-base font-semibold leading-[1.25] text-white">
        {title}
      </p>
    </motion.div>
  )
}

function DecorCell({
  src,
  bg,
  className = '',
}: {
  src: string
  bg?: string
  className?: string
}) {
  return (
    <div
      className={`hidden h-[130px] w-[171px] shrink-0 overflow-clip rounded-lg md:block ${className}`}
      style={bg ? { backgroundColor: bg } : undefined}
    >
      <img src={src} alt="" className="size-full object-contain" />
    </div>
  )
}

export default function WorkshopOfferings() {
  return (
    <section
      id="workshops"
      className="flex w-full flex-col gap-7 px-6 py-14 md:px-[76px] md:py-[56px]"
    >
      <Reveal>
        <h2 className="text-2xl font-semibold text-ink md:text-[36px]">
          Workshop Offerings
        </h2>
        <p className="mt-2 max-w-[860px] text-[15px] leading-6 text-body">
          Eight workshop offerings designed to help organizations align on
          priorities, uncover opportunities, design solutions, and drive
          adoption — from defining the roadmap to rolling out what is built.
        </p>
      </Reveal>

      {/* Desktop "lego grid" layout matching the design */}
      <div className="hidden w-full flex-col items-end gap-1.5 rounded-xl bg-white md:flex">
        <div className="flex w-full items-center gap-1.5">
          <WorkshopCard {...workshops[0]} />
          <DecorCell src={decorCell1} />
          <WorkshopCard {...workshops[1]} />
        </div>
        <div className="flex w-full items-center gap-1.5">
          <WorkshopCard {...workshops[2]} />
          <DecorCell src={group134} bg="#edf2fa" />
          <DecorCell src={group133} bg="#f7edf2" />
          <WorkshopCard {...workshops[3]} />
          <DecorCell src={decorCell2} />
        </div>
        <div className="flex w-full items-center gap-1.5">
          <DecorCell src={decorCell3} />
          <WorkshopCard {...workshops[4]} />
          <DecorCell src={decorCell4} />
          <WorkshopCard {...workshops[5]} />
        </div>
        <div className="flex w-full items-center justify-between">
          <DecorCell src={decorCell5} />
          <div className="flex items-center gap-1.5">
            <DecorCell src={decorCell6} />
            <WorkshopCard {...workshops[6]} />
            <DecorCell src={group130} bg="#f0f7f7" />
          </div>
        </div>
        <div className="flex w-full items-center gap-1.5">
          <DecorCell src={decorCell7} />
          <WorkshopCard {...workshops[7]} />
          <DecorCell src={decorCell8} />
          <DecorCell src={group128} bg="#f7f0f0" />
        </div>
      </div>

      {/* Mobile: simple responsive grid of the workshop cards */}
      <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 md:hidden">
        {workshops.map((w) => (
          <WorkshopCard key={w.title} {...w} />
        ))}
      </div>
    </section>
  )
}
