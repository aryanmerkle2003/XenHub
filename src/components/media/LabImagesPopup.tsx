import type { LabSite } from '../../data/media'
import { CopyAction, DownloadAction } from './ActionButtons'
import { downloadImageAs } from './mediaActions'
import MediaModal from './MediaModal'

export default function LabImagesPopup({
  site,
  onClose,
}: {
  site: LabSite | null
  onClose: () => void
}) {
  return (
    <MediaModal
      open={site !== null}
      onClose={onClose}
      title={site?.title ?? ''}
      subtitle="XEN LAB Images"
      variant="sheet"
    >
      <div className="flex flex-col gap-6">
        {site?.sections.map((section) => (
          <div key={section.title} className="flex flex-col gap-3">
            <p className="text-xs font-semibold tracking-[1px] text-[#121212]">{section.title}</p>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {section.photos.map((photo) => (
                <div key={photo.id} className="flex flex-col gap-2">
                  <img
                    src={photo.src}
                    alt={`${site.title} ${section.title}`}
                    loading="lazy"
                    className="h-[160px] w-full rounded-lg object-cover"
                  />
                  <div className="flex items-center gap-2.5">
                    <DownloadAction
                      label="JPEG"
                      onDownload={() => downloadImageAs(photo.src, photo.id, 'jpeg')}
                    />
                    <DownloadAction
                      label="PNG"
                      onDownload={() => downloadImageAs(photo.src, photo.id, 'png')}
                    />
                    <CopyAction imageUrl={photo.src} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </MediaModal>
  )
}
