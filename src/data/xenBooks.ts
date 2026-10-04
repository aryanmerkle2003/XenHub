export type XenBook = {
  id: string
  number: string
  title: string
  description?: string
  pdfUrl: string
  downloadUrl: string
}

export const xenBooks: XenBook[] = [
  {
    id: 'fidelity-investments',
    number: '01',
    title: 'Fidelity Investments',
    description:
      'Merkle reimagined Fidelity’s Salesforce experience to streamline advisor workflows, reduce friction across platforms, and improve the usability and adoption of key servicing tools.',
    pdfUrl: '/xenbooks/fidelity-investments.pdf',
    downloadUrl:
      'https://globalappsportal.sharepoint.com/:b:/s/XENTeam/IQCOvw5JyVQ6Q64lQY50jStvAVX-TpT_W7IDjUAWY2ncaoU?e=uDw91D&download=1',
  },
  {
    id: 'capacity-planning',
    number: '02',
    title: 'Capacity Planning',
    description:
      'Merkle used Design Thinking to help teams rethink capacity planning, identify process challenges, and develop strategic, proactive approaches to planning and decision-making.',
    pdfUrl: '/xenbooks/capacity-planning.pdf',
    downloadUrl:
      'https://globalappsportal.sharepoint.com/:b:/s/XENTeam/IQDZQB9hL57wS7fWwJ49vifiAYkA6eronGhS1ZTFDm7xBP8?e=Qb28fM&download=1',
  },
  {
    id: 'tdk-invensense',
    number: '03',
    title: 'TDK Invensense',
    description:
      'Merkle reimagined TDK InvenSense’s website and developer forum by identifying user needs, mapping journeys, analyzing competitors, and defining opportunities for a more connected digital experience.',
    pdfUrl: '/xenbooks/tdk-invensense.pdf',
    downloadUrl:
      'https://globalappsportal.sharepoint.com/:b:/s/XENTeam/IQCYBlTcEHC3T6A45DWxO8WNAZdfJhphW81MhvKl-hYxxE8?e=2MToWm&download=1',
  },
]
