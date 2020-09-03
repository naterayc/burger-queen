import React from 'react';
import { Link } from 'react-router-dom';
import './btnSalon.css'

const BtnSalon = () => {
    return (
        <Link to="/area">
            <button className="btn-salon">Pedidos a servir</button>
        </Link>
    );
}

export default BtnSalon;