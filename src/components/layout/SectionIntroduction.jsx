import illustration from "../../assets/images/illustration-intro.svg";
import { Button } from "../ui/Button";

export const SectionIntroduction = () => {
  return (
    <section className="flex flex-col items-center">
      <div>
        <img src={illustration} alt="illustrantion intro image" />
      </div>
      <div className="flex flex-col items-center gap-4 px-4 py-3">
        <h1 className="text-blue-950 text-3xl text-center font-bold">
          Bring everyone together to build better products.
        </h1>

        <p className="text-center text-gray-500">
          Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team
          goals in view.
        </p>

        <Button 
        text={"Get Started"}
        className={"bg-orange-600 h-10 w-35 rounded-full flex items-center justify-center text-white font-semibold shadow-[0px_8px_13px_1px_#FFB277]"}
        />
      </div>
    </section>
  );
};
