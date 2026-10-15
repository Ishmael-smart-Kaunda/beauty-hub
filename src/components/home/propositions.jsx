
import propositions from "../../data/proposition"

const Propositions =()=>{
      return(
        <section className="w-full py-10 lg:py-20 px-6 bg-white">
            <div className="w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
                {propositions.map((item)=>{
                    const Icon =item.icon
                    return(
                        <article key={item.id} className="w-full flex gap-4">
                            {/*icon*/}
                            <div className="flex p-3 w-fit h-fit rounded-full shrink-0 border text-amber-700/40 bg-amber-700/20">
                               <Icon className="size-5 m-auto"/>
                            </div>
                            {/*content*/}
                            <div className="space-y-3">
                                <h2 className="text-amber-800 font-semibold">
                                    {item.title}
                                </h2>
                                <p className="text-sm tracking-[0.5px]">
                                    {item.description}
                                </p>
                            </div>
                        </article>
                    )
                })}
            </div>
        </section>
      )
}

export default Propositions