import { motion } from 'framer-motion'
import xenConcept from '../../assets/images/xen-concept.png'
import Reveal from '../Reveal'

export default function WhatIsXen() {
  return (
    <section className="flex w-full flex-col px-6 py-14 md:px-[76px] md:py-[56px]">
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
        <Reveal className="flex flex-1 flex-col items-start gap-5">
          <h2 className="text-2xl font-semibold text-ink md:text-[36px]">
            What is XEN?
          </h2>
          <div className="flex flex-col gap-4 text-[15px] leading-[26px] text-body">
            <p>
              XEN is a unique offering that stems from the India Studio. It
              is a mindset and methodology for problem-solving, brought to
              life through research-driven, design-doing workshops.
            </p>
            <p>
              What sets the XEN methodology apart is an experience-centric
              approach that brings together multifunctional teams to
              co-create innovative solutions grounded in feasibility.
            </p>
          </div>
          <motion.a
            href="#workshops"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex h-[41px] items-center justify-center gap-2 rounded-lg border border-brand-dark px-5 text-sm font-semibold text-brand-dark transition-colors hover:bg-brand-dark hover:text-white"
          >
            Explore XEN
            <span aria-hidden>→</span>
          </motion.a>
        </Reveal>

        <Reveal delay={0.15} className="shrink-0">
          <img
            src={xenConcept}
            alt="Participants collaborating in a XEN workshop"
            className="h-[220px] w-full rounded-xl object-cover md:h-[280px] md:w-[380px]"
          />
        </Reveal>
      </div>
    </section>
  )
}
