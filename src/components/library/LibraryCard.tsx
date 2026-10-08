import { DynamicIcon, type IconName } from 'lucide-react/dynamic'
import type { Tool } from '../../data/recommender'
import { ClockIcon, ExternalLinkIcon, UsersIcon } from '../recommender/icons'

function iconName(iconClass?: string): IconName {
  const name = (iconClass ?? '')
    .replace(/^lucide\s+/i, '')
    .replace(/^lucide-/i, '')
    .trim()
    .toLowerCase()
  return (name || 'lightbulb') as IconName
}

type Props = { tool: Tool; color: string }

export default function LibraryCard({ tool, color }: Props) {
  return (
    <div
      className="group/card relative flex min-h-[334px] flex-col overflow-hidden rounded-2xl border border-[#edeff2] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.03)] transition-shadow duration-200 hover:shadow-[0px_13.5px_47.4px_0px_rgba(0,0,0,0.44)]"
      style={{ backgroundColor: color }}
    >
      <div className="pointer-events-none absolute -top-[42px] left-[96px] size-[150px] rounded-full bg-white/[0.08]" />
      <div className="pointer-events-none absolute -left-[25px] top-[227px] size-[170px] rounded-full bg-white/[0.04]" />

      <div className="relative flex flex-1 flex-col justify-between gap-4 p-5">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-[10px] border border-white/15 bg-white/[0.08] text-white">
              <DynamicIcon
                name={iconName(tool.iconClass)}
                fallback={() => null}
                className="size-5"
              />
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-1">
              <p className="text-[10px] font-bold uppercase tracking-[0.8px] text-white/70">
                {tool.category}
              </p>
              <p className="text-[15px] font-extrabold leading-5 text-white">
                {tool.name}
              </p>
            </div>
          </div>
          <p className="line-clamp-5 text-[13px] leading-[19px] text-white/80">
            {tool.description}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-3 text-xs text-white">
            <span className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.08] px-2 py-1">
              <ClockIcon className="size-3" />
              {tool.duration}
            </span>
            <span className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.08] px-2 py-1">
              <UsersIcon className="size-3" />
              {tool.teamSize}
            </span>
          </div>
          {tool.figJamLink ? (
            <a
              href={tool.figJamLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-[41px] w-full items-center justify-center gap-2 rounded-lg bg-white px-4 text-sm font-semibold text-[#1e1eb5]"
            >
              Open in FigJam
              <ExternalLinkIcon className="size-3" />
            </a>
          ) : (
            <div className="h-[41px]" />
          )}
        </div>
      </div>
    </div>
  )
}
