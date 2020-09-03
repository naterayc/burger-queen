import React from "react";
import { Link } from "react-router-dom";

const Salon = () => {
  return (
    <div className="container-parent2">
      <h1>Esta sera la pantalla de Salon</h1>
      <button>
        <Link to="/area"> Kitchen </Link>
      </button>
    </div>
  );
};
export default Salon;
