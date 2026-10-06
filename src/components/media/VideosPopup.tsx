import iconDownload from '../../assets/images/media/icon-download.svg'
import iconVideoPlay from '../../assets/images/media/icon-video-play.svg'
import type { WorkshopVideo } from '../../data/media'
import MediaModal from './MediaModal'

export default function VideosPopup({
  open,
  videos,
  onClose,
}: {
  open: boolean
  videos: WorkshopVideo[]
  onClose: () => void
}) {
  return (
    <MediaModal open={open} onClose={onClose} title="XEN" subtitle="Workshop Videos" variant="sheet-fit">
      <div className="flex flex-wrap items-start gap-6">
        {videos.map((video) => (
          <div key={video.id} className="flex flex-col gap-2">
            <a
              href={video.viewUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Play ${video.title}`}
              className="group relative block h-[240px] overflow-hidden rounded-lg"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className={`h-full w-auto object-cover ${
                  video.orientation === 'portrait' ? 'aspect-[9/16]' : 'aspect-video'
                }`}
              />
              <img
                src={iconVideoPlay}
                alt=""
                className="absolute left-1/2 top-1/2 size-6 -translate-x-1/2 -translate-y-1/2"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/75 via-black/25 to-transparent p-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                <p className="text-sm font-semibold leading-5 text-white">{video.title}</p>
              </div>
            </a>
            <a
              href={video.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-fit items-center gap-1 text-[11px] font-medium text-[#6b7280] transition-colors hover:text-[#121212]"
            >
              <img src={iconDownload} alt="" className="size-3" />
              MP4
            </a>
          </div>
        ))}
      </div>
    </MediaModal>
  )
}
