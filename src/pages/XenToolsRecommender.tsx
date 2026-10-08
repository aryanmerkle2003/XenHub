import RecommenderWizard from '../components/recommender/RecommenderWizard'
import { RecommenderDataProvider } from '../contexts/RecommenderDataContext'
import PageLayout from '../layouts/PageLayout'

export default function XenToolsRecommender() {
  return (
    <PageLayout>
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#fcfcfc] px-14 pb-[60px] pt-10">
        <RecommenderDataProvider>
          <RecommenderWizard />
        </RecommenderDataProvider>
      </main>
    </PageLayout>
  )
}
