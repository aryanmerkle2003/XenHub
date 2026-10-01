import { motion } from 'framer-motion'
import { dotMatrixOpacities, toolCards } from '../../data/xenTools'

function DotMatrix() {
  return (
    <div className="grid grid-cols-5 grid-rows-4 gap-[6px]">
      {dotMatrixOpacities.map((opacity, index) => (
        <div
          key={index}
          className="size-[4px] rounded-full bg-white"
          style={{ opacity }}
        />
      ))}
    </div>
  )
}

export default function ToolCardShowcase() {
  return (
    <div
      className="relative mx-auto w-full max-w-[453px]"
      style={{ aspectRatio: '452.928 / 391.671' }}
    >
      {toolCards.map((card) => (
        <div
          key={card.id}
          className="absolute"
          style={{
            left: `${card.centerX}%`,
            top: `${card.centerY}%`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <motion.div
            className="flex h-[190px] w-[136px] flex-col overflow-hidden rounded-2xl p-3 shadow-[0px_14px_47px_0px_rgba(0,0,0,0.44)]"
            style={{ backgroundColor: card.color, rotate: card.rotate }}
            whileHover={{ scale: 1.08, zIndex: 20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="pointer-events-none absolute -top-6 right-0 size-[84px] rounded-full bg-white/[0.08]" />
            <div className="pointer-events-none absolute -bottom-6 -left-3 size-[95px] rounded-full bg-white/[0.04]" />

            <p className="relative text-[7px] font-bold uppercase tracking-[0.9px] text-white/55">
              {card.eyebrow}
            </p>
            <div className="relative flex flex-1 items-center justify-center">
              <DotMatrix />
            </div>
            <p className="relative text-[13px] font-extrabold tracking-[-0.26px] text-white">
              {card.title}
            </p>
          </motion.div>
        </div>
      ))}
    </div>
  )
}
