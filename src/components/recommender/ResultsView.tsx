import { useState } from 'react'
import type { Tool } from '../../data/recommender'
import {
  ChevronRightIcon,
  ClockIcon,
  ExternalLinkIcon,
  PencilIcon,
  UsersIcon,
} from './icons'

type Props = {
  tools: Tool[]
  focusLabel: string
  outcomeLabel: string
  sentenceParts: string[]
  onEdit: () => void
}

const CARD_W = 467
const STRIP_W = 48

function ValueTag({ children }: { children: string }) {
  return (
    <span className="rounded-full bg-[#1e1eb5] px-3 py-1 text-[13px] font-semibold text-white">
      {children}
    </span>
  )
}

function ExpandedCard({ tool, index }: { tool: Tool; index: number }) {
  return (
    <div
      className="relative flex h-full flex-col justify-between overflow-hidden p-8"
      style={{ width: CARD_W }}
    >
      <div className="pointer-events-none absolute -right-[61px] -top-[71px] size-[220px] rounded-full bg-white/[0.12]" />
      <div className="pointer-events-none absolute -bottom-[91px] -left-[91px] size-[240px] rounded-full bg-white/[0.06]" />

      <div className="relative flex flex-col gap-3">
        <p className="text-[11px] font-semibold uppercase text-white/55">
          {String(index + 1).padStart(2, '0')}
        </p>
        <p className="text-[20px] font-bold leading-[1.3] text-white">
          {tool.name}
        </p>
        <p className="line-clamp-4 text-sm leading-[1.65] text-white/85">
          {tool.description}
        </p>
      </div>

      <div className="relative flex flex-col gap-3">
        <div className="flex items-center gap-4 text-[13px] text-white/85">
          <span className="flex items-center gap-1.5">
            <ClockIcon className="size-3.5" />
            {tool.duration}
          </span>
          <span className="flex items-center gap-1.5">
            <UsersIcon className="size-3.5" />
            {tool.teamSize}
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {tool.useCases.map((useCase) => (
            <span
              key={useCase}
              className="rounded border border-white/10 bg-white/[0.08] px-2.5 py-1 text-[11px] font-medium text-white"
            >
              {useCase}
            </span>
          ))}
        </div>
        {tool.figJamLink ? (
          <a
            href={tool.figJamLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-[41px] w-full items-center justify-center gap-2 rounded-lg bg-white text-sm font-semibold"
            style={{ color: tool.categoryColor }}
          >
            Open in FigJam
            <ExternalLinkIcon className="size-3.5" />
          </a>
        ) : null}
      </div>
    </div>
  )
}

function Strip({ tool, index }: { tool: Tool; index: number }) {
  return (
    <div className="flex h-full flex-col items-end justify-between p-4 text-white">
      <div className="flex flex-col items-end gap-2.5">
        <p className="text-[11px] font-semibold uppercase text-white/55">
          {String(index + 1).padStart(2, '0')}
        </p>
        <p
          className="whitespace-nowrap text-xs font-bold leading-[1.35]"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          {tool.name}
        </p>
      </div>
      <ChevronRightIcon className="size-3.5 self-start" />
    </div>
  )
}

export default function ResultsView({
  tools,
  focusLabel,
  outcomeLabel,
  sentenceParts,
  onEdit,
}: Props) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="flex w-full flex-col items-center gap-4">
      <h1 className="text-[36px] font-bold leading-[normal] text-[#111827]">
        Your XENTools
      </h1>

      <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-3 rounded-xl border border-[#1e1eb5] bg-[#f2f5ff] px-5 py-3">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-[15px] text-[#4b5563]">{sentenceParts[0]}</span>
          <ValueTag>{focusLabel}</ValueTag>
          <span className="text-[15px] text-[#4b5563]">{sentenceParts[1]}</span>
          <ValueTag>{outcomeLabel}</ValueTag>
        </div>
        <button
          type="button"
          onClick={onEdit}
          className="flex items-center gap-1 rounded-lg border border-[#e5e7eb] bg-white p-2 text-[13px] font-semibold text-[#1e1eb5] transition-colors hover:bg-[#f2f5ff]"
        >
          <PencilIcon className="size-3.5" />
          Edit Selection
        </button>
      </div>

      {tools.length === 0 ? (
        <p className="pt-8 text-sm text-[#6b7280]">
          No frameworks are mapped to this combination yet.
        </p>
      ) : (
        <>
          <p className="text-[13px] font-medium text-[#6b7280]">
            {tools.length === 1
              ? 'One clear winner for this combination.'
              : 'Ranked by best fit - tap any card to explore.'}
          </p>
          <div className="flex w-full flex-wrap items-center justify-center gap-6">
            {tools.map((tool, index) => {
              const active = index === activeIndex
              return (
                <div
                  key={tool.id}
                  role={active ? undefined : 'button'}
                  tabIndex={active ? undefined : 0}
                  onClick={() => setActiveIndex(index)}
                  onKeyDown={(e) => {
                    if (!active && (e.key === 'Enter' || e.key === ' ')) {
                      e.preventDefault()
                      setActiveIndex(index)
                    }
                  }}
                  className={`h-[342px] overflow-hidden border border-white/10 transition-[width,border-radius] duration-[420ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    active ? 'rounded-3xl' : 'cursor-pointer rounded-2xl'
                  }`}
                  style={{
                    width: active ? CARD_W : STRIP_W,
                    backgroundColor: tool.categoryColor,
                  }}
                >
                  {active ? (
                    <ExpandedCard tool={tool} index={index} />
                  ) : (
                    <Strip tool={tool} index={index} />
                  )}
                </div>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}
