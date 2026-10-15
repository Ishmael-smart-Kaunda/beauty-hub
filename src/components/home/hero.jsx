import { AiOutlineHome } from "react-icons/ai"
import nailsService from "../../assets/images/hero/nail-services.jpg"
import { Link } from "react-router-dom"
import { BiBriefcase, BiMapPin } from "react-icons/bi"
import { LuMapPin, LuPartyPopper } from "react-icons/lu"
import { CiMapPin } from "react-icons/ci"
export default function Hero(){
     return(
        <section className="relative w-full min-h-fit [100vh] pb-6  bg-[#33312C]">
            <img src={nailsService} alt="nails-image" className="hidden absolute inset-0 w-full h-[70vh] lg:h-full object-cober" />
            {/*overlay */}
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-black/70 to-transparent"/>
            {/*content */}
            <div className="pt-[20%] lg:pt-[10%] relative w-full max-w-6xl mx-auto text-white space-y-4 px-6">

               <h1 className="text-[1.5rem] lg:text-[2rem] font-bold"> 
                  YOUR BEAUTY. YOUR SPACE. YOUR TIME.
               </h1>
               <div className=" bordr border-yellow-700/50 bg-ylow-700/5 rounded-xl space-y-4 text-yellow-50">
                  <p className="w-full lg:w-6/10">
                     From fresh haircuts and flawless braids to beautiful nails, 
                     makeup, tattoos, and cosmetics, Beauty Hub brings your beauty 
                     needs right to your doorstep.
                  </p>
                  <p className="w-full lg:w-6/10">
                     Enjoy professional beauty and grooming services at home, at the 
                     office, or at your next event in Cape Town 
                     <span className="h-px w-5 bg-yellow-800"></span>
                     without the salon trip.
                  </p>
               </div>
               {/*cta */}
               <div className="hidden lg:flex flex-col md:flex-row gap-4 py-6">
                  <a href="https://wa.me/0676279132"
                     target="_blank"
                     rel="noopener noreferrer" 
                    className="bg-yellow-700 font-light text-white px-4 py-2">
                     Book Appointment 
                  </a>
                   <a href="#services" className="w-fit border font-light text-white px-4 py-2">
                     Explore Our Services 
                  </a>
               </div>

               {/* work places */}
               <div className="w-full grid grid grid-cols-2 gap-4 lg:hidden justify-between mt-10 border border-yellow-700/70 bg-yellow-700/30 p-3 rounded-2xl text-[#f5fffa]/70">
                  <div className="flex flex-col items-center justify-center p-2 bg-amber-900 rounded-2xl">
                       <AiOutlineHome className="size-6"/>
                       <span className="text-xs">At home</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-2 bg-amber-900 rounded-2xl">
                       <BiBriefcase className="size-6"/>
                       <span className="text-xs">At work</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-2 bg-amber-900 rounded-2xl">
                       <LuPartyPopper className="size-6"/>
                       <span className="text-xs">At event</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-2 bg-amber-900 rounded-2xl">
                       <BiMapPin className="size-6"/>
                       <span className="text-xs text-center">At every place</span>
                  </div>

                   <span className="hidden lock">
                      At home. At work. At your event. Beauty on your terms.
                   </span>
               </div>
               {/*descriptive paragraph of above */}
               <p className="lg:hidden text-xs px-4 py-3 border border-[#fffafa]/90 bg-[#fffafa]/70 text-black [#524626] rounded-xl mt-8">
                  We bring our services to every place of your choice
               </p>

              {/*image */}
               <div className="w-full h-60 lg:h-100 bg-white rounded-2xl  lg:hidden rounded-b-none  mt-8 overflow-hidden">
                  <img src={nailsService} alt="nails-service" className="w-full h-full object-cover" />
               </div>
            </div>
             
        </section>
     )
}