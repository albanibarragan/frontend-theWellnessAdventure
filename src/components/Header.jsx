import logo from '../assets/images/logo.svg'
import { Navbar } from './Navbar'
export const Header = () => {
  return (
    <header className="bg-red-500 flex place-content-between"> 
    <img  src={logo} alt="logo" />
    <Navbar/>
    </header>    
  )
}

export default Header;
