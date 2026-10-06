import { useState } from 'react'
import LabImagesPopup from '../components/media/LabImagesPopup'
import LogosPopup from '../components/media/LogosPopup'
import MediaCard, { ThumbnailStrip } from '../components/media/MediaCard'
import VideosPopup from '../components/media/VideosPopup'
import VirtualBackgroundsPopup from '../components/media/VirtualBackgroundsPopup'
import OnThisPage from '../components/nav/OnThisPage'
import {
  labSites,
  logoGenres,
  virtualBackgroundSets,
  workshopVideoGroups,
  workshopVideos,
  type LabSite,
  type LogoGenre,
  type VirtualBackgroundSet,
} from '../data/media'
import PageLayout from '../layouts/PageLayout'

const sections = [
  { id: 'xen-lab-images', label: 'XEN LAB Images' },
  { id: 'logos', label: 'Logos' },
  { id: 'virtual-backgrounds', label: 'Virtual Backgrounds' },
  { id: 'workshop-videos', label: 'Workshop Videos' },
]

function SectionHeader({
  title,
  description,
  comingSoon = false,
}: {
  title: string
  description: string
  comingSoon?: boolean
}) {
  return (
    <>
      <div className="flex items-center gap-[17px]">
        <h2 className="text-[22px] font-semibold text-[#121212]">{title}</h2>
        {comingSoon && (
          <span className="flex h-[22px] items-center rounded bg-[#f2f2f4] px-1.5 text-[9px] text-[#60607d]">
            coming soon
          </span>
        )}
      </div>
      <p className="text-sm leading-5 text-[#6b7280]">{description}</p>
    </>
  )
}

export default function XenMedia() {
  const [labSite, setLabSite] = useState<LabSite | null>(null)
  const [logoGenre, setLogoGenre] = useState<LogoGenre | null>(null)
  const [videosOpen, setVideosOpen] = useState(false)
  const [backgroundSet, setBackgroundSet] = useState<VirtualBackgroundSet | null>(null)

  return (
    <PageLayout>
      <div className="flex w-full items-start gap-[50px] px-12 pb-20 pt-14">
        <div className="flex min-w-0 flex-1 flex-col gap-9">
          <div className="flex flex-col gap-4">
            <h1 className="text-[36px] font-semibold leading-[normal] text-[#121212]">XEN Media</h1>
            <p className="text-[15px] leading-[22px] text-[#6b7280]">
              Visual assets for the XEN practice - imagery, videos, brand logos, and virtual
              backgrounds. Use these resources to represent XEN consistently across pitches, case
              studies, and internal communications.
            </p>
          </div>

          <div className="h-px w-full bg-hairline" />

          <section id="xen-lab-images" className="flex flex-col gap-3">
            <SectionHeader
              title="XEN LAB Images"
              description="Photography from XEN LAB spaces in Bangalore and Pune - workshop setups, breakout rooms, whiteboarding sessions, and team moments. Use these to bring the XEN experience to life in your presentations."
            />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {labSites.map((site) => {
                const total = site.sections.reduce((sum, s) => sum + s.photos.length, 0)
                const previews = site.sections.slice(0, 3).map((s) => s.photos[0].src)
                return (
                  <MediaCard
                    key={site.key}
                    title={site.title}
                    count={total}
                    ariaLabel={`Open ${site.title} XEN LAB images`}
                    onOpen={() => setLabSite(site)}
                  >
                    <ThumbnailStrip images={previews} remaining={total - 2} />
                  </MediaCard>
                )
              })}
            </div>
          </section>

          <section id="logos" className="flex flex-col gap-3">
            <SectionHeader
              title="Logos"
              description="Official XEN and Merkle logos for use in presentations, documents, and digital assets. Each logo is available in multiple colour variants - download as SVG or PNG."
            />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {logoGenres.map((genre) => (
                <MediaCard
                  key={genre.key}
                  title={genre.title}
                  count={genre.variants.length}
                  ariaLabel={`Open ${genre.title} logos`}
                  onOpen={() => setLogoGenre(genre)}
                >
                  <div className="flex h-[78px] w-full items-center justify-center rounded-md bg-[#f2f2f4]">
                    <img
                      src={genre.variants[0].svg}
                      alt={`${genre.title} logo`}
                      className="h-9 w-auto max-w-[85%]"
                    />
                  </div>
                </MediaCard>
              ))}
            </div>
          </section>

          <section id="virtual-backgrounds" className="flex flex-col gap-3">
            <SectionHeader
              title="Virtual Backgrounds"
              description="Choose any of these virtual backgrounds to use in online XEN meetings and XEN Unwired sessions"
            />
            <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-2">
              {virtualBackgroundSets.map((set) => (
                <MediaCard
                  key={set.key}
                  title={set.title}
                  count={set.items.length}
                  ariaLabel={`Open ${set.title} virtual backgrounds`}
                  onOpen={() => setBackgroundSet(set)}
                >
                  <div className="flex w-full gap-2">
                    {set.items.map((item) => (
                      <img
                        key={item.id}
                        src={item.src}
                        alt=""
                        className="aspect-video min-w-0 flex-1 rounded-lg border-[1.5px] border-[#d6d6df] object-cover"
                      />
                    ))}
                  </div>
                </MediaCard>
              ))}
            </div>
          </section>

          <section id="workshop-videos" className="flex flex-col gap-3">
            <SectionHeader
              title="Workshop Videos"
              description="Explore XEN workshop videos to see the creative and collaborative energy that shape every hands-on experience."
            />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <MediaCard
                title="XEN"
                count={workshopVideos.length}
                ariaLabel="Open workshop videos"
                onOpen={() => setVideosOpen(true)}
              >
                <div className="flex w-full gap-2">
                  {workshopVideos.map((video) => (
                    <img
                      key={video.id}
                      src={video.thumbnail}
                      alt=""
                      className="aspect-video min-w-0 flex-1 rounded-lg border-[1.5px] border-[#d6d6df] object-cover"
                    />
                  ))}
                </div>
              </MediaCard>
            </div>
          </section>
        </div>

        <OnThisPage sections={sections} />
      </div>

      <LabImagesPopup site={labSite} onClose={() => setLabSite(null)} />
      <VideosPopup open={videosOpen} groups={workshopVideoGroups} onClose={() => setVideosOpen(false)} />
      <LogosPopup genre={logoGenre} onClose={() => setLogoGenre(null)} />
      <VirtualBackgroundsPopup set={backgroundSet} onClose={() => setBackgroundSet(null)} />
    </PageLayout>
  )
}
