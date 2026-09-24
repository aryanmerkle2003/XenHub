import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
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
  backTitle?: string
  description: string
  gradient: string
}

const workshops: Workshop[] = [
  {
    title: 'Vision Alignment & Roadmapping',
    description:
      'Align leaders on the future direction and build a feasible 3–5 year roadmap, bringing together C-suite, executives, product owners, and key stakeholders.',
    gradient: 'linear-gradient(153deg, #141473 0%, #401fa6 71%)',
  },
  {
    title: 'Discovery & Definition',
    description:
      'Solve specific business challenges through cross-functional collaboration, grounded in extensive research, industry benchmarking, and competitor analysis.',
    gradient: 'linear-gradient(90deg, #2e26c7 0%, #5938d9 100%)',
  },
  {
    title: 'Business AI',
    backTitle: 'Business AI Workshop',
    description:
      "Help organizations move forward on their AI journey — from identifying what's possible to defining relevant use cases and building an AI roadmap.",
    gradient: 'linear-gradient(21deg, #5926bf 14%, #8c40d9 86%)',
  },
  {
    title: 'Process Design',
    description:
      'Identify gaps and opportunities across teams and processes, with a focus on improving efficiency and exploring opportunities for automation.',
    gradient: 'linear-gradient(90deg, #732eb8 0%, #9e4794 100%)',
  },
  {
    title: 'Experience Design Trends Alignment',
    description:
      "Explore emerging experience trends and identify those most relevant to the organization, helping teams align their experience strategy with what's next.",
    gradient: 'linear-gradient(159deg, #1e1eb5 20%, #2640e5 80%)',
  },
  {
    title: 'Product Adoption & Retention',
    description:
      'Plan for adoption from the start, helping teams prepare for rollout and maximize how effectively customers or employees use the solution.',
    gradient: 'linear-gradient(90deg, #0d0f59 0%, #1f1a8c 100%)',
  },
  {
    title: 'Service Design',
    description:
      'Design better customer journeys by bringing together technology, operations, marketing, and other functions that collectively shape the service experience.',
    gradient: 'linear-gradient(124deg, #8c2680 0%, #b84073 100%)',
  },
  {
    title: 'Solution Rollout Strategy',
    description:
      'Plan how a solution moves into the organization — from rollout phases and communication to the teams needed to drive effective adoption.',
    gradient: 'linear-gradient(90deg, #0f3380 0%, #1a4db2 100%)',
  },
]

const FLIP_BACK_DELAY_MS = 15000

function WorkshopCard({ title, backTitle, description, gradient }: Workshop) {
  const [flipped, setFlipped] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  const toggleFlip = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setFlipped((prev) => {
      const next = !prev
      if (next) {
        timeoutRef.current = setTimeout(() => setFlipped(false), FLIP_BACK_DELAY_MS)
      }
      return next
    })
  }

  return (
    <motion.button
      type="button"
      onClick={toggleFlip}
      aria-pressed={flipped}
      aria-label={`${title} — click to ${flipped ? 'hide' : 'show'} description`}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
      className="relative h-[130px] w-full shrink-0 rounded-lg text-left md:w-[346px]"
      style={{ perspective: '1000px' }}
    >
      <motion.div
        className="relative size-full rounded-lg"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateX: flipped ? 180 : 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <div
          className="absolute inset-0 flex items-end overflow-clip rounded-lg p-4 [backface-visibility:hidden]"
          style={{ backgroundImage: gradient }}
        >
          <p className="text-base font-semibold leading-[1.25] text-white">
            {title}
          </p>
        </div>
        <div
          className="absolute inset-0 flex flex-col gap-2 overflow-clip rounded-lg px-4 pb-[11px] pt-4 [backface-visibility:hidden]"
          style={{ backgroundImage: gradient, transform: 'rotateX(180deg)' }}
        >
          <p className="text-[10px] font-bold text-white">{backTitle ?? title}</p>
          <p className="text-[13px] leading-[1.5] text-[#e5e5ed]">{description}</p>
        </div>
      </motion.div>
    </motion.button>
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
