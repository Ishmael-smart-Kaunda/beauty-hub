import nailsService from "../../assets/images/hero/nail-services.jpg"
import { Link } from "react-router-dom"
export default function Hero(){
     return(
        <section className="flex relative w-full h-[100vh] bg-black">
            <img src={nailsService} alt="nails-image" className="absolute hidden inset-0 w-full h-full object-cober" />
            {/*overlay */}
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-black/70 to-transparent"/>
            {/*content */}
            <div className="my-auto relative w-full max-w-6xl mx-auto text-white space-y-4 px-6 md:px-0">

               <h1 className=" text-[2rem] font-bold"> 
                  YOUR BEAUTY. YOUR SPACE. YOUR TIME.
               </h1>
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
               {/*cta */}
               <div className=" flex flex-col md:flex-row gap-4 py-6">
                  <Link to='/' className="bg-yellow-700 font-light text-white px-4 py-2">
                     Book Appointment 
                  </Link>
                   <Link to='/' className="w-fit border font-light text-white px-4 py-2">
                     Explore Our Services 
                  </Link>
               </div>
               <div className="flex">
                   <span className="">
                      At home. At work. At your event. Beauty on your terms.
                   </span>
               </div>
            </div>
        </section>
     )
}