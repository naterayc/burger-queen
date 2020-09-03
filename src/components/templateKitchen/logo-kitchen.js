import React from 'react';
import logoSmall from '../../img/logoSmall.png'
import './logoKitchen.css';

const LogoKitchen = () => {
    return (
        <div className="container-logo-kitchen">
            <img src={logoSmall} className="logo-kitchen" alt="logo" />
        </div>
    );
}

export default LogoKitchen;