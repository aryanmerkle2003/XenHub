import type { WorkshopVideoGroup } from '../../data/media'
import MediaModal from './MediaModal'

export default function VideosPopup({
  open,
  groups,
  onClose,
}: {
  open: boolean
  groups: WorkshopVideoGroup[]
  onClose: () => void
}) {
  return (
    <MediaModal open={open} onClose={onClose} title="XEN" subtitle="Workshop Videos" variant="sheet-fit">
      <div className="flex flex-col gap-6">
        {groups.map((group) => (
          <div key={group.id} className="flex flex-col gap-3">
            <p className="text-xs font-semibold tracking-[1px] text-[#121212]">{group.title}</p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {group.videos.map((video) => (
                <a
                  key={video.id}
                  href={video.viewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Play ${video.title}`}
                  className="group relative block h-[160px] overflow-hidden rounded-lg border-[1.5px] border-[#d6d6df]"
                >
                  <img src={video.thumbnail} alt={video.title} className="size-full object-cover" />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/75 via-black/25 to-transparent p-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                    <p className="text-sm font-semibold leading-5 text-white">{video.title}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </MediaModal>
  )
}
