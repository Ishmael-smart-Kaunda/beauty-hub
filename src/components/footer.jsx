// import Hero from "../components/home components/hero";

import { AiFillTikTok } from "react-icons/ai";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { LiaWhatsapp } from "react-icons/lia";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
            <section id="contact" className="w-full px-6 pt-20 pb-5">
               <div className="w-full max-w-6xl mx-auto grid md:grid-cols-3 gap-4 gap-y-12">
                   <div className="flex w-full">
                      <div className="m-auto">
                          <p className="font-semibold text-center text-black/60">
                            Contact
                         </p>

                         <div className="mt-4">
                             <a href="tel:+0676279132"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm">
                                <LiaWhatsapp className="hidden size-5"/>
                                <p  className="text-xs">0676279132</p>
                             </a>
                         </div>

                      </div>
                       
                   </div>
                   {/*logo */}
                    <div className="w-full">
                       <h2 className="font-bold text-center">Beauty Hub</h2> 
                        <p className="text-xs text-center font-light text-amber-800">unisex salon</p>
                       <p className="text-center">Your Beauty. Your Space. Your Time.</p>

                       {/*social */}
                       <div className="flex justify-center gap-4 mt-6">
                          <a href="/" className="">
                             <FiFacebook className="size-5"/>
                          </a> 
                          <a href="/" className="">
                            <AiFillTikTok className="size-5"/>
                          </a>
                          <a href="/" className="">
                             <FiInstagram className="size-5"/>
                          </a>
                       </div>
                   </div>
                    <div className="flex w-full">
                        <nav className="m-auto flex gap-3 text-yellow-800">
                            <a href="#about" className="hover:text-yellow-800 underline">about</a>
                            <a href="#services" className="hover:text-yellow-800 underline">services</a>
                            <a href="#products" className="hover:text-yellow-800 underline">products</a>
                        </nav>

                        
                   </div>
               </div>

               <div className="mx-auto text-center text-sm mt-10">
                   © {currentYear} All rights reserved
               </div>
            </section>
         )
}
export default Footer;
