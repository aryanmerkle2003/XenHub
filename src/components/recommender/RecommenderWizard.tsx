import { useRef, useState } from 'react'
import { useRecommenderData } from '../../contexts/RecommenderDataContext'
import FlyingChip, { type FlightRect } from './FlyingChip'
import OptionsPanel from './OptionsPanel'
import ResultsView from './ResultsView'
import SentencePicker, { filledPillClasses, pillBase } from './SentencePicker'
import { ArrowRightIcon } from './icons'

type Answers = { focus?: string; outcome?: string }

type Flight = {
  blank: 'focus' | 'outcome'
  value: string
  label: string
  from: FlightRect
  to: FlightRect
}

function measureFilledPill(label: string): { width: number; height: number } {
  const probe = document.createElement('span')
  probe.className = `${pillBase} ${filledPillClasses}`
  probe.style.cssText = 'position:fixed;left:-9999px;top:0;visibility:hidden'
  probe.textContent = label
  document.body.appendChild(probe)
  const { width, height } = probe.getBoundingClientRect()
  probe.remove()
  return { width, height }
}

function Message({ children }: { children: string }) {
  return <p className="text-sm text-[#6b7280]">{children}</p>
}

export default function RecommenderWizard() {
  const { questions, getOutcomesForFocus, getRecommendations, isLoading, error } =
    useRecommenderData()
  const [answers, setAnswers] = useState<Answers>({})
  const [showResults, setShowResults] = useState(false)
  const [flight, setFlight] = useState<Flight | null>(null)
  const focusPillRef = useRef<HTMLSpanElement>(null)
  const outcomePillRef = useRef<HTMLSpanElement>(null)

  if (isLoading) return <Message>Loading frameworks…</Message>
  if (error || questions.length === 0)
    return <Message>Couldn't load the XENTools data. Please try again later.</Message>

  const question = questions[0]
  const [focusBlank, outcomeBlank] = question.blanks
  const outcomeOptions = answers.focus ? getOutcomesForFocus(answers.focus) : []

  const focusLabel = focusBlank.options.find((o) => o.value === answers.focus)?.label
  const outcomeLabel = outcomeOptions.find((o) => o.value === answers.outcome)?.label

  const startFlight = (
    blank: 'focus' | 'outcome',
    option: { value: string; label: string },
    el: HTMLElement,
  ) => {
    const target = (blank === 'focus' ? focusPillRef : outcomePillRef).current
    if (flight || !target) return
    const src = el.getBoundingClientRect()
    const dst = target.getBoundingClientRect()
    const size = measureFilledPill(option.label)
    setFlight({
      blank,
      value: option.value,
      label: option.label,
      from: { left: src.left, top: src.top, width: src.width, height: src.height },
      to: {
        left: dst.left + dst.width / 2 - size.width / 2,
        top: dst.top + dst.height / 2 - size.height / 2,
        width: size.width,
        height: size.height,
      },
    })
  }

  const completeFlight = () => {
    if (!flight) return
    if (flight.blank === 'focus') setAnswers({ focus: flight.value })
    else setAnswers((prev) => ({ ...prev, outcome: flight.value }))
    setFlight(null)
  }

  const clearFocus = () => {
    if (!flight) setAnswers({})
  }
  const clearOutcome = () => {
    if (!flight) setAnswers((prev) => ({ focus: prev.focus }))
  }

  if (showResults && answers.focus && answers.outcome && focusLabel && outcomeLabel) {
    return (
      <ResultsView
        tools={getRecommendations(answers.focus, answers.outcome)}
        focusLabel={focusLabel}
        outcomeLabel={outcomeLabel}
        sentenceParts={question.sentenceParts}
        onEdit={() => setShowResults(false)}
      />
    )
  }

  const isComplete = !!focusLabel && !!outcomeLabel

  return (
    <div className="flex w-full flex-col items-center gap-12">
      <p className="text-[13px] font-semibold uppercase text-[#6b7280]">
        {question.hint}
      </p>

      <SentencePicker
        focusRef={focusPillRef}
        outcomeRef={outcomePillRef}
        sentenceParts={question.sentenceParts}
        focusPlaceholder={focusBlank.placeholder}
        outcomePlaceholder={outcomeBlank.placeholder}
        focusLabel={focusLabel}
        outcomeLabel={outcomeLabel}
        onClearFocus={clearFocus}
        onClearOutcome={clearOutcome}
      />

      {isComplete ? (
        <div className="flex flex-col items-center gap-4">
          <p className="text-[15px] text-[#4b5563]">
            All set - let's find your perfect framework.
          </p>
          <button
            type="button"
            onClick={() => setShowResults(true)}
            className="flex h-[41px] items-center gap-2 rounded-lg bg-[#1e1eb5] px-7 text-sm font-semibold text-white transition-colors hover:bg-[#17179a]"
          >
            Show my frameworks
            <ArrowRightIcon className="size-4" />
          </button>
        </div>
      ) : answers.focus ? (
        <OptionsPanel
          key="outcome"
          title="Outcome Options"
          options={outcomeOptions}
          onSelect={(option, el) => startFlight('outcome', option, el)}
          hiddenValue={flight?.blank === 'outcome' ? flight.value : undefined}
          disabled={!!flight}
        />
      ) : (
        <OptionsPanel
          key="focus"
          title="Focus Options"
          options={focusBlank.options}
          onSelect={(option, el) => startFlight('focus', option, el)}
          hiddenValue={flight?.blank === 'focus' ? flight.value : undefined}
          disabled={!!flight}
        />
      )}
      {flight && (
        <FlyingChip
          label={flight.label}
          from={flight.from}
          to={flight.to}
          onComplete={completeFlight}
        />
      )}
    </div>
  )
}
