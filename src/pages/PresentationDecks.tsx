import ConnectBanner from '../components/ConnectBanner'
import Reveal from '../components/Reveal'
import OnThisPage from '../components/nav/OnThisPage'
import PageLayout from '../layouts/PageLayout'
import downloadIcon from '../assets/images/download-icon.svg'
import iconSearch from '../assets/images/icon-search.svg'
import { presentationDecks } from '../data/presentationDecks'

const sections = [{ id: 'presentation-decks', label: 'Presentation Decks' }]

function Divider() {
  return <div className="h-px w-full bg-hairline" />
}

export default function PresentationDecks() {
  return (
    <PageLayout>
      <div className="flex w-full items-start gap-8 px-12 pb-20 pt-14">
        <div id="presentation-decks" className="flex min-w-0 flex-1 flex-col gap-8">
          <p className="flex items-center gap-1.5 text-xs text-[#6b7280]">
            <span>Learn</span>
            <span>›</span>
            <span>Explore</span>
            <span>›</span>
            <span className="font-medium text-[#05051e]">XENBooks</span>
          </p>

          <div className="flex flex-col gap-3.5">
            <h1 className="text-[36px] font-bold leading-[1.15] text-[#05051e]">
              Presentation Decks
            </h1>
            <p className="text-[15px] leading-[22px] text-[#6b7280]">
              These decks bring the complete XEN experience into one
              client-ready story. Use them to introduce XEN, explain its
              value, and confidently pitch the right experience to clients.
            </p>
          </div>

          <Divider />

          <div className="flex w-full items-center rounded-lg border border-[#e5e5e5] bg-white px-3.5 py-2.5">
            <img src={iconSearch} alt="" className="mr-2 size-3" />
            <span className="text-sm text-[#999]">Search Decks...</span>
          </div>

          <Reveal className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
            {presentationDecks.map((deck) => (
              <div
                key={deck.id}
                data-deck-id={deck.id}
                className="flex flex-col overflow-hidden rounded-xl border border-[#e4e4e4] bg-[#fcfcfc]"
              >
                <img
                  src={deck.thumbnail}
                  alt={`${deck.id}-thumbnail`}
                  className="h-[160px] w-full object-cover"
                />
                <div className="flex flex-col gap-4 p-5">
                  <div className="flex flex-col gap-2">
                    <p className="text-sm font-semibold text-[#05051e]">{deck.title}</p>
                    <p className="text-[13px] leading-[18px] text-[#374151]">
                      {deck.subtitle}
                    </p>
                  </div>
                  <button
                    type="button"
                    className="flex w-fit items-center gap-2 rounded-lg bg-[#eee] px-3.5 py-2 text-[13px] font-medium text-[#374151] transition-colors hover:bg-[#e2e2e2]"
                  >
                    <img src={downloadIcon} alt="" className="size-4" />
                    PDF
                  </button>
                </div>
              </div>
            ))}
          </Reveal>

          <ConnectBanner />
        </div>

        <OnThisPage sections={sections} />
      </div>
    </PageLayout>
  )
}
