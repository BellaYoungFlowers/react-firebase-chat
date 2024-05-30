import React, { useState } from "react";
import "./Search.css";

const Search = () => {
  const [addButton, setAddButton] = useState(true);
  return (
    <div className="search">
      <div className="searchBar">
        <img src="./search.png" alt="" />
        <input type="text" alt="Search" />
      </div>
      {/* 
        onClick={() => setAddButton(!pre)}
       */}
      <div className="addButton" onClick={() => setAddButton((pre) => !pre)}>
        <img src={addButton ? "./plus.png" : "./minus.png"} alt="" />
      </div>
    </div>
  );
};

export default Search;
