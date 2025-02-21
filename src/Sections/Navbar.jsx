 import { useState } from "react";
import menuIcon from "/assets/menu.svg";
import closeIcon from "/assets/close.svg";
import { navLinks } from "../constants";
 const NavItems=()=>{
     return(
         <ul className= "nav-ul">
             {navLinks.map(({id, name, href}) => (
                 <li key={id} className="nav-li">
                     <a href={href} className="nav-li_a" onClick={() => {

                     }}
                     >
                         {name}
                     </a>
                     </li>
             ))}
         </ul>
     )
 }

const Navbar = () => {
    const [isOpen, setIsOpen] = useState( false);
   const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

    return (
      <header className=" fixed top-0 left-0 right-0 z-50 bg-black/90">
          <div className="max-w-7xl mx-auto">
              <div className="flex justify-between items-center py-5 mx-auto c-space">
                    <a href={"/"} className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
                     priya
                    </a>
                  <button onClick={toggleMenu} className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex " aria-label={isOpen ? "Close menu" : "Open menu"}>

                  <img src={isOpen ? closeIcon : menuIcon} alt="menu" className="w-6 h-6" />

                  </button>
                  <nav className="hidden sm:flex items-center gap-5">
                                               <NavItems/>
                      </nav>

              </div>
          </div>
          {/*Mobile devices*/}
          <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
              <nav className="p-5">
                  <NavItems/>
              </nav>
          </div>
      </header>
    )
}
export default Navbar


