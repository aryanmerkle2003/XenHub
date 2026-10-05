function fileNameFromUrl(url: string, fallback: string) {
  const clean = url.split('?')[0]
  return clean.substring(clean.lastIndexOf('/') + 1) || fallback
}

function triggerDownload(blob: Blob, fileName: string) {
  const objectUrl = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = objectUrl
  link.download = fileName
  document.body.appendChild(link)
  link.click()
  link.remove()
  setTimeout(() => URL.revokeObjectURL(objectUrl), 1000)
}

async function convertImage(url: string, mime: 'image/png' | 'image/jpeg'): Promise<Blob> {
  const image = new Image()
  image.src = url
  await image.decode()
  const canvas = document.createElement('canvas')
  canvas.width = image.naturalWidth
  canvas.height = image.naturalHeight
  const context = canvas.getContext('2d')
  if (!context) throw new Error('Canvas not supported')
  if (mime === 'image/jpeg') {
    context.fillStyle = '#ffffff'
    context.fillRect(0, 0, canvas.width, canvas.height)
  }
  context.drawImage(image, 0, 0)
  return new Promise((resolve, reject) =>
    canvas.toBlob((blob) => (blob ? resolve(blob) : reject(new Error('Conversion failed'))), mime, 0.92),
  )
}

export async function downloadAsIs(url: string, fileName?: string) {
  const blob = await (await fetch(url)).blob()
  triggerDownload(blob, fileName ?? fileNameFromUrl(url, 'download'))
}

export async function downloadImageAs(url: string, baseName: string, format: 'png' | 'jpeg') {
  const mime = format === 'png' ? 'image/png' : 'image/jpeg'
  const blob = await convertImage(url, mime)
  triggerDownload(blob, `${baseName}.${format === 'png' ? 'png' : 'jpg'}`)
}

export async function copyImage(url: string) {
  const blob = await convertImage(url, 'image/png')
  await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })])
}
