
import propositions from "../../data/proposition"

const Propositions =()=>{
      return(
        <section className="w-full py-10 lg:py-20 p-6 bg-white">
           <div className="w-full max-w-7xl mx-auto border border-amber-100/80 rounded-xl  bg-[#fffafa]">
            <div className="w-full mx-auto grid md:grid-cols-2 gap-6 md:p-6 lg:p-8">
                {propositions.map((item)=>{
                    const Icon =item.icon
                    return(
                        <article key={item.id} className="w-full flex gap-4 p-3 py-6 text-white/80 rounded-lg bg-black">
                            {/*icon*/}
                            <div className="flex p-2 w-fit h-fit rounded-full shrink-0 border text-amber-700/40 bg-amber-700/20">
                               <Icon className="size-5 m-auto"/>
                            </div>
                            {/*content*/}
                            <div className="space-y-3">
                                <h2 className="text-amber-800 text-[1.25rem] sm:text-[1.55rem]  font-heading font-semibold">
                                    {item.title}
                                </h2>
                                <p className="text-[0.92rem] lg:text-base sm:max-w-[85%] font-sans tracking-wider [0.5px]">
                                    {item.description}
                                </p>
                            </div>
                        </article>
                    )
                })}
            </div>
         </div>
        </section>
      )
}

export default Propositions