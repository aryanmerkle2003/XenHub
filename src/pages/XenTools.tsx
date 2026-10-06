import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import OnThisPage from '../components/nav/OnThisPage'
import FocusAreaDiagram from '../components/xentools/FocusAreaDiagram'
import ToolCardShowcase from '../components/xentools/ToolCardShowcase'
import PageLayout from '../layouts/PageLayout'

const sections = [
  { id: 'about-xentools', label: 'About XENTools' },
  { id: 'five-focus-areas', label: 'Five Focus Areas' },
  { id: 'proprietary-tools', label: 'Proprietary Tools' },
  { id: 'the-recommender', label: 'The Recommender' },
]

export default function XenTools() {
  return (
    <PageLayout>
      <div className="flex w-full items-start gap-[50px] px-12 pt-14">
        <div className="flex min-w-0 flex-1 flex-col">
          <div id="about-xentools" className="flex flex-col gap-4 pt-2">
            <h1 className="text-[36px] font-semibold leading-[1.15] text-[#111827]">
              XENTools
            </h1>
            <p className="text-base leading-[1.7] text-[#374151]">
              XENTools are our collection of design doing frameworks,
              carefully curated and refined through years of workshop
              experience to help participants navigate complex challenges
              with clarity, and purpose.
            </p>
            <p className="text-base leading-[1.7] text-[#374151]">
              The tools bring structure to a workshop setting by guiding
              ideation, discussion, and problem-solving, helping teams work
              toward the outcomes and objectives that matter most.
            </p>
          </div>

          <div className="mb-2 mt-9 h-px w-full bg-hairline" />

          <Reveal
            id="five-focus-areas"
            className="flex w-full flex-col gap-5 pt-7"
          >
            <h2 className="text-[22px] font-semibold text-[#05051e]">
              Five Focus Areas
            </h2>
            <p className="text-[15px] leading-[1.6] text-[#374151]">
              Our XENTools are categorized into five focus areas or
              objectives that they help to achieve:
            </p>
            <FocusAreaDiagram />
            <p className="text-[15px] leading-[1.6] text-[#374151]">
              Organizing our XENTools has enabled facilitators to quickly
              build workshop agendas, select the right activities, and
              focus their energy on driving great conversations and
              outcomes.
            </p>
          </Reveal>

          <Reveal
            id="proprietary-tools"
            className="flex w-full flex-col gap-5 pt-7"
          >
            <h2 className="text-[22px] font-semibold text-[#05051e]">
              Our Proprietary XENTools
            </h2>
            <p className="text-[15px] leading-[1.6] text-[#374151]">
              Not every challenge fits an existing framework. Drawing on
              our experience of workshop facilitation, we crafted
              proprietary XENTools purpose-built to fill those gaps,
              tackle specific challenges, and drive better outcomes.
            </p>
            <Link
              to="/proprietary-xentools"
              className="text-sm font-semibold text-[#1e1eb5] underline"
            >
              Proprietary XENTools Library →
            </Link>
          </Reveal>

          <Reveal
            id="the-recommender"
            className="flex w-full flex-col gap-5 pt-7"
          >
            <h2 className="text-[22px] font-semibold text-[#05051e]">
              XENTools Recommender
            </h2>
            <p className="text-[15px] leading-[1.6] text-[#374151]">
              The XENTools Recommender is a web app that helps
              facilitators find the right design doing tool for the
              workshop or session they're running. Choose what you want
              to focus on and the outcome you want to achieve, and it
              recommends the tools that best fit your need.
            </p>
            <a
              href="https://xen-tool-recommender.onrender.com/"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-[#1e1eb5] underline"
            >
              Experience the Recommender Now →
            </a>
          </Reveal>

          <div className="flex w-full justify-center pt-7">
            <ToolCardShowcase />
          </div>

          <Reveal
            className="mt-7 flex w-full items-center gap-5 rounded-2xl p-[30px]"
            style={{
              backgroundImage:
                'linear-gradient(90deg, #0326d1 0%, #462e6c 45%, #e25454 100%)',
            }}
          >
            <div className="flex flex-1 flex-col gap-3 text-white">
              <p className="text-2xl font-bold leading-[32px]">
                Propose a new XENTool
              </p>
              <p className="max-w-[641px] text-[13px] leading-[21px] text-white/85">
                Know a tool or technique that could help facilitators
                better run workshops? Suggest it for the XENTools
                library - we review every submission and add tools that
                strengthen the collection.
              </p>
            </div>
            <a
              href="#"
              className="flex h-[41px] shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-6 text-sm font-medium text-[#2f27c8]"
            >
              Propose a tool
              <span aria-hidden>→</span>
            </a>
          </Reveal>
        </div>

        <OnThisPage sections={sections} />
      </div>
    </PageLayout>
  )
}
