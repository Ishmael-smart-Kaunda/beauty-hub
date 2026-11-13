import { AiOutlineHome } from "react-icons/ai"
import nailsService from "../../assets/images/hero/nail-services.jpg"
import { Link } from "react-router-dom"
import { BiBriefcase, BiMapPin } from "react-icons/bi"
import { LuMapPin, LuPartyPopper } from "react-icons/lu"
import { CiMapPin } from "react-icons/ci"
export default function Hero(){
     return(
        <section className="relative w-full h-fit lg:h-[95vh]  pb-6  bg-[#33312C]">
            <img src="https://i.pinimg.com/736x/e1/ce/b6/e1ceb6fad6cac3cd7c9aac3ec168678a.jpg" 
                 alt="nails-image" 
                 className="hidden lg:block absolute inset-0 w-full h-full object-cover" 
            />
            {/*overlay */}
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-black/70 to-transparent"/>
            
            {/*content */}
            <div className=" relative pt-[25%] md:pt-[20%] lg:pt-0 lg:absolute lg:left-10 lg:bottom-10 rounded-3xl p-6 py-8 w-fit lg:w-3xl bg-black/30  h-fit text-white/70 space-y-4">

               <h1 className="font-heading text-[1.71rem] sm:text-[1.78rem] md:text-[1.9rem] lg:text-[2.1rem] text-yellow-600 font-bold mt-6"> 
                    YOUR BEAUTY. YOUR SPACE. YOUR TIME.
               </h1>

               {/* */}
               <div className="border-yellow-700/50 md:max-w-[70%] lg:max-w-[90%] font-sans bg-ylow-700/5 rounded-xl space-y-4">
                  <p className="w-full ">
                     From fresh haircuts and flawless braids to beautiful nails, 
                     makeup, tattoos, and cosmetics, GlowFinesse brings your beauty 
                     needs right to your doorstep.
                  </p>
                  <p className="w-full">
                     Enjoy professional beauty and grooming services at home, at the 
                     office, or at your next event in Cape Town 
                     without the salon trip.
                  </p>
               </div>
               {/*cta */}
               <div className="hidden font-sans lg:flex flex-col md:flex-row gap-4 py-6">
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
               <div className="w-full font-sans grid grid-cols-2 gap-4 lg:hidden justify-between mt-10 border border-yellow-700/70 bg-yellow-900/10 p-3 rounded-2xl text-[#f5fffa]/70">
                  <div className="flex flex-col items-center justify-center p-2 bg-yellow-900 rounded-2xl">
                       <AiOutlineHome className="size-6"/>
                       <span className="text-xs">At home</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-2 bg-yellow-900 rounded-2xl">
                       <BiBriefcase className="size-6"/>
                       <span className="text-xs">At work</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-2 bg-yellow-900 rounded-2xl">
                       <LuPartyPopper className="size-6"/>
                       <span className="text-xs">At event</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-2 bg-yellow-900 rounded-2xl">
                       <BiMapPin className="size-6"/>
                       <span className="text-xs text-center">At every place</span>
                  </div>

                   <span className="hidden lock">
                      At home. At work. At your event. Beauty on your terms.
                   </span>
               </div>
               {/*descriptive paragraph of above */}
               <p className="lg:hidden font-sans text-xs px-4 py-3 border text-center border-[#fffafa]/90 bg-[#fffafa]/70 text-black [#524626] rounded-xl mt-8">
                  We bring our services to every place of your choice
               </p>

              {/*image */}
               <div className="w-full h-60 lg:h-100 bg-white rounded-2xl lg:hidden mt-8 overflow-hidden">
                  <img src={nailsService} alt="nails-service" className="w-full h-full object-cover" />
               </div>
            </div>
             
        </section>
     )
}