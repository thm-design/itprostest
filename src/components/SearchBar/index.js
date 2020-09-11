import React, { useState } from "react";

import "./SearchBar.scss";

export default function Searchbar({ data }) {
  const [search, setSearch] = useState("");

  function handleChange(e) {
    setSearch(e.target.value);
  }

  const filteredData = (data || []).filter((item) => {
    // console.log({ item: item.name.toLowerCase(), search: search.toLowerCase() });
    const dataItem = item.name.toLowerCase();
    const currentSearch = search ? search.toLowerCase() : null;
    return dataItem.includes(currentSearch);
  });

  console.log({ search, data, filteredData });

  return (
    <div className="SearchBar">
      <input className="input" type="text" placeholder="search country ..." value={search} onChange={handleChange} />
      {filteredData.length &&
        filteredData.map((item) => {
          return <div key={item.name}>{item.name}</div>;
        })}
    </div>
  );
}
