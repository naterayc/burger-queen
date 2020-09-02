import React, { Fragment } from "react";
import { Link } from "react-router-dom";
const Kitchen = () => {
  return (
    <Fragment>
      <h1> Cocina </h1>
      <button>
        <Link to="/">Ir al inicio</Link>
      </button>
    </Fragment>
  );
};

export default Kitchen;
