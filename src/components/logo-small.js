import React from 'react';
import logoSmall from '../img/logoSmall.png';
import './logo-small.css';

const LogoSmall = () => {
    return (
        <div className="container-logo-small">
            <img src={logoSmall} className="logo-small" alt="logo" />
        </div>
    );
}

export default LogoSmall;