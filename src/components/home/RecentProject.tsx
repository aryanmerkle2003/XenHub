import { motion } from 'framer-motion'
import downloadIcon from '../../assets/images/download-icon.svg'
import Reveal from '../Reveal'

export default function RecentProject() {
  return (
    <section className="flex w-full flex-col px-6 py-14 md:px-[76px] md:py-[56px]">
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
        <Reveal className="relative flex h-[220px] w-full shrink-0 flex-col items-center justify-center gap-1 rounded-xl bg-surface md:h-[294px] md:w-[360px]">
          <span className="text-[10px] font-semibold tracking-[2px] text-black/70">
            XENBook of
          </span>
          <span className="text-center text-lg font-bold leading-normal text-black">
            Recent
            <br />
            Project
          </span>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-1 flex-col items-start gap-4">
          <h2 className="text-2xl font-semibold text-ink md:text-[36px]">
            Discovery Sprint Workshop
          </h2>
          <p className="text-[15px] leading-6 text-body">
            Explore this recent workshop—from discovery to outcomes.
            Download the XENBook for a concise guide to the workshop
            structure, key outputs, and next steps.
          </p>
          <motion.a
            href="#"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center gap-2 rounded-lg bg-brand px-4 py-2.5 text-[13px] font-medium text-white transition-colors hover:bg-brand-dark"
          >
            <img src={downloadIcon} alt="" className="size-4" />
            Download XENBook
          </motion.a>
        </Reveal>
      </div>
    </section>
  )
}
