

import { cosmeticProducts } from "../../data/products";
import { useState } from "react";


const Products = ()=>{


      return(
        <section className="w-full py-20 bg-[#FAF9F6]">
            <header className="w-full max-w-6xl mx-auto">
 
            </header>

            <div className="w-full max-w-6xl mx-auto grid md:grid-cols-3 lg:grid-cols-4 gap-6">
               {cosmeticProducts.map((item)=>{
                  return(
                    <article key={item.id} className="w-full flex flex-col items-center text-justify space-y-3">
                        <div className="w-full h-60">
                             <figure className="w-7/10 mx-auto h-full bg-black/10 rounded-t-full overflow-hidden">
                                 <img src={item.image} 
                                  alt={item.imageAlt} className="w-full h-full object-cver" />
                             </figure>
                        </div>
                        <h3 className="font-bold my-4">
                            {item.name}
                        </h3>
                        <p className="text-center">
                            {item.description}
                        </p>
                        {/*cta */}
                        <a href="/" className="px-6 py-2 border mt-2 rounded-full">
                            order now
                        </a>
                    </article>
                  )
                })}

            </div>
        </section>
      )
}
export default Products