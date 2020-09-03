import React, { Fragment } from "react";
import './identificationKitchen.css';
import LogoKitchen from "./logo-kitchen";
import { Link } from "react-router-dom";

const Kitchen = () => {

  const usuario = JSON.parse(sessionStorage.getItem('user'));

  return (

    <Fragment>
      <h1 className="title-kitchen"> Chef: {usuario.user} </h1>
      <h2 className="kitchen">Cocina</h2>
      <h3 className="orders">Pedidos</h3>
      <Link to="/area">
        <LogoKitchen/>
      </Link>
    </Fragment>
  );
};

export default Kitchen;
