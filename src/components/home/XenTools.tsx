import { motion } from 'framer-motion'
import Reveal from '../Reveal'

export default function XenTools() {
  return (
    <section className="flex w-full flex-col px-6 py-14 md:px-[76px] md:py-[56px]">
      <div className="flex flex-col-reverse items-center gap-8 md:flex-row md:gap-12">
        <Reveal className="h-[220px] w-full shrink-0 rounded-xl bg-surface md:h-[294px] md:w-[360px]" />

        <Reveal delay={0.1} className="flex flex-1 flex-col items-start gap-4">
          <h2 className="text-2xl font-semibold text-ink md:text-[36px]">
            XENTools
          </h2>
          <p className="text-[15px] leading-6 text-body">
            XENTools are our workshop enablers. They are practical design
            doing tools that help us navigate problem-solving with clarity
            and purpose.
          </p>
          <motion.a
            href="#"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex h-[41px] items-center justify-center gap-2 rounded-lg border border-brand-dark px-5 text-sm font-semibold text-brand-dark transition-colors hover:bg-brand-dark hover:text-white"
          >
            Know more
            <span aria-hidden>→</span>
          </motion.a>
        </Reveal>
      </div>
    </section>
  )
}
