import ConnectBanner from '../components/ConnectBanner'
import BookMasterDetail from '../components/xenbooks/BookMasterDetail'
import OnThisPage from '../components/nav/OnThisPage'
import PageLayout from '../layouts/PageLayout'

const sections = [{ id: 'xenbook-viewer', label: 'XENBook Viewer' }]

function Divider() {
  return <div className="h-px w-full bg-hairline" />
}

export default function XenBooksLibrary() {
  return (
    <PageLayout>
      <div className="flex w-full items-start gap-8 px-12 pb-20 pt-14">
        <div id="xenbook-viewer" className="flex min-w-0 flex-1 flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h1 className="text-[36px] font-semibold leading-[1.15] text-[#111827]">
              XENBooks
            </h1>
            <p className="text-[15px] leading-[22px] text-[#6b7280]">
              The XENBook is a coffee-table book that captures the workshop
              journey, bringing together the engagement story, key moments,
              and outcomes in a tangible format. It gives clients a lasting
              record of the experience, including glimpses of the key
              deliverables created through the engagement.
            </p>
          </div>

          <Divider />

          <BookMasterDetail />

          <ConnectBanner />
        </div>

        <OnThisPage sections={sections} />
      </div>
    </PageLayout>
  )
}
