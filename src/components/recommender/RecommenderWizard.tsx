import { useState } from 'react'
import { useRecommenderData } from '../../contexts/RecommenderDataContext'
import OptionsPanel from './OptionsPanel'
import ResultsView from './ResultsView'
import SentencePicker from './SentencePicker'
import { ArrowRightIcon } from './icons'

type Answers = { focus?: string; outcome?: string }

function Message({ children }: { children: string }) {
  return <p className="text-sm text-[#6b7280]">{children}</p>
}

export default function RecommenderWizard() {
  const { questions, getOutcomesForFocus, getRecommendations, isLoading, error } =
    useRecommenderData()
  const [answers, setAnswers] = useState<Answers>({})
  const [showResults, setShowResults] = useState(false)

  if (isLoading) return <Message>Loading frameworks…</Message>
  if (error || questions.length === 0)
    return <Message>Couldn't load the XENTools data. Please try again later.</Message>

  const question = questions[0]
  const [focusBlank, outcomeBlank] = question.blanks
  const outcomeOptions = answers.focus ? getOutcomesForFocus(answers.focus) : []

  const focusLabel = focusBlank.options.find((o) => o.value === answers.focus)?.label
  const outcomeLabel = outcomeOptions.find((o) => o.value === answers.outcome)?.label

  const selectFocus = (value: string) => setAnswers({ focus: value })
  const selectOutcome = (value: string) =>
    setAnswers((prev) => ({ ...prev, outcome: value }))
  const clearFocus = () => setAnswers({})
  const clearOutcome = () => setAnswers((prev) => ({ focus: prev.focus }))

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
          onSelect={selectOutcome}
        />
      ) : (
        <OptionsPanel
          key="focus"
          title="Focus Options"
          options={focusBlank.options}
          onSelect={selectFocus}
        />
      )}
    </div>
  )
}
