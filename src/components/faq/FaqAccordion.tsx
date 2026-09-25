import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import iconChevronFaqOpen from '../../assets/images/icon-chevron-faq-open.svg'
import iconChevronFaqClosed from '../../assets/images/icon-chevron-faq-closed.svg'
import { faqSections } from '../../data/faqs'

function FaqRow({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div
      className={`w-full rounded-[10px] border p-4 transition-colors ${
        isOpen ? 'border-[#edeff2] bg-[#f9fafb]' : 'border-[#edeff2] bg-white'
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <p className="text-[15px] font-semibold leading-[1.4] text-[#111827]">{question}</p>
        <img
          src={isOpen ? iconChevronFaqOpen : iconChevronFaqClosed}
          alt=""
          className="size-6 shrink-0"
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pt-3 text-sm leading-[22px] text-[#6b7280]">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FaqAccordion() {
  const [openQuestions, setOpenQuestions] = useState<Set<string>>(
    () => new Set([faqSections[0].faqs[0].question]),
  )

  const toggleQuestion = (question: string) => {
    setOpenQuestions((prev) => {
      const next = new Set(prev)
      if (next.has(question)) {
        next.delete(question)
      } else {
        next.add(question)
      }
      return next
    })
  }

  return (
    <div className="flex w-full flex-col gap-10">
      {faqSections.map((section) => (
        <div key={section.id} id={section.id} className="flex w-full flex-col gap-4">
          <p className="text-base font-semibold uppercase tracking-[0.5px] text-brand-dark">
            {section.topic}
          </p>
          <div className="flex w-full flex-col gap-2.5">
            {section.faqs.map((faq) => (
              <FaqRow
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                isOpen={openQuestions.has(faq.question)}
                onToggle={() => toggleQuestion(faq.question)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
