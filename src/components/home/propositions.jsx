
import propositions from "../../data/proposition"

const Propositions =()=>{
      return(
        <section className="w-full py-10 lg:py-20 px-6 md:px-0">
            <div className="w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
                {propositions.map((item)=>{
                    const Icon =item.icon
                    return(
                        <article key={item.id} className="w-full flex gap-8">
                            {/*icon*/}
                            <div className="flex p-3 w-fit h-fit rounded-full shrink-0 border text-black/40">
                               <Icon className="size-8 m-auto"/>
                            </div>
                            {/*content*/}
                            <div className="space-y-3">
                                <h2 className="font-semibold">
                                    {item.title}
                                </h2>
                                <p className="">
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