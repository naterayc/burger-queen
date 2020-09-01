import React, {Fragment} from 'react';
import './logo.css'
import logoInitial from '../img/logoInitial.png';

const Logo = () => {
    return (
        <Fragment>
            <img src={logoInitial} className="logo" alt="logo"/>
        </Fragment>
    );
}

export default Logo;