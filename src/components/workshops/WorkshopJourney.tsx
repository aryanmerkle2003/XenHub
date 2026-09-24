import type { WorkshopPhase } from '../../data/workshops'

const circleColors = [
  '#2539D1',
  '#4D3FDA',
  '#6F46C8',
  '#8B4AB5',
  '#A5519F',
  '#BA5D89',
]

export default function WorkshopJourney({ phases }: { phases: WorkshopPhase[] }) {
  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full items-center justify-between pb-4">
        <p className="text-[11px] font-bold tracking-[0.88px] text-brand-dark">
          WORKSHOP JOURNEY
        </p>
        <span className="flex h-5 items-center justify-center rounded-full bg-brand/10 px-2 text-[10px] font-medium text-brand-dark">
          {phases.length} Phases
        </span>
      </div>

      <div className="flex flex-col gap-1 px-0.5 py-2">
        {phases.map((phase, i) => (
          <div key={phase.title} className="flex items-center gap-3">
            <span
              className="flex size-[58px] shrink-0 items-center justify-center rounded-full text-[17px] font-bold text-white"
              style={{ backgroundColor: circleColors[i % circleColors.length], opacity: 0.8 }}
            >
              {i + 1}
            </span>
            <div className="flex min-w-0 flex-1 flex-col gap-px">
              <p className="text-sm font-semibold text-[#111827]">{phase.title}</p>
              <p className="text-[11px] leading-[1.4] text-[#4b5563]">{phase.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
