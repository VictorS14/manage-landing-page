import { NavBarLinks } from "../layout/NavBarLinks"

export const ModalMenu = () => {
  return (
    <div className="flex items-center justify-center rounded-2xl bg-white w-80 p-8">
         <NavBarLinks className={"w-full flex flex-col items-center justify-center gap-8"}/>
    </div>
  )
}
