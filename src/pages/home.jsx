// import Hero from "../components/home components/hero";

import Hero from "../components/home/hero";
import Propositions from "../components/home/propositions";
import About from "../components/home/about";
import Delivery from "../components/home/delivery";
import Services from "../components/home/services";
import Products from "../components/home/products";
const Home = () => {
  return (
         <>
           <Hero/>
           <Propositions/>
           <About/>
           <Delivery/>
           <Services/>
           <Products/>
         </>      
        )
}
export default Home;
