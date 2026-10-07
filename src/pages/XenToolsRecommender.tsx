import { useEffect, useRef, useState } from 'react'
import iconArrowRight from '../assets/images/recommender/arrow-right.svg'
import iconLibrary from '../assets/images/recommender/library-big.svg'
import ToolCardShowcase from '../components/xentools/ToolCardShowcase'
import PageLayout from '../layouts/PageLayout'

const SHOWCASE_WIDTH = 453
const SHOWCASE_HEIGHT = 391.671

function ScaledShowcase() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const el = wrapperRef.current
    if (!el) return
    const update = () => setScale(Math.min(1, el.clientWidth / SHOWCASE_WIDTH))
    update()
    const observer = new ResizeObserver(update)
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={wrapperRef} className="w-full">
      <div className="mx-auto" style={{ width: SHOWCASE_WIDTH * scale, height: SHOWCASE_HEIGHT * scale }}>
        <div style={{ width: SHOWCASE_WIDTH, transform: `scale(${scale})`, transformOrigin: 'top left' }}>
          <ToolCardShowcase />
        </div>
      </div>
    </div>
  )
}

export default function XenToolsRecommender() {
  return (
    <PageLayout>
      <div className="flex min-h-screen w-full flex-col justify-center bg-[#fcfcfc] px-6 py-10 md:px-14">
        <div className="flex flex-col items-center gap-12 xl:flex-row">
          <div className="flex w-full flex-1 flex-col items-start gap-8">
            <div className="flex flex-col gap-4 font-bold">
              <p className="text-xs uppercase text-[#1e1eb5]">XENTools Finder</p>
              <h1 className="text-[36px] leading-[1.15] text-[#111827] md:text-[52px] md:leading-[58px]">
                The Right Tool <span className="text-[#1e1eb5]">for Every Workshop</span>
              </h1>
            </div>
            <p className="text-lg leading-7 text-[#4b5563]">
              A simple question about the session you are running. One perfectly matched
              facilitation framework - built for UX designers, creative strategists, and anyone
              facilitating XEN workshops.
            </p>
            <button
              type="button"
              className="flex h-[41px] items-center gap-2 rounded-lg bg-[#0326d1] px-7 py-3.5 text-sm font-semibold text-white"
            >
              Get Started
              <img src={iconArrowRight} alt="" className="size-4" />
            </button>
          </div>

          <div className="flex w-full min-w-0 justify-center xl:w-[453px] xl:flex-none">
            <ScaledShowcase />
          </div>
        </div>
      </div>

      <button
        type="button"
        className="fixed bottom-10 right-6 z-30 flex h-12 items-center justify-center gap-2.5 rounded-lg border-[1.5px] border-[#0326d1] bg-white px-3 py-2.5 text-sm font-semibold text-[#0326d1] shadow-[0px_0px_15.8px_0px_rgba(0,0,0,0.25)] md:right-14"
      >
        Browse XENTools
        <img src={iconLibrary} alt="" className="size-[19px]" />
      </button>
    </PageLayout>
  )
}
