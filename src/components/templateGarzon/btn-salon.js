import React from 'react';
import { Link } from 'react-router-dom';
import './btnSalon.css'

const BtnSalon = () => {
    return (
        <Link to="/area">
            <button className="btn-salon">Ir a Salon</button>
        </Link>
    );
}

export default BtnSalon;