import ConnectBanner from '../components/ConnectBanner'
import FaqAccordion from '../components/faq/FaqAccordion'
import { faqSections } from '../data/faqs'
import OnThisPage from '../components/nav/OnThisPage'
import PageLayout from '../layouts/PageLayout'

const sections = faqSections.map((section) => ({ id: section.id, label: section.topic }))

function Divider() {
  return <div className="h-px w-full bg-hairline" />
}

export default function XenFaqs() {
  return (
    <PageLayout>
      <div className="flex w-full items-start gap-[50px] px-12 pb-20 pt-14">
        <div className="flex min-w-0 flex-1 flex-col gap-9">
          <div className="flex flex-col gap-4">
            <h1 className="text-[36px] font-semibold leading-[normal] text-[#111827]">
              XEN FAQs
            </h1>
            <p className="text-[15px] leading-[22px] text-[#6b7280]">
              Frequently asked questions from clients, answered in one place.
            </p>
          </div>

          <Divider />

          <FaqAccordion />

          <ConnectBanner />
        </div>

        <OnThisPage sections={sections} />
      </div>
    </PageLayout>
  )
}
