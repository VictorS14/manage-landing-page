import { SectionIntroduction } from "./SectionIntroduction";
import { SectionAbout } from "./SectionAbout";
import { SectionTestimonials } from "./SectionTestimonials";
import { ModalOverlay } from "../ui/ModalOverlay";
import { ModalMenu } from "../ui/ModalMenu";

export const MainContent = ({ modalIsOpen, handleClick }) => {
  return (
    <main className="relative w-full max-w-7xl px-5 pt-3 flex flex-col gap-10 lg:gap-18 pb-5 items-center">
      <SectionIntroduction />
      <SectionAbout />
      <SectionTestimonials />
      <ModalOverlay
        // Yeess i know about prop drilling
        handleClick={handleClick}
        modalIsopen={modalIsOpen}
      >
        <ModalMenu />
      </ModalOverlay>
    </main>
  );
};
