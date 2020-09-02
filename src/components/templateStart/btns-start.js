import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

const BtnsStart = () => {
    return(
    <Fragment>
        <button className="btn">
          <Link to="/Salon" className="no-decoration">Salón</Link>
        </button>
        <button className="btn">
          <Link to="/Kitchen" className="no-decoration">Cocina</Link>
        </button>
    </Fragment>
    );
}

export default BtnsStart;