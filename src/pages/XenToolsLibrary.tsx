import LibraryContent from '../components/library/LibraryContent'
import { RecommenderDataProvider } from '../contexts/RecommenderDataContext'
import PageLayout from '../layouts/PageLayout'

export default function XenToolsLibrary() {
  return (
    <PageLayout>
      <div className="min-h-screen bg-white px-6 pb-10 pt-14 md:px-[75px]">
        <RecommenderDataProvider>
          <LibraryContent />
        </RecommenderDataProvider>
      </div>
    </PageLayout>
  )
}
