import { SectionIntroduction } from "./SectionIntroduction"
import {SectionAbout} from "./SectionAbout"
import { TipsOfManage } from "./TipsOfManage"
import { SectionTestimonials } from "./SectionTestimonials"
import { CallToAction } from "./CallToAction"

export const MainContent = () => {
  return (
    <main className="w-full px-5 pt-3 flex flex-col gap-10 pb-5 items-center">
        <SectionIntroduction />
        <SectionAbout />
        <TipsOfManage />
        <SectionTestimonials />
    </main>
  )
}
