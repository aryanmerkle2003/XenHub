import ConnectBanner from '../components/ConnectBanner'
import Reveal from '../components/Reveal'
import ImageCarousel from '../components/explore/ImageCarousel'
import WaysToExperience from '../components/explore/WaysToExperience'
import OnThisPage from '../components/nav/OnThisPage'
import PageLayout from '../layouts/PageLayout'
import slide1 from '../assets/images/slide-1.jpg'
import slide2 from '../assets/images/slide-2.png'
import carousel1 from '../assets/images/explore-carousel-1.jpg'
import carousel2 from '../assets/images/explore-carousel-2.jpg'
import carousel3 from '../assets/images/explore-carousel-3.jpg'
import carousel4 from '../assets/images/explore-carousel-4.jpg'
import carousel5 from '../assets/images/explore-carousel-5.jpg'
import carousel6 from '../assets/images/explore-carousel-6.jpg'

const sections = [
  { id: 'what-is-xen', label: 'What is XEN' },
  { id: 'ways-to-experience', label: 'Ways to Experience XEN' },
]

const carouselImages = [slide1, slide2, carousel1, carousel2, carousel3, carousel4, carousel5, carousel6]

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

          <div className="my-2 h-px w-full bg-hairline" />

          <div>
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

          <ConnectBanner flush />
        </div>

        <OnThisPage sections={sections} />
      </div>
    </PageLayout>
  )
}
