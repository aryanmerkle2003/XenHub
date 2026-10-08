import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { supabase } from '../lib/supabase'
import type { BlankOption, Question, Tool } from '../data/recommender'

interface DBTool {
  id: string
  name: string
  description: string
  category: string
  category_color: string
  duration: string
  team_size: string
  figjam_link: string | null
  download_link: string | null
  use_cases: string[] | null
  icon_class: string | null
}

interface DBRecLogic {
  id: number
  focus_value: string
  focus_label: string
  outcome_value: string
  outcome_label: string
  rec_1: string
  rec_2: string | null
  rec_3: string | null
}

export interface OutcomeOption {
  value: string
  label: string
  recommendations: string[]
}

export interface FocusOption {
  value: string
  label: string
  outcomes: OutcomeOption[]
}

interface RecommenderDataValue {
  tools: Tool[]
  questions: Question[]
  focusOptions: FocusOption[]
  getOutcomesForFocus: (focusValue: string) => OutcomeOption[]
  getRecommendations: (focusValue: string, outcomeValue: string) => Tool[]
  isLoading: boolean
  error: string | null
}

function mapTool(row: DBTool): Tool {
  return {
    id: row.id,
    name: row.name,
    description: row.description,
    category: row.category,
    categoryColor: row.category_color,
    duration: row.duration,
    teamSize: row.team_size,
    figJamLink: row.figjam_link ?? undefined,
    downloadLink: row.download_link ?? undefined,
    useCases: row.use_cases ?? [],
    iconClass: row.icon_class ?? undefined,
  }
}

function buildFocusOptions(rows: DBRecLogic[]): FocusOption[] {
  const focusMap = new Map<string, FocusOption>()
  const sorted = [...rows].sort((a, b) => a.id - b.id)
  for (const row of sorted) {
    if (!focusMap.has(row.focus_value)) {
      focusMap.set(row.focus_value, {
        value: row.focus_value,
        label: row.focus_label,
        outcomes: [],
      })
    }
    focusMap.get(row.focus_value)!.outcomes.push({
      value: row.outcome_value,
      label: row.outcome_label,
      recommendations: [row.rec_1, row.rec_2, row.rec_3].filter(
        (r): r is string => !!r,
      ),
    })
  }
  return Array.from(focusMap.values())
}

function buildQuestions(focusOptions: FocusOption[]): Question[] {
  return [
    {
      id: 'q1',
      sentenceParts: ['I want to', 'so that I can'],
      hint: 'Choose your focus and outcome to find the right framework',
      blanks: [
        {
          id: 'focus',
          placeholder: 'select your focus',
          options: focusOptions.map(
            (f): BlankOption => ({ value: f.value, label: f.label }),
          ),
        },
        {
          id: 'outcome',
          placeholder: 'pick an outcome',
          options: [],
        },
      ],
    },
  ]
}

const RecommenderDataContext = createContext<RecommenderDataValue | null>(null)

export function RecommenderDataProvider({ children }: { children: ReactNode }) {
  const [tools, setTools] = useState<Tool[]>([])
  const [focusOptions, setFocusOptions] = useState<FocusOption[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchAll = useCallback(async () => {
    try {
      const [toolsResult, recResult] = await Promise.all([
        supabase.from('tools').select('*'),
        supabase.from('recommendation_logic').select('*').order('id'),
      ])

      if (toolsResult.error)
        throw new Error(`Tools fetch failed: ${toolsResult.error.message}`)
      if (recResult.error)
        throw new Error(
          `Recommendation logic fetch failed: ${recResult.error.message}`,
        )

      setTools((toolsResult.data as DBTool[]).map(mapTool))
      setFocusOptions(buildFocusOptions(recResult.data as DBRecLogic[]))
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err))
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchAll()

    const channel = supabase
      .channel('xen-data-changes')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'tools' },
        () => fetchAll(),
      )
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'recommendation_logic' },
        () => fetchAll(),
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [fetchAll])

  const questions = useMemo(() => buildQuestions(focusOptions), [focusOptions])

  const getOutcomesForFocus = useCallback(
    (focusValue: string): OutcomeOption[] =>
      focusOptions.find((f) => f.value === focusValue)?.outcomes ?? [],
    [focusOptions],
  )

  const getRecommendations = useCallback(
    (focusValue: string, outcomeValue: string): Tool[] => {
      const outcome = focusOptions
        .find((f) => f.value === focusValue)
        ?.outcomes.find((o) => o.value === outcomeValue)
      if (!outcome) return []
      return outcome.recommendations
        .map((id) => tools.find((t) => t.id === id))
        .filter((t): t is Tool => !!t)
    },
    [focusOptions, tools],
  )

  const value: RecommenderDataValue = {
    tools,
    questions,
    focusOptions,
    getOutcomesForFocus,
    getRecommendations,
    isLoading,
    error,
  }

  return (
    <RecommenderDataContext.Provider value={value}>
      {children}
    </RecommenderDataContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useRecommenderData(): RecommenderDataValue {
  const ctx = useContext(RecommenderDataContext)
  if (!ctx)
    throw new Error('useRecommenderData must be used within RecommenderDataProvider')
  return ctx
}
