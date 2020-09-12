import React, { Fragment } from 'react';
import './btnsGarzon.css';
import { Link } from 'react-router-dom';

const BtnsGarzon = (props) => {
    return (
        <Fragment>
            <div className="container-btns">
                <div>
                    <Link to="/kitchen"> 
                        <button className="btn-garzon" onClick={props.send}>Enviar a Cocina</button> 
                    </Link>
                </div>
                <div>
                    <button className="btn-garzon" onClick={props.showModal}>Ir a Pre Cuenta</button>
                </div>
                <div>
                    <button className="btn-cancel" onClick={props.cancel}>Cancelar</button>
                </div>
            </div>
        </Fragment>
    );
}

export default BtnsGarzon;