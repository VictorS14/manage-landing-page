import logo from "../../assets/images/logo.svg";
import iconHamburger from "../../assets/images/icon-hamburger.svg";
import { Button } from "../ui/Button";
import { NavBarLinks } from "./NavBarLinks";

export const Header = () => {
  return (
    <div className="h-20 flex items-center justify-between px-5 w-full max-w-7xl ">
      <img className="h-4" src={logo} alt="logo manage" />

      <button className="lg:hidden">
        <img className="h-4" src={iconHamburger} alt="logo manage" />
      </button>

      <div className="w-2xl hidden lg:flex">
        <NavBarLinks />
      </div>
      
      <Button
        text={"Get Started"}
        className={
          "hidden lg:flex bg-orange-600 h-10 w-35 cursor-pointer rounded-full items-center justify-center text-white font-semibold shadow-[0px_8px_13px_1px_#FFB277] hover:bg-orange-500 transition duration-150"
        }
      />
    </div>
  );
};
