import { WrapperSlider } from "./WrapperSlider"

import aliAvatar from "../../assets/images/avatar-ali.png";
import anishaAvatar from "../../assets/images/avatar-anisha.png";
import richardAvatar from "../../assets/images/avatar-richard.png";
import shanaiAvatar from "../../assets/images/avatar-shanai.png";
import { Slider } from "../ui/Slider";

const testimonials = [
   {
      id: 1,
      avatar: aliAvatar,
      name: "Ali Bravo",
      text: `“We have been able to cancel so many other subscriptions since using Manage. There is no more
            cross-channel confusion and everyone is much more focused.”`
   },
   {  
      id: 2,
      avatar: anishaAvatar,
      name: "Anisha Li",
      text: `“Manage has supercharged our team’s workflow. The ability to maintain 
  visibility on larger milestones at all times keeps everyone motivated.”`
   },
   {
      id: 3,
      avatar: richardAvatar,
      name: "Richard Watts",
      text: `“Manage allows us to provide structure and process. It keeps us organized 
  and focused. I can’t stop recommending them to everyone I talk to!”`
   },
   {
      id: 4,
      avatar: shanaiAvatar,
      name: "Shanai Gough",
      text: `“Their software allows us to track, manage and collaborate on our projects 
  from anywhere. It keeps the whole team in-sync without being intrusive.”`
   },
]

export const Carousel = () => {
  return (
    <WrapperSlider 
    className={"hidden lg:flex flex-col gap-8 items-center py-10 lg:py-5 lg:h-60 lg:w-full overflow-hidden relative"}
    >
      <div className="carousel-track">
       {testimonials.map(({id, avatar, name, text}) => (
            <Slider 
            key={id}
            className={"relative max-w-lg flex flex-col gap-4 pb-8 pt-14 lg:mr-4 items-center bg-gray-200"}
            avatar={avatar}
            name={name}
            text={text}
            />
       ))}
       
      </div>
    </WrapperSlider>
  )
}
