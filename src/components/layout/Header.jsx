import logo from '../../assets/images/logo.svg'
import iconHamburger from '../../assets/images/icon-hamburger.svg'
import { Menu } from 'lucide-react'

export const Header = () => {
  return (
    <div className="h-20 flex items-center justify-between px-5 w-full max-w-7xl ">
        <img
        className='h-4' 
        src={logo} alt="logo manage" 
        />

        <button>
          <img
        className='h-4' 
        src={iconHamburger} alt="logo manage" 
        />
        </button>
    </div>
  )
}
