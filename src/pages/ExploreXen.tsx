import ConnectBanner from '../components/ConnectBanner'
import Reveal from '../components/Reveal'
import ImageCarousel from '../components/explore/ImageCarousel'
import WaysToExperience from '../components/explore/WaysToExperience'
import OnThisPage from '../components/nav/OnThisPage'
import PageLayout from '../layouts/PageLayout'
import slide1 from '../assets/images/slide-1.jpg'
import slide2 from '../assets/images/slide-2.png'
import slide3 from '../assets/images/slide-3.jpg'

const sections = [
  { id: 'what-is-xen', label: 'What is XEN' },
  { id: 'ways-to-experience', label: 'Ways to Experience XEN' },
]

const carouselImages = [slide1, slide2, slide3, slide1, slide2]

export default function ExploreXen() {
  return (
    <PageLayout>
      <div className="flex w-full items-start gap-[50px] px-12 pb-20 pt-14">
        <div className="flex min-w-0 flex-1 flex-col gap-7">
          <div id="what-is-xen" className="flex flex-col gap-5 pt-[9px]">
            <h1 className="text-[36px] font-semibold leading-[1.15] text-[#111827]">
              Explore XEN
            </h1>
            <p className="text-base leading-[1.7] text-[#374151]">
              XEN is a methodology and mindset for problem-solving, grounded
              in design-doing workshops that shape the 'why' before the
              'how'.
            </p>
            <p className="text-base leading-[1.7] text-[#374151]">
              It brings together multifunctional teams with different
              perspectives and skill sets, enabling creative and critical
              thinking to come together to envision new possibilities and
              translate them into feasible, integrated solutions. The
              experience is designed to foster excitement, engagement, and
              energy.
            </p>
          </div>

          <div className="pt-7">
            <ImageCarousel images={carouselImages} />
          </div>

          <Reveal
            id="ways-to-experience"
            className="flex w-full flex-col gap-8 pt-7"
          >
            <h2 className="text-[22px] font-semibold text-ink">
              Ways to Experience XEN
            </h2>
            <WaysToExperience />
          </Reveal>

          <ConnectBanner />
        </div>

        <OnThisPage sections={sections} />
      </div>
    </PageLayout>
  )
}
