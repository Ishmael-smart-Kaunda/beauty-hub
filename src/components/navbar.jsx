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
          <section className="w-full fixed top-0 left-1/2 -translate-x-1/2 bg-[#3b3c36] text-white z-50  px-5 py-2">
            <div className="w-full max-w-6xl mx-auto flex justify-between ">
            {/*logo */}
               <a href="#" className="h-10 w-10 rounded-full bg-yellow-700 white black shrink-0">
                  <img src={logo} alt="logo" className="hidden w-30 h-30 object-cever rounded-full" />
               </a>

               {/*navigation */}
               <nav className="hidden lg:flex gap-6 justify-between items-center">
                  <a href="#about">
                     About
                  </a>
                  <a href="#services">
                     Services
                  </a>
                  <a href="#products">
                     Products
                  </a>

                  <a href="#contact" className=" rounded-xl">
                     Contact
                  </a>
               </nav>
             </div>
             {/*mobile */}
             <div className="fixed top-0 left-0 py-3 px-4 flex justify-between items-center lg:hidden w-full bg-black">
                
                <LuMenu onClick={toggleMenu} className="size-8"/>
                <div className="size-8 bg-yellow-700 rounded-full"></div>
             </div>

             {/*navigation */}
             <div className={`flex z-50 fixed top-15 left-0 ${isOpen ? 'translate-y-0' : '-translate-y-[150%]'} w-full h-[100vh] bg-white/30 backdrop-blur-md transition-all duration-500 backdrop-blur-md`}>   
               <nav className="w-full h-fit bg-white/90 py-6 flex flex-col gap-4 text-black px-6">
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
