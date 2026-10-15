
import { LuCalendarCheck, LuMapPin, LuScissors, LuShoppingBag } from "react-icons/lu";
import { deliveryApproach } from "../../data/delivery"



const Delivery =()=>{


    return(
        <section className="w-full py-10 bg-white yellow-950 px-6">
            <header className="w-full max-w-6xl mx-auto text-center">
                 <h2 className="text-[1.5rem] font-extrabold mb-6">
                      Our Approach 
                      <br className="" /> 
                      To Service delivery
                 </h2>
             </header>
            <div className="w-full max-w-6xl mx-auto grid md:grid-cols-3 lg:grid-cols-4 gap-y-4 gap-x-6">
                {deliveryApproach.map((item)=>{
                    const Icon =item.icon
                    return(
                        <article key={item.id} className="w-full flex flex-col items-center gap-8 b-yellow-700/10 b border-yellow-700/30 rounded-md py-8">
                            {/*icon*/}
                            <div className="flex p-2 rounded-md shrink-0 borer">
                                <Icon className="m-auto size-8"/>
                            </div>
                            {/*content*/}
                            <div className="space-y-3 text-center ">
                                <h2 className="font-semibold">
                                    {item.title}
                                </h2>
                                <p className="text-sm">
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

export default Delivery;