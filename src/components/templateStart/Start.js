import React, { Fragment } from "react";
import "./Start.css";
import { Link } from "react-router-dom";
const Hello = () => {
  return (
    <Fragment>
      <h1>Seleccione su Área</h1>
      <button>
        <Link to="/Salon">Salón</Link>
      </button>
      <button>
        <Link to="/Kitchen">Cocina</Link>
      </button>
    </Fragment>
  );
};

export default Hello;
