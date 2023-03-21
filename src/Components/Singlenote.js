import React from "react";

const Singlenote = ({ title, content }) => {
  return (
    <div className="h-auto w-[240px] p-4 m-4 rounded bg-[#dee2e6]">
      <h1 className="text-xl pb-2 font-medium">{title}</h1>
      <p>{content}</p>
    </div>
  );
};

export default Singlenote;
