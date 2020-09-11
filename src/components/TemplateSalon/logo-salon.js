import React from "react";
import logoSmall from "../../img/logoSmall.png";
import { Link } from "react-router-dom";
import "./templateSalon.css";

const LogoSmallSalon = () => {
  return (
    <div className="container-logo-small-salon">
      <Link to="/area">
        <img src={logoSmall} className="logo-small-salon" alt="logo" />
      </Link>
    </div>
  );
};

export default LogoSmallSalon;
