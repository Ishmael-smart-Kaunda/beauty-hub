

import { cosmeticProducts } from "../../data/products";
import { useState } from "react";


const Products = ()=>{


      return(
        <section id="products" className="w-full py-20 bg-[#FAF9F6]">
            <header className="w-full max-w-6xl mx-auto text-center">
                 <h2 className="text-[1.5rem] font-extrabold mb-6">
                      Our Products
                 </h2>
             </header>

            <div className="w-full max-w-6xl mx-auto grid md:grid-cols-3 lg:grid-cols-4 gap-y-16 gap-x-6 py-10">
               {cosmeticProducts.map((item)=>{
                  return(
                    <article key={item.id} className="w-full flex flex-col items-center text-justify">
                        <div className="relative w-full h-60">
                             <div className="w-7/10 mx-auto h-full bg-black/10 rounded-t-full overflow-hidden">
                                 <img src={item.image} 
                                  alt={item.imageAlt} className="w-full h-full object-cver" />
                             </div>
                            {/*price tag */}
                            <div className="size-[65px] shadow-md shadow-yellow-600 absolute -bottom-10 right-10 md:right-3 md:-bottom-5 flex flex-col items-center justify-center rounded-full bg-yellow-400 text-sm text-white">
                                <p className="font-bold">
                                    {item.price}
                                </p>
                                <p className="font-semibold uppercase">
                                    zar
                                </p>
                            </div>
                              
                        </div>
                        <div className="flex flex-col items-center gap-4 px-12">
                            <h3 className="w-1/2 md:w-full text-lg text-center font-bold my-4">
                                {item.name}
                            </h3>
                            <p className="text-center">
                                {item.description}
                            </p>
                            {/*cta */}
                            <a href="/" className="px-6 py-2 font-bold bg-amber-800 text-white border mt-2 rounded-full">
                                Shop Now
                            </a>
                        </div>
                    </article>
                  )
                })}

            </div>
        </section>
      )
}
export default Products