import slideLab from '../../assets/images/slide-1.jpg'
import sapAppHausLogo from '../../assets/images/sap-apphaus-logo.png'
import sapLogo from '../../assets/images/sap-logo.png'
import Reveal from '../Reveal'

const tabs = [
  { key: 'lab', label: 'XEN LAB' },
  { key: 'box', label: 'XEN-in-a-BOX' },
  { key: 'unwired', label: 'XEN Unwired' },
] as const

export default function WaysToExperience() {
  return (
    <div className="flex w-full flex-col items-start">
      <div className="flex w-full items-start border-b border-[#e5e7eb]">
        {tabs.map((tab, i) => (
          <button
            key={tab.key}
            type="button"
            disabled={i !== 0}
            className={`group flex flex-col items-center gap-2 pt-3 ${
              i === 0 ? 'w-[92px]' : i === 1 ? 'w-[125px]' : 'w-[120px]'
            } ${i === 0 ? 'cursor-default' : 'cursor-not-allowed'}`}
          >
            <span
              className={`text-sm transition-colors ${
                i === 0
                  ? 'font-semibold text-brand-dark'
                  : 'font-medium text-[#6b7280] group-hover:text-[#111827]'
              }`}
            >
              {tab.label}
            </span>
            <span
              className={`h-0.5 w-full rounded-sm transition-colors ${
                i === 0 ? 'bg-brand-dark' : 'bg-[#d9d9d9] group-hover:bg-[#9ca3af]'
              }`}
            />
          </button>
        ))}
      </div>

      <div className="flex w-full flex-col items-center gap-8 py-8 md:flex-row md:items-center">
        <Reveal className="flex-1">
          <div className="flex flex-col gap-4 text-[15px] leading-6 text-body">
            <p>
              XEN LABs are spaces crafted for design-doing, bringing the
              spirit and philosophy of XEN to life across Pune and
              Bangalore.
            </p>
            <p>
              They move beyond conventional workspace structures. They
              embrace the tension between chaos and order, giving teams the
              freedom to write, sketch, draw, prototype, and collaborate. A
              team certified to conduct design-doing sessions brings each
              space to life.
            </p>
            <p>
              We're proud to share that XEN LAB PNQ is recognised as
              India's first SAP AppHaus partner.
            </p>
            <p className="font-semibold text-brand-dark">
              For more information, visit{' '}
              <a
                href="https://apphaus.sap.com/network/pune"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                SAP AppHaus Network Pune page
              </a>
              .
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="flex shrink-0 flex-col items-start gap-8">
          <img
            src={slideLab}
            alt="XEN LAB workspace"
            className="h-[251px] w-full rounded-xl object-cover md:w-[326px]"
          />
          <div className="relative h-[59px] w-full overflow-hidden md:w-[326px]">
            <img
              src={sapAppHausLogo}
              alt="Member of the SAP AppHaus Network"
              className="absolute inset-0 size-full object-cover"
            />
            <img
              src={sapLogo}
              alt=""
              className="absolute left-[49%] top-0 h-[33%] w-[10.5%] object-cover"
            />
          </div>
        </Reveal>
      </div>
    </div>
  )
}
