import ConnectBanner from '../components/ConnectBanner'
import Footer from '../components/Footer'
import SpocCard from '../components/connect/SpocCard'
import { spocs } from '../data/spocs'
import PageLayout from '../layouts/PageLayout'

function Divider() {
  return <div className="h-px w-full bg-hairline" />
}

export default function ConnectWithUs() {
  return (
    <PageLayout>
      <div className="flex w-full flex-col gap-7 px-12 pb-20 pt-14">
        <div className="flex flex-col gap-3.5">
          <h1 className="text-[36px] font-semibold leading-[normal] text-[#111827]">
            Ask Us Anything About XEN
          </h1>
          <p className="text-[15px] leading-[normal] text-[#6b7280]">
            Get in touch with the XEN team - we're here to help.
          </p>
        </div>

        <Divider />

        <div className="grid grid-cols-2 gap-5">
          {spocs.map((spoc) => (
            <SpocCard key={spoc.name} {...spoc} />
          ))}
        </div>

        <Divider />

        <ConnectBanner />

        <Footer />
      </div>
    </PageLayout>
  )
}
