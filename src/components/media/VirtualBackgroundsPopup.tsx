import type { VirtualBackgroundSet } from '../../data/media'
import { CopyAction, DownloadAction } from './ActionButtons'
import { downloadImageAs } from './mediaActions'
import MediaModal from './MediaModal'

export default function VirtualBackgroundsPopup({
  set,
  onClose,
}: {
  set: VirtualBackgroundSet | null
  onClose: () => void
}) {
  return (
    <MediaModal
      open={set !== null}
      onClose={onClose}
      title={set?.title ?? ''}
      subtitle="Virtual Backgrounds"
      variant="center"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {set?.items.map((item) => (
          <div key={item.id} className="flex flex-col gap-3">
            <p className="text-xs font-semibold tracking-[1px] text-[#121212]">{item.label}</p>
            <div className="flex flex-col gap-2">
              <img
                src={item.src}
                alt={`${set.title} virtual background, ${item.label}`}
                className="aspect-video w-full rounded-lg object-cover"
              />
              <div className="flex items-center gap-2.5">
                <DownloadAction
                  label="PNG"
                  onDownload={() => downloadImageAs(item.src, item.id, 'png')}
                />
                <CopyAction imageUrl={item.src} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </MediaModal>
  )
}
