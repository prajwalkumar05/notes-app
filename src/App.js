import React, { useState } from "react";
import Create from "./Components/Create";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Singlenote from "./Components/Singlenote";

function App() {

  const [notes,setNotes] = useState([])



  return (
    <>
      <Navbar />
      <Create  />
      <Singlenote />
    </>
  );
}

export default App;
