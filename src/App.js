import React, { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Flag from "./components/Flag";
import useCountries from "./Hooks";
import CountryList from "./components/CountryList";

import "./App.scss";

export default () => {
  const [data, error] = useCountries();
  // console.log({ data });
  return (
    <div className="App">
      <SearchBar data={data} /> {/*      <SearchBar data={data} /> this doesn't work */}
      <Header />
      {data &&
        data.map((country) => {
          // console.log({ country });
          return (
            <div className="CountryList" key={country.name}>
              <Flag flag={country.flag} />
              <CountryList population={country.population} name={country.name} region={country.region} />
              {country.languages.map((language, languageIndex) => (
                <CountryList key={languageIndex} language={language.name} />
              ))}
              {/*  <div className="countryName">{country.name}</div>
            <div className="population">{country.population}</div>
            <div className="region">{country.region}</div>
            <div>
              {country.languages.map((language, languageIndex) => (
                <div key={languageIndex}>{language.name}</div>
              ))}
            </div> */}
            </div>
          );
        })}
      {/* <useCountries /> */}
    </div>
  );
  // return [data, error]
};
