// import Hero from "../components/home components/hero";
import { LuMenu } from "react-icons/lu";
import logo from "../assets/images/logo/logo.jpg"
import { NavLink } from "react-router-dom";
import { useState } from "react";
const NavBar = () => {

   const [isOpen, setIsOpen] = useState(false)
   const toggleMenu=()=>{
        setIsOpen(!isOpen)
    }
  return (
          <section className="fixed top-0 left-1/2 -translate-x-1/2 text-white z-50 w-full max-w-6xl mx-auto flex justify-between px-5 py-2">
            {/*logo */}
             <div className="h-10 w-10 rounded-full bg-yellow-700 white black shrink-0">
                <img src={logo} alt="logo" className="hidden w-30 h-30 object-cever rounded-full" />
             </div>

             {/*navigation */}
             <nav className="hidden lg:flex gap-6 justify-between items-center">
               <NavLink to='/'>
                  About
               </NavLink>
                <NavLink to='/'>
                  Services
               </NavLink>
                <NavLink to='/'>
                  Products
               </NavLink>

                <NavLink to='/' className=" rounded-xl">
                   Contact
               </NavLink>
             </nav>

             {/*mobile */}
             <div className="fixed top-0 left-0 py-3 px-4 flex justify-between items-center lg:hidden w-full bg-black">
                
                <LuMenu onClick={toggleMenu} className="size-8"/>
                <div className="size-8 bg-yellow-700 rounded-full"></div>
             </div>

             {/*navigation */}
             <div className={`flex z-50 fixed top-15 left-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-full h-[100vh] bg-white/90 transition-all duration-500 backdrop-blur-md`}>
                        
                        <nav className="m-auto text-black text-[2rem]">
                           menu items
                        </nav>

             </div>
          </section>
          
       )
}
export default NavBar;
