import type { LogoGenre } from '../../data/media'
import { CopyAction, DownloadAction } from './ActionButtons'
import { downloadAsIs } from './mediaActions'
import MediaModal from './MediaModal'

export default function LogosPopup({
  genre,
  onClose,
}: {
  genre: LogoGenre | null
  onClose: () => void
}) {
  return (
    <MediaModal
      open={genre !== null}
      onClose={onClose}
      title={genre?.title ?? ''}
      subtitle="Logos"
      variant="center"
    >
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {genre?.variants.map((variant) => (
          <div key={variant.key} className="flex flex-col gap-3">
            <p className="text-xs font-semibold tracking-[1px] text-[#121212]">{variant.label}</p>
            <div className="flex flex-col gap-2">
              <div
                className={`flex h-[104px] w-full items-center justify-center rounded-lg ${
                  variant.darkBackground ? 'bg-[#1a1a1a]' : 'bg-[#f7f7f7]'
                }`}
              >
                <img
                  src={variant.svg}
                  alt={`${genre.title} logo, ${variant.label}`}
                  className="h-[46px] w-auto max-w-[85%]"
                />
              </div>
              <div className="flex items-center gap-2.5">
                <DownloadAction label="SVG" onDownload={() => downloadAsIs(variant.svg, `${genre.key}-${variant.key}.svg`)} />
                <DownloadAction label="PNG" onDownload={() => downloadAsIs(variant.png, `${genre.key}-${variant.key}.png`)} />
                <CopyAction imageUrl={variant.png} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </MediaModal>
  )
}
