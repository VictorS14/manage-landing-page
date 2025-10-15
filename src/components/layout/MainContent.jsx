import { SectionIntroduction } from "./SectionIntroduction"
import {SectionAbout} from "./SectionAbout"
import { TipsOfManage } from "./TipsOfManage"
import { SectionTestimonials } from "./SectionTestimonials"

export const MainContent = () => {
  return (
    <main className=" w-full px-5 pt-3 flex flex-col gap-10 items-center">
        <SectionIntroduction />
        <SectionAbout />
        <TipsOfManage />
        <SectionTestimonials />
    </main>
  )
}
