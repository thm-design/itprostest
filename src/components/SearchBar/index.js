import React, { useState } from "react";

import "./SearchBar.scss";

export default function Searchbar({ data }) {
  const [search, setSearch] = useState("");

  function handleChange(e) {
    setSearch(e.target.value);
  }

  return (
    <div className="SearchBar">
      <input
        className="input"
        type="text"
        placeholder="search country ..."
        value={search}
        onChange={handleChange}
      />

     {/* { data?.filter((item) => item.name.toLowerCase().includes(search)).map(element => 
        <div>{element.name}</div>
      )} */}

      {data && data.filter((item) => item.name.toLowerCase().includes(search))}
 
      {/*  <ul>
        {data &&
          data.filter((item) => item.name.toLowerCase().includes(search)).map((e) => <li key={e.name}>{e.name}</li>)}
      </ul> */}
    </div>
  );
}
