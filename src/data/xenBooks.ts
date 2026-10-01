export type XenBook = {
  id: string
  number: string
  title: string
  caption: string
  pdfUrl: string
  downloadUrl: string
}

export const xenBooks: XenBook[] = [
  {
    id: 'fidelity-investments',
    number: '01',
    title: 'Fidelity Investments',
    caption: 'Key findings and recommendations for the transformation.',
    pdfUrl: '/xenbooks/fidelity-investments.pdf',
    downloadUrl:
      'https://globalappsportal.sharepoint.com/:b:/s/XENTeam/IQCOvw5JyVQ6Q64lQY50jStvAVX-TpT_W7IDjUAWY2ncaoU?e=uDw91D&download=1',
  },
  {
    id: 'capacity-planning',
    number: '02',
    title: 'Capacity Planning',
    caption: 'Key findings and recommendations for the transformation.',
    pdfUrl: '/xenbooks/capacity-planning.pdf',
    downloadUrl:
      'https://globalappsportal.sharepoint.com/:b:/s/XENTeam/IQDZQB9hL57wS7fWwJ49vifiAYkA6eronGhS1ZTFDm7xBP8?e=Qb28fM&download=1',
  },
  {
    id: 'tdk-invensense',
    number: '03',
    title: 'TDK Invensense',
    caption: 'Key findings and recommendations for the transformation.',
    pdfUrl: '/xenbooks/tdk-invensense.pdf',
    downloadUrl:
      'https://globalappsportal.sharepoint.com/:b:/s/XENTeam/IQCYBlTcEHC3T6A45DWxO8WNAZdfJhphW81MhvKl-hYxxE8?e=2MToWm&download=1',
  },
]
