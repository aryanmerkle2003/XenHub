import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import '../../polyfills'
import { Document, Page, pdfjs } from 'react-pdf'
import downloadIcon from '../../assets/images/download-icon.svg'
import iconChevronLeft from '../../assets/images/icon-chevron-left.svg'
import iconChevronRight from '../../assets/images/icon-chevron-right.svg'
import { xenBooks } from '../../data/xenBooks'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString()

const SPREAD_SIZE = 2

export default function BookMasterDetail() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [pageStart, setPageStart] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const activeBook = xenBooks[activeIndex]
  const pageEnd = Math.min(pageStart + SPREAD_SIZE - 1, totalPages)

  const selectBook = (index: number) => {
    setActiveIndex(index)
    setPageStart(1)
    setTotalPages(0)
  }

  const goToPreviousSpread = () => {
    setPageStart((prev) => Math.max(1, prev - SPREAD_SIZE))
  }

  const goToNextSpread = () => {
    setPageStart((prev) =>
      Math.min(totalPages, prev + SPREAD_SIZE),
    )
  }

  return (
    <div className="flex w-full items-start gap-5">
      <div className="flex w-[230px] shrink-0 flex-col gap-0.5">
        {xenBooks.map((book, i) => {
          const active = i === activeIndex
          return (
            <button
              key={book.id}
              type="button"
              onClick={() => selectBook(i)}
              aria-selected={active}
              className={`flex items-center gap-2.5 rounded-[10px] px-3.5 py-3 text-left transition-colors ${
                active ? 'bg-brand text-white' : 'bg-white text-[#111827] hover:bg-[#f6f7f9]'
              }`}
            >
              <span
                className={`text-[11px] font-semibold ${active ? 'text-white/65' : 'text-[#a6abb5]'}`}
              >
                {book.number}
              </span>
              <span className="text-[13px] font-medium">{book.title}</span>
            </button>
          )
        })}
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-2.5">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeBook.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="flex h-[439px] w-full flex-col items-start overflow-y-auto rounded-tl-sm rounded-bl-sm border border-[#e4e4e4] bg-white shadow-[0px_12px_24px_0px_rgba(0,0,0,0.05)]"
          >
            <div className="flex w-full flex-col gap-6 p-8">
              <div className="flex flex-col gap-2">
                <p className="text-xs font-bold uppercase text-[#6b7280]">Case Study</p>
                <p className="text-2xl font-bold text-[#05051e]">{activeBook.title}</p>
              </div>
              <div className="flex flex-col gap-3">
                <Document
                  file={activeBook.pdfUrl}
                  onLoadSuccess={({ numPages }) => setTotalPages(numPages)}
                  loading={<div className="h-[180px] w-full rounded-lg bg-[#f3f4f6]" />}
                  className="flex gap-2"
                >
                  {Array.from({ length: pageEnd - pageStart + 1 }, (_, i) => (
                    <Page
                      key={pageStart + i}
                      pageNumber={pageStart + i}
                      width={264}
                      renderTextLayer={false}
                      renderAnnotationLayer={false}
                    />
                  ))}
                </Document>
                <p className="text-[13px] leading-[18px] text-[#6b7280]">{activeBook.caption}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-[13px] text-[#6b7280]">Page</span>
              <span className="rounded bg-[#f3f4f6] px-2 py-1 text-[13px] font-semibold text-[#05051e]">
                {pageStart === pageEnd ? pageStart : `${pageStart}-${pageEnd}`}
              </span>
              <span className="text-[13px] text-[#6b7280]">of {totalPages}</span>
            </div>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={goToPreviousSpread}
                disabled={pageStart === 1}
                aria-label="Previous page"
                className="flex size-9 items-center justify-center rounded-full border border-[#e4e4e4] bg-white transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <img src={iconChevronLeft} alt="" className="size-4" />
              </button>
              <button
                type="button"
                onClick={goToNextSpread}
                disabled={pageEnd >= totalPages}
                aria-label="Next page"
                className="flex size-9 items-center justify-center rounded-full border border-[#e4e4e4] bg-white transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <img src={iconChevronRight} alt="" className="size-4" />
              </button>
            </div>
          </div>

          <a
            href={activeBook.downloadUrl}
            download
            className="flex items-center gap-2 rounded-lg bg-brand px-4 py-2.5 text-[13px] font-medium text-white transition-colors hover:bg-brand-dark"
          >
            <img src={downloadIcon} alt="" className="size-4" />
            Download XENBook
          </a>
        </div>
      </div>
    </div>
  )
}
