import React, { Fragment } from "react";
import "./Start.css";
import Logo from "../logo";
import BtnsStart from "./btns-start";

const Area = () => {
  return (
    <Fragment>
      <div class="container">
        <Logo/>
        <h1 class="title">Seleccione su Área</h1>
        <BtnsStart/>
      </div>
    </Fragment>
  );
};

export default Area;
