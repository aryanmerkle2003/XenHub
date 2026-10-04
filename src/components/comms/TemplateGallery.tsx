import { useState } from 'react'
import linkPre from '../../assets/images/comms/link-pre.svg'
import linkPost from '../../assets/images/comms/link-post.svg'
import linkDisabled from '../../assets/images/comms/link-disabled.svg'
import {
  commsTemplates,
  type CommsPhase,
  type CommsTemplate,
} from '../../data/commsTemplates'

const phases: { key: CommsPhase; label: string }[] = [
  { key: 'pre', label: 'Pre Workshop' },
  { key: 'post', label: 'Post Workshop' },
]

const styles = {
  pre: {
    chipActive: 'bg-[#0328d1] text-white',
    chipIdle: 'border border-[#e5e7eb] bg-[#f3f4f6] text-[#5d3abf]',
    timing: 'border-[#d7deff] text-[#1e1eb5]',
    link: 'border-[#d7deff] hover:bg-[#f2f5ff]',
    linkIcon: linkPre,
  },
  post: {
    chipActive: 'bg-[#5d3abf] text-white',
    chipIdle: 'border border-[#e5e7eb] bg-[#f3f4f6] text-[#0328d1]',
    timing: 'border-[#e5e7eb] text-[#5d3abf]',
    link: 'border-[#ebe4ff] hover:bg-[#f7f3ff]',
    linkIcon: linkPost,
  },
}

function TemplateCard({ template, phase }: { template: CommsTemplate; phase: CommsPhase }) {
  const s = styles[phase]
  const enabled = Boolean(template.figmaUrl)
  const buttonBase = 'flex items-center rounded-lg border bg-white px-3 py-2 transition-colors'

  return (
    <div className="flex flex-col rounded-xl border border-[#e4e4e4] bg-[#fcfcfc]">
      <div className="flex flex-col gap-4 p-5">
        <div className="flex flex-col">
          <div className="flex items-start gap-2.5">
            <div className="flex min-w-0 flex-1 flex-col gap-2">
              <img src={template.icon} alt="" className="size-6" />
              <p className="truncate text-sm font-semibold leading-6 text-[#05051e]">
                {template.title}
              </p>
            </div>
            {!enabled && (
              <span className="flex h-[22px] shrink-0 items-center rounded bg-[#f2f2f4] px-1.5 text-[9px] text-[#60607d]">
                coming soon
              </span>
            )}
          </div>
          <p className="text-[13px] leading-[18px] text-[#374151]">{template.format}</p>
        </div>
        <div className="flex items-center justify-between">
          <span
            className={`rounded-lg border bg-white px-3 py-2 text-[13px] font-semibold ${s.timing}`}
          >
            {template.timing}
          </span>
          {enabled ? (
            <a
              href={template.figmaUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${template.title} in Figma`}
              className={`${buttonBase} ${s.link}`}
            >
              <img src={s.linkIcon} alt="" className="size-[15px]" />
            </a>
          ) : (
            <button
              type="button"
              disabled
              aria-label={`${template.title} is coming soon`}
              className={`${buttonBase} cursor-not-allowed border-[#d6d6df]`}
            >
              <img src={linkDisabled} alt="" className="size-[15px]" />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default function TemplateGallery() {
  const [phase, setPhase] = useState<CommsPhase>('pre')

  return (
    <div id="template-gallery" className="flex w-full flex-col gap-5">
      <div className="flex flex-col gap-1.5 text-[#6b7280]">
        <p className="text-[13px] font-semibold uppercase tracking-[1.5px]">Template Gallery</p>
        <p className="text-sm leading-[22px]">
          Browse the full communication set grouped by phase and ready to use in Figma.
          {phase === 'pre' && ' The Figma file'}
          {phase === 'post' && ' It'} includes detailed "How to" guides for each template -
          covering Objective, Format, Sender, and Email Subject.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {phases.map((p) => {
          const active = p.key === phase
          const chip = styles[p.key]
          return (
            <button
              key={p.key}
              type="button"
              onClick={() => setPhase(p.key)}
              aria-pressed={active}
              className={`rounded-[20px] px-4 py-2 text-[13px] font-semibold transition-colors ${
                active ? chip.chipActive : chip.chipIdle
              }`}
            >
              {p.label}
            </button>
          )
        })}
      </div>

      <div key={phase} className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2">
        {commsTemplates[phase].map((template) => (
          <TemplateCard key={template.title} template={template} phase={phase} />
        ))}
      </div>
    </div>
  )
}
