import React, { Fragment } from "react";
import { Link } from "react-router-dom";
const Kitchen = () => {
  const usuario = JSON.parse(sessionStorage.getItem('user'));
  return (
    <Fragment>
      <h1 className="identification"> Chef: {usuario.user} </h1>
      <button>
        <Link to="/">Ir al inicio</Link>
      </button>
    </Fragment>
  );
};

export default Kitchen;
