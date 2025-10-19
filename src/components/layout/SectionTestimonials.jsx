import { Button } from "../ui/Button";
import { WrapperSlider } from "./WrapperSlider";
import { Slider } from "../ui/Slider";
import { Carousel } from "./Carousel";
import aliAvatar from "../../assets/images/avatar-ali.png";
import anishaAvatar from "../../assets/images/avatar-anisha.png";
import richardAvatar from "../../assets/images/avatar-richard.png";
import shanaiAvatar from "../../assets/images/avatar-shanai.png";

import { useState, useRef, useEffect } from "react";

const testimonials = [
  {
    avatar: aliAvatar,
    name: "Ali Bravo",
    text: `“We have been able to cancel so many other subscriptions since using Manage. There is no more
            cross-channel confusion and everyone is much more focused.”`,
  },
  {
    avatar: anishaAvatar,
    name: "Anisha Li",
    text: `“Manage has supercharged our team’s workflow. The ability to maintain 
  visibility on larger milestones at all times keeps everyone motivated.”`,
  },
  {
    avatar: richardAvatar,
    name: "Richard Watts",
    text: `“Manage allows us to provide structure and process. It keeps us organized 
  and focused. I can’t stop recommending them to everyone I talk to!”`,
  },
  {
    avatar: shanaiAvatar,
    name: "Shanai Gough",
    text: `“Their software allows us to track, manage and collaborate on our projects 
  from anywhere. It keeps the whole team in-sync without being intrusive.”`,
  },
];

export const SectionTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearInterval(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setInterval(
      () => setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1)),
      5000
    );

    return () => {
      resetTimeout();
    };
  }, [activeIndex]);

  return (
    <section className="flex flex-col items-center gap-7 min-h-xl lg:w-full">
      <h1 className="text-3xl text-blue-950 font-bold">What they've said</h1>
      <WrapperSlider
        className={
          "flex lg:hidden flex-col gap-8 items-center py-10 lg:py-5 lg:h-60 lg:w-full overflow-hidden relative"
        }
      >
        <Slider
          className={"relative max-w-lg flex flex-col gap-4 pb-8 pt-14 items-center bg-gray-200"}
          avatar={testimonials[activeIndex].avatar}
          name={testimonials[activeIndex].name}
          text={testimonials[activeIndex].text}
        />
        <div className="flex gap-2 lg:hidden">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 border rounded-full transition-colors durantion-300 ${
                activeIndex === index ? "bg-orange-600 border-orange-600" : "border-orange-600/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </WrapperSlider>
      <Button
        text={"Get Started"}
        className={
          "lg:hidden bg-orange-600 h-10 w-35 rounded-full flex items-center justify-center text-white font-semibold shadow-[0px_8px_13px_1px_#FFB277]"
        }
      />
      <Carousel />
      <Button
        text={"Get Started"}
        className={
          "hidden lg:flex bg-orange-600 hover:bg-orange-500 transition duration-150 h-10 w-35 cursor-pointer rounded-full items-center justify-center text-white font-semibold shadow-[0px_8px_13px_1px_#FFB277]"
        }
      />
    </section>
  );
};
