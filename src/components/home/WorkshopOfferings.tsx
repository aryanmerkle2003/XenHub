import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import row1Decor from '../../assets/images/row1-decor.svg'
import row2DecorAIcon from '../../assets/images/row2-decor-a-icon.svg'
import row2DecorBIcon from '../../assets/images/row2-decor-b-icon.svg'
import row3DecorA from '../../assets/images/row3-decor-a.svg'
import row3DecorB from '../../assets/images/row3-decor-b.svg'
import row4DecorA from '../../assets/images/row4-decor-a.svg'
import row4DecorB from '../../assets/images/row4-decor-b.svg'
import row4DecorC from '../../assets/images/row4-decor-c.svg'
import row4DecorDIcon from '../../assets/images/row4-decor-d-icon.svg'
import row5DecorA from '../../assets/images/row5-decor-a.svg'
import row5DecorB from '../../assets/images/row5-decor-b.svg'
import row5DecorCIcon from '../../assets/images/row5-decor-c-icon.svg'
import Reveal from '../Reveal'

type Workshop = {
  title: string
  titleLines: string[]
  backTitle?: string
  description: string
  gradient: string
}

const workshops: Workshop[] = [
  {
    title: 'Vision Alignment & Roadmapping',
    titleLines: ['Vision Alignment', '& Roadmapping'],
    description:
      'Align leaders on the future direction and build a feasible 3–5 year roadmap, bringing together C-suite, executives, product owners, and key stakeholders.',
    gradient: 'linear-gradient(153deg, #141473 0%, #401fa6 71%)',
  },
  {
    title: 'Discovery & Definition',
    titleLines: ['Discovery', '& Definition'],
    description:
      'Solve specific business challenges through cross-functional collaboration, grounded in extensive research, industry benchmarking, and competitor analysis.',
    gradient: 'linear-gradient(90deg, #2e26c7 0%, #5938d9 100%)',
  },
  {
    title: 'Business AI',
    titleLines: ['Business AI'],
    backTitle: 'Business AI Workshop',
    description:
      "Help organizations move forward on their AI journey — from identifying what's possible to defining relevant use cases and building an AI roadmap.",
    gradient: 'linear-gradient(21deg, #5926bf 14%, #8c40d9 86%)',
  },
  {
    title: 'Process Design',
    titleLines: ['Process', 'Design'],
    description:
      'Identify gaps and opportunities across teams and processes, with a focus on improving efficiency and exploring opportunities for automation.',
    gradient: 'linear-gradient(90deg, #732eb8 0%, #9e4794 100%)',
  },
  {
    title: 'Experience Design Trends Alignment',
    titleLines: ['Experience Design', 'Trends Alignment'],
    description:
      "Explore emerging experience trends and identify those most relevant to the organization, helping teams align their experience strategy with what's next.",
    gradient: 'linear-gradient(159deg, #1e1eb5 20%, #2640e5 80%)',
  },
  {
    title: 'Product Adoption & Retention',
    titleLines: ['Product Adoption', '& Retention'],
    description:
      'Plan for adoption from the start, helping teams prepare for rollout and maximize how effectively customers or employees use the solution.',
    gradient: 'linear-gradient(90deg, #0d0f59 0%, #1f1a8c 100%)',
  },
  {
    title: 'Service Design',
    titleLines: ['Service', 'Design'],
    description:
      'Design better customer journeys by bringing together technology, operations, marketing, and other functions that collectively shape the service experience.',
    gradient: 'linear-gradient(124deg, #8c2680 0%, #b84073 100%)',
  },
  {
    title: 'Solution Rollout Strategy',
    titleLines: ['Solution Rollout', 'Strategy'],
    description:
      'Plan how a solution moves into the organization — from rollout phases and communication to the teams needed to drive effective adoption.',
    gradient: 'linear-gradient(90deg, #0f3380 0%, #1a4db2 100%)',
  },
]

const FLIP_BACK_DELAY_MS = 15000

function WorkshopCard({ titleLines, backTitle, title, description, gradient }: Workshop) {
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
          className="absolute inset-0 flex flex-col items-start justify-end overflow-clip rounded-lg p-4 [backface-visibility:hidden]"
          style={{ backgroundImage: gradient }}
        >
          {titleLines.map((line) => (
            <p key={line} className="text-base font-semibold leading-[1.25] text-white">
              {line}
            </p>
          ))}
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

/** A decor cell whose background + icon are baked into a single SVG. */
function DecorCellFull({ src, className = '' }: { src: string; className?: string }) {
  return (
    <div
      className={`relative hidden h-[130px] w-[171px] shrink-0 overflow-clip rounded-lg md:block ${className}`}
    >
      <img src={src} alt="" className="absolute inset-0 size-full" />
    </div>
  )
}

/** A decor cell with a solid background and a separate icon inset at an exact, design-specified padding. */
function DecorCellIcon({
  src,
  bg,
  inset,
  className = '',
}: {
  src: string
  bg: string
  inset: string
  className?: string
}) {
  return (
    <div
      className={`relative hidden h-[130px] w-[171px] shrink-0 overflow-clip rounded-lg md:block ${className}`}
      style={{ backgroundColor: bg }}
    >
      <div className="relative size-full">
        <div className="absolute" style={{ inset }}>
          <img src={src} alt="" className="absolute inset-0 size-full" />
        </div>
      </div>
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

      {/* Desktop "lego grid" layout matching the design exactly: row alignment,
          decor cell order, and icon insets are intentionally hardcoded to
          match the Figma spec — do not rearrange. */}
      <div className="hidden w-full flex-col gap-1 rounded-xl bg-white md:flex">
        <div className="flex w-full items-center justify-end gap-1.5">
          <WorkshopCard {...workshops[0]} />
          <DecorCellFull src={row1Decor} />
          <WorkshopCard {...workshops[1]} />
        </div>
        <div className="flex w-full items-center gap-1.5">
          <WorkshopCard {...workshops[2]} />
          <DecorCellIcon
            src={row2DecorAIcon}
            bg="#edf2fa"
            inset="15.63% 23.87% 15.62% 23.87%"
          />
          <DecorCellIcon src={row2DecorBIcon} bg="#f7edf2" inset="22.5% 29.59%" />
          <WorkshopCard {...workshops[3]} />
        </div>
        <div className="flex w-full items-center justify-end gap-1.5">
          <DecorCellFull src={row3DecorA} />
          <WorkshopCard {...workshops[4]} />
          <DecorCellFull src={row3DecorB} />
          <WorkshopCard {...workshops[5]} />
        </div>
        <div className="flex w-full items-center gap-1.5">
          <DecorCellFull src={row4DecorA} />
          <DecorCellFull src={row4DecorB} />
          <DecorCellFull src={row4DecorC} />
          <WorkshopCard {...workshops[6]} />
          <DecorCellIcon src={row4DecorDIcon} bg="#f0f7f7" inset="30% 28.65% 30.77% 28.65%" />
        </div>
        <div className="flex w-full items-center justify-end gap-1.5">
          <WorkshopCard {...workshops[7]} />
          <DecorCellFull src={row5DecorA} />
          <DecorCellFull src={row5DecorB} />
          <DecorCellIcon src={row5DecorCIcon} bg="#f7f0f0" inset="22.5% 31.87%" />
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
