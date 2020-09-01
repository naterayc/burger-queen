import React from "react";
import { Link } from "react-router-dom";
import './templateSalon.css'

const Salon = () => {
  return (
    <div>
      <h1>Esta sera la pantalla de Salon</h1>
      <button>
        <Link to="/"> Kitchen 
        </Link>
      </button>
    </div>
  );
};
export default Salon;
