
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

import NavBar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";

const Layout = () => {
  const {pathname}=useLocation();

  useEffect(()=>{
      window.scrollTo({
        top:0,
        behavior:"smooth",
      });
  },[pathname])
  
  return (
          <>
           <NavBar/>
            <main>
              <Outlet />
            </main>
            <Footer/>
          </>
  )
}

export default Layout;