// import Hero from "../components/home components/hero";
import { LuMenu, LuX } from "react-icons/lu";
import { Link } from "react-router-dom";
import logo from "../assets/logo/logo.jpg"
import { NavLink } from "react-router-dom";
import { useState } from "react";
const NavBar = () => {

   const [isOpen, setIsOpen] = useState(false)
   const toggleMenu=()=>{
        setIsOpen(!isOpen)
    }
  return (
          <section className="w-full fixed top-0 left-1/2 -translate-x-1/2 bg-[#3b3c36] text-white z-50  px-5 py-2">
            <div className="w-full max-w-4xl mx-auto flex justify-between ">
            {/*navigation */}
               <nav className="hidden lg:flex gap-6 justify-between items-center ">
                  <a href="#about">
                     About
                  </a>
                  <a href="#services">
                     Services
                  </a>
               </nav>

            {/*logo */}
               <Link to="/" className="hidden lg:block size-[75px] rounded-full bg-yellow-700 white black shrink-0">
                  <img src={logo} alt="logo" className=" object-cover rounded-full" />
               </Link>

               {/*navigation */}
               <nav className="hidden lg:flex gap-6 justify-between items-center">
                  <a href="#products">
                     Products
                  </a>

                  <a href="#contact" className=" rounded-xl">
                     Contact
                  </a>
               </nav>
             </div>


             {/*\
             ==================
             mobile 
             =================
             */}
             <div className="fixed top-0 left-0 pt-4 pb-3 px-4 flex justify-between items-center lg:hidden w-full bg-black">
                <button 
                   onClick={toggleMenu}
                   className="relative size-8"
                   aria-label={isOpen ? "Close menu" : "Open menu"}
                  >
                    <LuMenu
                        className={`absolute inset-0 size-8 transition-all duration-500 ${
                           isOpen
                           ? "rotate-90 scale-0 opacity-0"
                           : "rotate-0 scale-100 opacity-100"
                        }`}
                     />

                      <LuX
                           className={`absolute inset-0 size-8 transition-all duration-500 ${
                              isOpen
                              ? "rotate-0 scale-100 opacity-100"
                              : "-rotate-90 scale-0 opacity-0"
                           }`}
                     />
                </button>
                
                {/*
                ================
                LOGO
                ================
                */}
                <Link to="/" className="size-12 rounded-full bg-yellow-700 shrink-0">
                     <img src={logo} alt="logo" className="object-cover rounded-full" />
                </Link>
             </div>

             {/*navigation */}
             <div className={`flex z-50 absolute top-full left-0  ${isOpen ? 'translate-y-15' : '-translate-y-[150%]'} w-full h-[100vh] bg-white/30 transition-all duration-500 backdrop-blur-md`}>   
               <nav className="w-full h-fit py-6 flex flex-col gap-4 bg-black px-6">
                  <a href="#about" onClick={toggleMenu} className="">About</a>
                  <a href="#services" onClick={toggleMenu} className="">Services</a>
                  <a href="#products" onClick={toggleMenu} className="">Products</a>
                  <a href="#contact" onClick={toggleMenu} className="">Contact</a>
               </nav>
             </div>
          </section>
          
       )
}
export default NavBar;
