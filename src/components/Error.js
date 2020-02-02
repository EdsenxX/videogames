import React from "react";
import { FaTimesCircle } from "react-icons/fa";

import "./styles/Error.scss";

function Error(props) {
  return (
    <div className="error">
      <span className="icono">
        <FaTimesCircle />
      </span>
      <p className="message">{props.message}</p>
      <button>Regresar</button>
    </div>
  );
}

export default Error;
