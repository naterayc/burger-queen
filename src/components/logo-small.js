import React from 'react';
import logoSmallGray from '../img/logoSmallGray.png';
import './logo-small.css';

const LogoSmall = () => {
    return (
        <div className="container-logo-small">
            <img src={logoSmallGray} className="logo-small" alt="logo" />
        </div>
    );
}

export default LogoSmall;