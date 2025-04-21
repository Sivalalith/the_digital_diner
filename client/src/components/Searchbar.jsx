import { useState } from "react";

const Searchbar = ({ setSearchQuery }) => {
  const [input, setInput] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    setSearchQuery(input);
    // filterMenuData() to be added here
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setSearchQuery(input);
    }
  };

  return (
    <div className="py-4 my-4">
      <input
        placeholder="Search here..."
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onKeyDown={(e) => {
          handleKeyDown(e);
        }}
        className="px-4 mx-4 py-2 my-2 border-1 rounded-sm"
      ></input>
      <button
        onClick={(e) => {
          handleClick(e);
        }}
        className="px-4 mx-4 py-2 my-2 rounded-sm border-1 bg-gray-200"
      >
        Search
      </button>
    </div>
  );
};

export default Searchbar;
