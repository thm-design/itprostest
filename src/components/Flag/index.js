import React from "react";

import "./flag.scss";

export default ({flag}) => {
  return (
      <div className="CountryListImg">
        <img src={flag} alt="" width="80px" />{" "}
    </div>
  );
};
