import { SectionIntroduction } from "./SectionIntroduction"
import {SectionAbout} from "./SectionAbout"
import { SectionTestimonials } from "./SectionTestimonials"

export const MainContent = () => {
  return (
    <main className="w-full max-w-7xl px-5 pt-3 flex flex-col gap-10 lg:gap-18 pb-5 items-center border">
        <SectionIntroduction />
        <SectionAbout />
        <SectionTestimonials />
    </main>
  )
}
