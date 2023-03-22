import React, { useState } from "react";
import { AiFillDelete } from 'react-icons/ai';

const Create = ({ getNotes }) => {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setnote] = useState({
    title: "",
    content: "",
  });

  console.log(note);

  function changeValue(event) {
    const { name, value } = event.target;

    setnote((p) => {
      // console.log(p)
      return {
        ...p,
        [name]: value,
      };
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getNotes(note);
  };

  function expand() {
    setExpanded(true);
  }

  return (
    <div className="relative w-[80%] border my-16 mx-auto sm:w-[40%] ">
      <div >
        {isExpanded && (
          <input
            className="w-full p-3 border-none outline-none"
            value={note.title}
            name="title"
            placeholder="Title"
            onChange={changeValue}
          />
        )}

        <textarea
          className="w-full p-3 border-none outline-none"
          onClick={expand}
          value={note.content}
          name="content"
          onChange={changeValue}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />

        {isExpanded && (
          <button onClick={handleSubmit} className="btn">+
          </button>
        )}
      </div>
    </div>
  );
};

export default Create;
