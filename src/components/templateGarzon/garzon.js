import React from 'react';
import './garzon.css'

const Garzon = () => {

    const usuario = JSON.parse(sessionStorage.getItem('user'));
    
    return(
        <h1 className="user"> Garzon: {usuario.user} </h1>
    );
}

export default Garzon;