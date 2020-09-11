import React from 'react';
import logoSmall from '../img/logoSmall.png';
import { Link } from 'react-router-dom';
import './logo-small.css';

const LogoSmall = () => {
    return (
      <div className="container-logo-small">
        <Link to="/area">
          <img src={logoSmall} className="logo-small" alt="logo" />
        </Link>
      </div>
    );
}

export default LogoSmall;