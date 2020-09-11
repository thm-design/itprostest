import React from "react";

import "./CountryList.scss";


export default ({ population, name, region, language }) => {
  return (
    <div className="CountryList">
      <div className="countryName">{name}</div>
      <div className="population">{population}</div>
      <div className="region">{region}</div>
      <div className="language">{language}</div>
    </div>
  );
};
