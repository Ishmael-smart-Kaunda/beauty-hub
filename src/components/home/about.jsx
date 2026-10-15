
const About =()=>{
     return(
        <section id="about" className="w-full pt-20 bg-gray-100">
              <header className="text-center">
                  <small className="text-[0.75rem] mx-auto font-semibold text-yellow-700 my-4">
                        Your Beauty, Our Convenience.
                  </small>
                   <h2 className="text-[1.5rem] font-extrabold mb-10">
                      Get To Know Beauty Hub
                 </h2>
              </header>
              <div className="w-full h-full mx-auto grid md:grid-cols-2">
                   <div className="w-full">
                       <img src="https://i.pinimg.com/1200x/96/9a/2a/969a2a73965dd6536886f74aae90e71d.jpg" 
                         alt="" className="pbject-cover w-full h-full" />
                   </div>
                   <div className="flex flex-col justify-center w-full lg:pl-8 pr-6 bg-gray-100 py-10 px-6">
                       <p className="text-[1.35rem] lg:text-[2.5rem] font-bold leading-tight mb-6">
                          Looking your best 
                          shouldn't cost your entire day.
                       </p>

                       <p className="mt-6">
                         We bring beauty and grooming services directly to you.
                       </p>
                       <p className="">
                         Whether you need a fresh haircut, a new braid style, a manicure, a 
                         makeup look for a special occasion, or a little grooming refresh, 
                         we're here to make it easier.
                       </p>

                       <a href="#services" className="w-fit px-4 py-2 mt-6 bg-black text-white">
                          Find Your Next Look
                       </a>
                   </div>
              </div>
        </section>
     )
}

export default About;