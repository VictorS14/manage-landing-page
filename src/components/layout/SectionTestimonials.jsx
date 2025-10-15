import { Button } from "../ui/Button";
import { WrapperSlider } from "./WrapperSlider";
import { Slider } from "../ui/Slider";
import aliAvatar from '../../assets/images/avatar-ali.png'

export const SectionTestimonials = () => {
  return (
    <section className="flex flex-col items-center gap-7">
      <h1 className="text-3xl text-blue-950 font-bold">What they've said</h1>
      <WrapperSlider className="flex flex-col gap-8 items-center py-6">
         <Slider 
         className={"relative flex flex-col gap-4 pb-8 pt-14 items-center bg-gray-200"}
         avatar={aliAvatar}
         name={"Ali Bravo"}
         text={`“We have been able to cancel so many other subscriptions since using Manage. There is no more
            cross-channel confusion and everyone is much more focused.”`}
         />
        <div className="flex gap-1">
         <div className="w-2 h-2 border border-orange-600 rounded-full"></div>
         <div className="w-2 h-2 border border-orange-600 rounded-full"></div>
         <div className="w-2 h-2 border border-orange-600 rounded-full"></div>
         <div className="w-2 h-2 border border-orange-600 rounded-full"></div>
        </div>
      </WrapperSlider>
      <Button
        text={"Get Started"}
        className={
          "bg-orange-600 h-10 w-35 rounded-full flex items-center justify-center text-white font-semibold shadow-[0px_8px_13px_1px_#FFB277]"
        }
      />
    </section>
  );
};
