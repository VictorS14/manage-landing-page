import illustration from "../../assets/images/illustration-intro.svg";
import { Button } from "../ui/Button";

export const SectionIntroduction = () => {
  return (
    <section className="flex flex-col items-center lg:flex-row-reverse lg:gap-18 lg:justify-between w-full">
      <div>
        <img src={illustration} alt="illustrantion intro image"/>
      </div>
      <div className="flex flex-col items-center gap-4 lg:gap-8 px-4 py-3 lg:items-start lg:px-0">
        <h1 className="text-blue-950 text-[min(6vw,55px)] text-center font-bold lg:max-w-115 lg:text-left">
          Bring everyone together to build better products.
        </h1>

        <p className="text-center text-[min(6vw,18px)] text-gray-500 lg:max-w-88 lg:text-left">
          Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team
          goals in view.
        </p>

        <Button 
        text={"Get Started"}
        className={"bg-orange-600 h-10 w-35 rounded-full flex items-center justify-center text-white font-semibold shadow-[0px_8px_13px_1px_#FFB277] md:cursor-pointer"}
        />
      </div>
    </section>
  );
};
