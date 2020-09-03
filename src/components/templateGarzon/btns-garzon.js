import React, { Fragment } from 'react';
import './btnsGarzon.css';
import { Link } from 'react-router-dom';

const BtnsGarzon = () => {
    return (
        <Fragment>
            <div className="container-btns">
                <div>
                    <Link to="/kitchen"> 
                        <button className="btn-garzon">Enviar a Cocina</button> 
                    </Link>
                </div>
                <div>
                    <button className="btn-garzon">Ir a Pre Cuenta</button>
                </div>
                <div>
                    <button className="btn-cancel">Cancelar</button>
                </div>
            </div>
        </Fragment>
    );
}

export default BtnsGarzon;