// Placeholder assets live in src/assets/media. To replace one, save your file with exactly the same
// name (any of .jpg, .jpeg, .png, .webp) in the same folder and delete the old file.

const stripExt = (path: string) => path.replace(/\.(jpe?g|png|webp)$/i, '')

const photoModules = import.meta.glob('../assets/media/**/*.{jpg,jpeg,png,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>

const assetByName: Record<string, string> = {}
for (const [path, url] of Object.entries(photoModules)) {
  assetByName[stripExt(path.replace('../assets/media/', ''))] = url
}

const asset = (nameWithoutExt: string) => assetByName[nameWithoutExt] ?? ''

export type MediaPhoto = { id: string; src: string }
export type MediaPhotoSection = { title: string; photos: MediaPhoto[] }
export type LabSite = {
  key: 'pnq' | 'blr'
  title: string
  sections: MediaPhotoSection[]
}

// xen-lab-images/<site>/<section>/<site>-<section>-NN
const labSections = [
  { slug: 'the-lab', title: 'The Lab', count: 6 },
  { slug: 'breakout-rooms', title: 'Breakout Rooms', count: 6 },
  { slug: 'activities', title: 'Activities', count: 6 },
  { slug: 'artifacts', title: 'Artifacts', count: 5 },
]

function buildLabSite(key: 'pnq' | 'blr', title: string): LabSite {
  return {
    key,
    title,
    sections: labSections.map((section) => ({
      title: section.title,
      photos: Array.from({ length: section.count }, (_, i) => {
        const id = `${key}-${section.slug}-${String(i + 1).padStart(2, '0')}`
        return { id, src: asset(`xen-lab-images/${key}/${section.slug}/${id}`) }
      }),
    })),
  }
}

export const labSites: LabSite[] = [buildLabSite('pnq', 'PNQ'), buildLabSite('blr', 'BLR')]

export type WorkshopVideo = {
  id: string
  title: string
  orientation: 'landscape' | 'portrait'
  thumbnail: string
  // Opens the SharePoint player in a new tab
  viewUrl: string
}

// workshop-videos/xen-workshop-video-NN-thumbnail
const videoThumb = (n: number) => {
  const id = `xen-workshop-video-${String(n).padStart(2, '0')}-thumbnail`
  return asset(`workshop-videos/${id}`)
}

const FAST_CURRENTS = 'https://globalappsportal.sharepoint.com/:v:/s/XENTeam/IQBJRgoFv5KzQZrOFLWldjEdAZvcw3gu3BQf6CzcaRBzJyE?e=0DmdGE'
const TESTIMONIALS = 'https://globalappsportal.sharepoint.com/:v:/s/XENTeam/IQDGiZU5NgY5SaEHTU8-ku_UAfku7C1n_VoIY5S3EgWgCC8?e=RRcDaL'

export const workshopVideos: WorkshopVideo[] = [
  {
    id: 'fast-currents-xen-lab-launch',
    title: 'Fast Currents XEN LAB Launch',
    orientation: 'portrait',
    thumbnail: videoThumb(1),
    viewUrl: FAST_CURRENTS,
  },
  {
    id: 'xen-practice-testimonials',
    title: 'XEN Practice Testimonials',
    orientation: 'landscape',
    thumbnail: videoThumb(2),
    viewUrl: TESTIMONIALS,
  },
]

export type LogoVariantKey = 'default' | 'reversed' | 'white' | 'black'
export type LogoGenre = {
  key: string
  title: string
  variants: { key: LogoVariantKey; label: string; svg: string; png: string; darkBackground: boolean }[]
}

const logoFiles = import.meta.glob('../xen-logos/**/*.{svg,png}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>

const findLogo = (genreKey: string, variant: LogoVariantKey, format: 'svg' | 'png') => {
  const re = new RegExp(`/${format}/${genreKey}-${variant}(-\\d+x\\d+)?\\.${format}$`)
  const match = Object.keys(logoFiles).find((path) => re.test(path))
  return match ? logoFiles[match] : ''
}

const variantDefs: { key: LogoVariantKey; label: string; darkBackground: boolean }[] = [
  { key: 'default', label: 'Default', darkBackground: false },
  { key: 'reversed', label: 'Reversed', darkBackground: true },
  { key: 'white', label: 'White', darkBackground: true },
  { key: 'black', label: 'Black', darkBackground: false },
]

const logoGenreDefs = [
  { key: 'xen-default', title: 'XEN' },
  { key: 'xen-in-abox', title: 'Xen-in-a-box' },
  { key: 'xen-lab-pnq', title: 'XEN LAB PNQ' },
  { key: 'xen-lab-blr', title: 'XEN LAB BLR' },
  { key: 'xen-tools', title: 'XENTools' },
  { key: 'xen-unwired', title: 'XEN Unwired' },
]

export const logoGenres: LogoGenre[] = logoGenreDefs.map((genre) => ({
  key: genre.key,
  title: genre.title,
  variants: variantDefs.map((variant) => ({
    ...variant,
    svg: findLogo(genre.key, variant.key, 'svg'),
    png: findLogo(genre.key, variant.key, 'png'),
  })),
}))

export type VirtualBackgroundSet = {
  key: 'xen' | 'merkle'
  title: string
  items: { id: string; label: string; src: string }[]
}

// virtual-backgrounds/<theme>-virtual-background-<light|dark>
export const virtualBackgroundSets: VirtualBackgroundSet[] = (['xen', 'merkle'] as const).map((key) => ({
  key,
  title: key === 'xen' ? 'XEN' : 'Merkle',
  items: (['light', 'dark'] as const).map((mode) => {
    const id = `${key}-virtual-background-${mode}`
    return { id, label: mode === 'light' ? 'Light' : 'Dark', src: asset(`virtual-backgrounds/${id}`) }
  }),
}))
