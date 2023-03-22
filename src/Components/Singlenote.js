import React from "react";
import { AiFillDelete } from 'react-icons/ai';

const Singlenote = ({ title, content,id,del }) => {


  const handle =() =>{
    del(id)
  }

  return (
    <div className=" h-auto w-[240px] p-4 m-2 rounded bg-[#dee2e6] sm:float-left h-auto">
      <h1 className="text-xl pb-2 font-medium">{title}</h1>
      <p>{content}</p>
      <button className="float-right text-yellow-500" onClick={handle}><AiFillDelete /></button>
    </div>
  );
};

export default Singlenote;

