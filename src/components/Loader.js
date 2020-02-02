import React from "react";

import "./styles/Loader.scss";

function Loader(props) {
  return (
    <div className="loader">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loader;
