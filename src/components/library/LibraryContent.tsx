import { motion } from 'framer-motion'
import { useMemo, useState, type ReactNode } from 'react'
import { useRecommenderData } from '../../contexts/RecommenderDataContext'
import { BRANCHES, toolColor, branchesForTool, type BranchId } from '../../data/xenToolPresentation'
import LibraryCard from './LibraryCard'

type Filter = 'all' | BranchId

const FILTERS: { id: Filter; label: string }[] = [
  { id: 'all', label: 'ALL' },
  ...BRANCHES.map((b) => ({ id: b.id, label: b.label })),
]

export default function LibraryContent({
  action,
  fadeInOnLoad = false,
  stickyFilters = false,
}: {
  action?: ReactNode
  fadeInOnLoad?: boolean
  stickyFilters?: boolean
}) {
  const { tools, isLoading, error } = useRecommenderData()
  const [filter, setFilter] = useState<Filter>('all')

  const branch = BRANCHES.find((b) => b.id === filter)

  const visible = useMemo(
    () =>
      filter === 'all'
        ? tools
        : tools.filter((tool) => branchesForTool(tool).some((b) => b.id === filter)),
    [tools, filter],
  )

  return (
    <div className="flex w-full flex-col gap-8">
      <div className="flex items-start gap-3">
        <div className="flex min-w-0 flex-1 flex-col gap-3">
          <h1 className="text-[36px] font-bold leading-[1.15] text-[#111827]">
            XENTools Library
          </h1>
          <p className="text-[15px] leading-[22px] text-[#6b7280]">
            Carefully curated frameworks and design-doing templates designed to help
            teams facilitate, collaborate, and drive actionable outcomes.
          </p>
        </div>
        {action}
      </div>

      <div
        className={`flex flex-wrap gap-2 ${
          stickyFilters ? 'sticky top-0 z-10 -my-3 bg-white py-3 pr-12' : ''
        }`}
      >
        {FILTERS.map((item) => {
          const active = item.id === filter
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setFilter(item.id)}
              aria-pressed={active}
              className={`rounded-[20px] border px-4 py-2 text-[13px] transition-colors ${
                active
                  ? 'border-[#1e1eb5] bg-[#1e1eb5] font-semibold text-white'
                  : 'border-[#e5e7eb] bg-[#f3f4f6] font-medium text-[#4b5563] hover:bg-[#e5e7eb]'
              }`}
            >
              {item.label}
            </button>
          )
        })}
      </div>

      {isLoading ? (
        <p className="text-sm text-[#6b7280]">Loading XENTools…</p>
      ) : error ? (
        <p className="text-sm text-[#6b7280]">
          Couldn't load the XENTools data. Please try again later.
        </p>
      ) : (
        <motion.div
          initial={fadeInOnLoad ? { opacity: 0, y: 8 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="grid grid-cols-[repeat(auto-fill,minmax(251px,1fr))] gap-5 pb-10"
        >
          {visible.map((tool) => (
            <LibraryCard key={tool.id} tool={tool} color={toolColor(tool, branch)} />
          ))}
        </motion.div>
      )}
    </div>
  )
}
