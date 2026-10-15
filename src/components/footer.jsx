// import Hero from "../components/home components/hero";

import { AiFillTikTok } from "react-icons/ai";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
            <section className="w-full px-6 pt-20 pb-5">
               <div className="w-full max-w-6xl mx-auto grid md:grid-cols-3 gap-4">
                   <div className="flex w-full">
                       <Link to='/' className="m-auto border px-4 py-2">
                            Connect with us
                       </Link>
                   </div>
                   {/*logo */}
                    <div className="w-full space-y-3">
                       <h2 className="font-bold text-center">Beauty Hub</h2> 
                       <p className="text-center">Your Beauty. Your Space. Your Time.</p>

                       {/*social */}
                       <div className="flex justify-center gap-4 mt-6">
                          <FiFacebook/>
                          <AiFillTikTok/>
                          <FiInstagram/>
                       </div>
                   </div>
                    <div className="flex w-full">
                        <nav className="m-auto flex gap-3 text-yellow-800">
                            <a href="/" className="hover:text-yellow-800 underline">about</a>
                            <a href="/" className="hover:text-yellow-800 underline">services</a>
                            <a href="/" className="hover:text-yellow-800 underline">products</a>
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
