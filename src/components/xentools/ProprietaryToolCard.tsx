import { motion } from 'framer-motion'
import iconExternalLink from '../../assets/images/proprietary/external-link.svg'
import type { ProprietaryTool } from '../../data/proprietaryTools'

export default function ProprietaryToolCard({ title, description, icon, figJamUrl }: ProprietaryTool) {
  return (
    <div className="relative h-[334px] overflow-clip rounded-2xl border border-[#edeff2] bg-[#5d3abf] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.03)]">
      <div className="absolute left-[95.89px] top-[-41.8px] size-[149.596px] rounded-full bg-white/[0.08]" />
      <div className="absolute left-[-24.79px] top-[226.81px] size-[169.977px] rounded-full bg-white/[0.04]" />

      <div className="relative flex h-full flex-col justify-between p-5">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-[10px] border border-white/15 bg-white/[0.08]">
              <img src={icon} alt="" className="size-5" />
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-1">
              <p className="text-[10px] font-bold uppercase tracking-[0.8px] text-white/70">
                Proprietary
              </p>
              <p className="text-[15px] font-extrabold leading-5 text-white">{title}</p>
            </div>
          </div>
          <p className="text-[13px] leading-[19px] text-white/80">{description}</p>
        </div>

        <motion.a
          href={figJamUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${title} in FigJam`}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="flex h-[41px] w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-[#1e1eb5] transition-colors hover:bg-[#f2f5ff]"
        >
          Open in FigJam
          <img src={iconExternalLink} alt="" className="size-3" />
        </motion.a>
      </div>
    </div>
  )
}
