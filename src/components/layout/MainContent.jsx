import { SectionIntroduction } from "./SectionIntroduction"
import {SectionAbout} from "./SectionAbout"

export const MainContent = () => {
  return (
    <main className=" w-full px-5 pt-3 flex flex-col gap-10 items-center">
        <SectionIntroduction />
        <SectionAbout />
    </main>
  )
}
