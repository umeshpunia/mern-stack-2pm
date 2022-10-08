import React from "react";
import Navbar from "./pages/Navbar";
import Routing from "./Routing";

import { useLocation } from 'react-router-dom';

function App() {
  const {pathname}=useLocation()


  return (
    <>
      {
        pathname!=="/"?<Navbar />:null
      }
      <Routing />
    </>
  );
}

export default App;
