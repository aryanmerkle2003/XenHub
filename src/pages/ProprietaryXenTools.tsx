import ProprietaryToolCard from '../components/xentools/ProprietaryToolCard'
import ConnectBanner from '../components/ConnectBanner'
import { proprietaryTools } from '../data/proprietaryTools'
import PageLayout from '../layouts/PageLayout'

export default function ProprietaryXenTools() {
  return (
    <PageLayout footerClassName="px-14">
      <div className="flex w-full flex-1 flex-col justify-between gap-16 px-14 pt-10">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3 pr-0 lg:pr-[252px]">
            <h1 className="text-[36px] font-bold leading-[1.15] text-[#111827]">
              Proprietary XENTools
            </h1>
            <p className="text-[15px] leading-[22px] text-[#6b7280]">
              Beyond standard design thinking tools, these proprietary frameworks are built by us to
              address the challenges our clients face when existing tools don’t quite fit.
            </p>
          </div>

          <div className="grid grid-cols-[repeat(auto-fill,minmax(251px,1fr))] gap-5">
            {proprietaryTools.map((tool) => (
              <ProprietaryToolCard key={tool.title} {...tool} />
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <ConnectBanner flush />
        </div>
      </div>
    </PageLayout>
  )
}
