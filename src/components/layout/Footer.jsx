import { Button } from "../ui/Button"
import iconFacebook from "../../assets/images/icon-facebook.svg"
import iconYouTube from "../../assets/images/icon-youtube.svg"
import iconTwitter from "../../assets/images/icon-twitter.svg"
import iconPinterest from "../../assets/images/icon-pinterest.svg"
import iconInstagram from "../../assets/images/icon-instagram.svg"
import logo from "../../assets/images/logo.svg"


export const Footer = () => {
  return (
    <div className="bg-gray-950">
      <div className="flex flex-col items-center pt-5 pb-3 px-5 gap-8">
         <div className="flex items-center justify-center gap-3">
            <input
            className="bg-white rounded-full text-sm pl-5 w-60 h-10 flex justify-center outline-none font-semibold" 
            type="text" 
            placeholder="Updates in your inbox..."/>
            <Button 
            className={
            "bg-orange-600 h-10 w-20 rounded-full flex items-center justify-center text-white font-semibold"
          }
          text={"GO"}
            />
         </div>

         <div className="w-full pt-5 px-5 pb-2 flex items-center justify-center">
            <ul className="grid grid-cols-2 gap-2 pl-5 w-85">
               <li className="text-white">Home</li>
               <li className="text-white">Carrers</li>
               <li className="text-white">Pricing</li>
               <li className="text-white">Community</li>
               <li className="text-white">Products</li>
               <li className="text-white">Privacy Policy</li>
               <li className="text-white">About Us</li>
            </ul>
         </div>

         <div className="flex items-center justify-center gap-8 w-full">
            <img src={iconFacebook} alt="icon facebook" className="w-9"/>
            <img src={iconYouTube} alt="icon YT"className="w-9" />
            <img src={iconTwitter} alt="icon twitter" className="w-9"/>
            <img src={iconPinterest} alt="icon pinterest" className="w-9"/>
            <img src={iconInstagram} alt="icon instagram" className="w-9"/>
         </div>

         <div>
            <img src={logo} alt="logo manage"/>
         </div>

         <p className="text-gray-400">
            &copy; {new Date().getFullYear()} All Rights Reserved
         </p>
      </div>
    </div>
  )
}
