import { useState } from 'react'
import iconDownload from '../../assets/images/media/icon-download.svg'
import iconCopy from '../../assets/images/media/icon-copy.svg'
import { copyImage } from './mediaActions'

const actionClass =
  'flex items-center gap-1 text-[11px] font-medium text-[#6b7280] transition-colors hover:text-[#121212] disabled:cursor-not-allowed disabled:opacity-50'

export function DownloadAction({ label, onDownload }: { label: string; onDownload: () => Promise<void> }) {
  return (
    <button type="button" onClick={() => void onDownload().catch(() => {})} className={actionClass}>
      <img src={iconDownload} alt="" className="size-3" />
      {label}
    </button>
  )
}

export function CopyAction({ imageUrl }: { imageUrl: string }) {
  const [state, setState] = useState<'idle' | 'copied' | 'failed'>('idle')

  const handleCopy = async () => {
    try {
      await copyImage(imageUrl)
      setState('copied')
    } catch {
      setState('failed')
    }
    setTimeout(() => setState('idle'), 1500)
  }

  return (
    <button type="button" onClick={() => void handleCopy()} className={actionClass}>
      <img src={iconCopy} alt="" className="size-3" />
      {state === 'copied' ? 'Copied' : state === 'failed' ? 'Copy failed' : 'Copy'}
    </button>
  )
}
