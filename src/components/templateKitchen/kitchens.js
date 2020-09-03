import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import LogoKitchen from './logo-kitchen';
import './identificationKitchen.css'

const Kitchen = () => {

  const usuario = JSON.parse(sessionStorage.getItem('user'));

  return (
    <Fragment>
      <h1 className="title-kitchen"> Garzon: {usuario.user} </h1>
      <h2 className="kitchen">Cocina</h2>
      <h3 className="orders">Pedidos</h3>
      <LogoKitchen/>
      <button>
        <Link to="/">Ir al inicio</Link>
      </button>
    </Fragment>
  );
};

export default Kitchen;
