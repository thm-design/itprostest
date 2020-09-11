import React, { useState, useEffect } from "react";


export default () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const fetchData = () => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => console.log("error"));
  };

  useEffect(() => {
    const searchResult =
      data && data.filter((item) => item.name.toLowerCase().includes(search)).map((element) => (
        <div>{element.name}</div>
      ))
    setSearch(searchResult);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return [data, error];
};
