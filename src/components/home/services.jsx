import { LuArrowRight } from "react-icons/lu";
import { services } from "../../data/services"

import { useState } from "react";


const Services = ()=>{

    const [category, setCategory] = useState('all'); // default active group
    const filteredServices = services.filter(
        (service) => service.category===category   
    )

   console.log(filteredServices)
      return(
        <section className="w-full py-20 bg-[#FCF5E5]/50 px-6 md:px-0">
            <header className="w-full max-w-6xl mx-auto text-center">
                 <h2 className="text-[1.5rem] font-extrabold mb-6">
                      Our Services
                 </h2>
             </header>
            <div className="w-fit  mx-auto flex justify-center gap-4 my-6 border rounded-full p-2 px-4">
                <button onClick={()=>setCategory('all')} className="cursor-pointer">
                    For all
                </button>
                <button onClick={()=>setCategory('men')} className="cursor-pointer">
                    For men
                </button>
                <button onClick={()=>setCategory('ladies')} className="cursor-pointer">
                    For women
                </button>
            </div>

            <div className="w-full max-w-6xl mx-auto grid md:grid-cols-3 lg:grid-cols- gap-6 ">
               {filteredServices.map((item)=>{
                  return(
                    <article key={item.id} className="w-full text-justify bg-[#FAF9F6] space-y-3 shadow">
                        <div className="w-full h-60 bg-black/10 overflow-hidden">
                             <img src={item.image} 
                               alt={item.imageAlt} className="w-full h-full object-cover " />
                        </div>
                        <div className="px-8 space-y-6 pb-8">
                            <h3 className="lg:text-[1.125rem] font-bold">
                              {item.name}
                            </h3>
                            <p className="">
                              {item.description}
                            </p>
                            <hr className="text-gray-500/20" />
                            <a href="/" className="uppercase text-xs tracking-wide flex items-center gap-2">
                               Get this service
                               <LuArrowRight className="size-4 text-black/60"/>
                            </a>
                        </div>
                        
                    </article>
                  )
                })}
            </div>
        </section>
      )
}
export default Services