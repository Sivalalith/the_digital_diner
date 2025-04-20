import { useState } from "react";
import Searchbar from "./Searchbar";
import Menu from "./Menu";

const Body = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div>
      <Searchbar setSearchQuery={setSearchQuery} />
      <Menu searchQuery={searchQuery} />
    </div>
  );
};

export default Body;
