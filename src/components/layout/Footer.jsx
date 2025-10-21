import { Button } from "../ui/Button"
import iconFacebook from "../../assets/images/icon-facebook.svg"
import iconYouTube from "../../assets/images/icon-youtube.svg"
import iconTwitter from "../../assets/images/icon-twitter.svg"
import iconPinterest from "../../assets/images/icon-pinterest.svg"
import iconInstagram from "../../assets/images/icon-instagram.svg"
import logo from "../../assets/images/logo.svg"


export const Footer = () => {
  return (
    <div className="bg-gray-950 w-full lg:px-5 lg:py-5">
      <div className=" flex flex-col items-center pt-5 pb-3 px-5 gap-8 md:grid md:grid-cols-2 md:grid-rows-2 lg:grid lg:grid-cols-3 lg:grid-rows-2 ">
         <div className=" flex items-center justify-center gap-3">
            <input
            className="bg-white rounded-full text-sm text-orange-600 pl-5 w-60 h-10 flex justify-center outline-none font-semibold" 
            type="text" 
            placeholder="Updates in your inbox..."/>
            <Button 
            className={
            "bg-orange-600 hover:bg-orange-300 transition duration-150 cursor-pointer h-10 w-20 rounded-full flex items-center justify-center text-white font-semibold"
          }
          text={"GO"}
            />
         </div>

         <div className=" w-full pt-5 px-5 pb-2 flex items-center justify-center md:col-start-2 lg:col-start-2 lg:row-start-1 lg:row-span-2">
            <ul className="grid grid-cols-2 gap-2 pl-5 w-85">
               <li className="text-white hover:text-orange-600 cursor-pointer">Home</li>
               <li className="text-white hover:text-orange-600 cursor-pointer">Carrers</li>
               <li className="text-white hover:text-orange-600 cursor-pointer">Pricing</li>
               <li className="text-white hover:text-orange-600 cursor-pointer">Community</li>
               <li className="text-white hover:text-orange-600 cursor-pointer">Products</li>
               <li className="text-white hover:text-orange-600 cursor-pointer">Privacy Policy</li>
               <li className="text-white hover:text-orange-600 cursor-pointer">About Us</li>
            </ul>
         </div>

         <div className=" flex items-center justify-center md:justify-start gap-8 w-full md:col-start-1 md:row-start-2">
            <img src={iconFacebook} alt="icon facebook" className="w-9 lg:w-6 cursor-pointer"/>
            <img src={iconYouTube} alt="icon YT"className="w-9 lg:w-6 cursor-pointer" />
            <img src={iconTwitter} alt="icon twitter" className="w-9 lg:w-6 cursor-pointer"/>
            <img src={iconPinterest} alt="icon pinterest" className="w-9 lg:w-6 cursor-pointer"/>
            <img src={iconInstagram} alt="icon instagram" className="w-9 lg:w-6 cursor-pointer"/>
         </div>

         <div className=" md:row-start-1">
            <img src={logo} alt="logo manage"/>
         </div>

         <p className="text-gray-400">
            &copy; {new Date().getFullYear()} All Rights Reserved
         </p>
      </div>
    </div>
  )
}
