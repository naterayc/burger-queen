import React, { Fragment }from 'react';
import './garzon.css';
import ItemsMenu from './items-menu';

const Garzon = () => {
    const usuario = JSON.parse(sessionStorage.getItem('user'));
    
    
    return(
        <Fragment>
            <h1 className="identification">Garzon: {usuario.user}</h1>
            <div className="container-option-menu">
                <div className="menu-option">
                    <p className="text">Desayuno</p>
                </div>
                <div className="menu-option">
                    <p className="text">Comidas</p>
                </div>
            </div>
            <div className="container-menu">
                <div className="container-items">
                    <ItemsMenu/>
                </div>
            </div>
        </Fragment>
    );
}

export default Garzon;