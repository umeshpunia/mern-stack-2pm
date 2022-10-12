import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SecondTopbar from "./components/SecondTopbar";
import Topbar from "./pages/home/Topbar";
import Routing from "./Routing";

function App() {

  const {pathname}=useLocation()
  if(pathname!=="/"){
    document.body.className="sub_page"
  }else{
    
    document.body.className=""
  }


  return (
    <>

      {
        pathname==="/"?<Topbar />:<SecondTopbar />
      }
      
      <Navbar />
      <Routing />
      <Footer />
    </>
  );
}

export default App;
