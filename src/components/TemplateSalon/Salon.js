import React, { Fragment } from "react";
import LogoSmallSalon from "./logo-salon";
import InsertIconTable from "./icon-table";

const Salon = () => {
  const usuario = JSON.parse(sessionStorage.getItem("user"));

  return (
    <Fragment>
      <div className="container-parent2">
        <h1 className="title-kitchen"> Chef: {usuario.user} </h1>
        <h2 className="kitchen">Salón</h2>
        <h3 className="orders">Pedidos listos para servir</h3>
        <div>
          <LogoSmallSalon />
        </div>
        <div className="container-table">
          <InsertIconTable />
          <InsertIconTable />
          <InsertIconTable />
          <InsertIconTable />
        </div>
      </div>
    </Fragment>
  );
};

export default Salon;
