export type XenBook = {
  id: string
  number: string
  title: string
  caption: string
  totalPages: number
  /** Real PDF URL, once available — when unset, the viewer shows the placeholder spread. */
  pdfUrl?: string
}

const titles = ['Capacity Planning', 'Fidelity Investments', 'TDK Invensense']

export const xenBooks: XenBook[] = titles.map((title, i) => ({
  id: title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
  number: String(i + 1).padStart(2, '0'),
  title,
  caption: 'Key findings and recommendations for the transformation.',
  totalPages: 24,
}))
