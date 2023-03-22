import React, { useState } from "react";
import Create from "./Components/Create";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Singlenote from "./Components/Singlenote";

function App() {

  const [notes,setNotes] = useState([])
  console.log(notes)

  const getNotes = (item) =>{
    console.log(item)

    setNotes((pre) =>{
      return [...pre,item]
    })
  }

  const del = (id) =>{
    console.log(id)

    setNotes(p=>{
      return p.filter((n,i)=>{
        return  i !== id
      })
  })
  }



  return (
    <>
      <Navbar />
      <Create getNotes={getNotes} />
      <div className="mx-16">
      {notes.map((item,index) =>{
            return <Singlenote key={index} id={index} title={item.title} content={item.content} del={del} />
        })}
      </div>

    </>
  );
}

export default App;
