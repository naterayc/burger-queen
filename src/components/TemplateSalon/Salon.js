import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import LogoSmall from "../logo-small";


const salon = () => {

    const usuario = JSON.parse(sessionStorage.getItem("user"));
     
  return (
    <Fragment>
      <div className="container-parent2">
        <h1 classeName="title-kitchen"> Chef: {usuario.user} </h1>
        <h2 className="kitchen">Salón</h2>
        <h3 className="orders">Pedidos listos para servir</h3>
        <Link to="/area">
          <LogoSmall />
        </Link>
      </div>
    </Fragment>
  );
};

export default salon;
 