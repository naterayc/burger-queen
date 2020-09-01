import React, { Fragment } from "react";
import "./Start.css";
import { Link } from "react-router-dom";
import Logo from "../logo";
const Area = () => {
  return (
    <Fragment>
      <div class="container">
        <Logo/>
        <h1 class="title">Seleccione su Área</h1>
        <button className="btn">
          <Link to="/Salon" className="no-decoration">Salón</Link>
        </button>
        <button className="btn">
          <Link to="/Kitchen" className="no-decoration">Cocina</Link>
        </button>
      </div>
    </Fragment>
  );
};

export default Area;
