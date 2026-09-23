import ConnectBanner from '../components/ConnectBanner'
import Reveal from '../components/Reveal'
import DifferentiatorsTabs from '../components/workshops/DifferentiatorsTabs'
import WorkshopMasterDetail from '../components/workshops/WorkshopMasterDetail'
import OnThisPage from '../components/nav/OnThisPage'
import PageLayout from '../layouts/PageLayout'

const sections = [
  { id: 'workshop-overview', label: 'What are XEN Workshops?' },
  { id: 'workshops-different', label: 'How are XEN Workshops different?' },
  { id: 'workshop-offerings', label: 'Workshop Offerings' },
]

function Divider() {
  return <div className="h-px w-full bg-hairline" />
}

export default function WorkshopOverview() {
  return (
    <PageLayout>
      <div className="flex w-full items-start gap-8 px-12 pb-20 pt-14">
        <div className="flex min-w-0 flex-1 flex-col gap-10">
          <div id="workshop-overview" className="flex flex-col gap-5">
            <h1 className="text-[36px] font-semibold leading-[1.15] text-[#111827]">
              What are XEN Workshops?
            </h1>
            <p className="text-base leading-[1.7] text-[#4b5563]">
              XEN Workshops are immersive, design-doing sessions that bring
              together multifunctional teams to solve real business
              challenges. Each workshop is purpose-built around a specific
              methodology - from discovery and definition to AI integration,
              service design, and rollout strategy. Facilitated by certified
              design doing practitioners, these sessions guide teams through
              structured journeys that turn ambiguity into actionable
              roadmaps.
            </p>
            <p className="text-base leading-[1.7] text-[#4b5563]">
              There's a XEN Workshop designed to meet you where you are and
              move you forward.
            </p>
          </div>

          <Divider />

          <Reveal id="workshops-different" className="flex w-full flex-col gap-7">
            <h2 className="text-[22px] font-semibold text-[#111827]">
              How are XEN Workshops different?
            </h2>
            <p className="max-w-[860px] text-[15px] leading-[1.65] text-[#6b7280]">
              Most workshops run on slides and sticky notes; ours run on
              snacks, Lego, and AI avatars. To ensure that the XEN
              experience is lived, here are some principles of how we do
              it:
            </p>
            <DifferentiatorsTabs />
          </Reveal>

          <Divider />

          <Reveal id="workshop-offerings" className="flex w-full flex-col gap-7">
            <div className="flex flex-col gap-2">
              <h2 className="text-[22px] font-semibold text-[#111827]">
                Workshop Offerings
              </h2>
              <p className="max-w-[860px] text-[15px] leading-[1.65] text-[#6b7280]">
                Eight workshop offerings designed to help organizations
                align on priorities, uncover opportunities, design
                solutions, and drive adoption.
              </p>
            </div>
            <WorkshopMasterDetail />
          </Reveal>

          <ConnectBanner />
        </div>

        <OnThisPage sections={sections} />
      </div>
    </PageLayout>
  )
}
