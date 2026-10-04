import TemplateGallery from '../components/comms/TemplateGallery'
import OnThisPage from '../components/nav/OnThisPage'
import PageLayout from '../layouts/PageLayout'

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'template-gallery', label: 'Template Gallery' },
]

function Divider() {
  return <div className="h-px w-full bg-hairline" />
}

export default function CommunicationTemplates() {
  return (
    <PageLayout>
      <div className="flex w-full items-start gap-[50px] px-12 pb-20 pt-14">
        <div className="flex min-w-0 flex-1 flex-col gap-7">
          <div id="overview" className="flex flex-col gap-4">
            <h1 className="text-[36px] font-semibold leading-[normal] text-[#121212]">
              Communication Templates
            </h1>
            <p className="text-[15px] leading-[22px] text-[#6b7280]">
              A XEN engagement is a curation of touchpoints designed to deliver the best
              possible client experience. While the workshop is the peak, the experience
              starts well before it, building anticipation and excitement, and continues
              beyond it, sustaining the relationship as the engagement progresses.
            </p>
          </div>

          <Divider />

          <TemplateGallery />
        </div>

        <OnThisPage sections={sections} />
      </div>
    </PageLayout>
  )
}
