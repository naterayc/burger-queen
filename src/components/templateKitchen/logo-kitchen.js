import React from 'react';
import { Link } from 'react-router-dom';
import logoSmall from '../../img/logoSmall.png'
import './logoKitchen.css';

const LogoKitchen = () => {
    return (
        <div className="container-logo-kitchen">
            <Link to="/area"> <img src={logoSmall} className="logo-kitchen" alt="logo" /> </Link>
        </div>
    );
}

export default LogoKitchen;