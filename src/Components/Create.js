import React, { useState } from "react";

const Create = () => {
  const [isExpanded, setExpanded] = useState(false);

  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  console.log(note, title);

  function expand() {
    setExpanded(true);
  }



  return (
    <div>
      <form  className="relative w-[480px] mx-auto my-16 shadow-md border">
        {isExpanded && (
          <input
            className="w-full p-3 border-none outline-none"
            name="title"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        )}

        <textarea
          className="w-full p-3 border-none outline-none"
          onClick={expand}
          onChange={(e) => setNote(e.target.value)}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
      </form>

      
    </div>
  );
};

export default Create;
