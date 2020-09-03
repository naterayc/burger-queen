import React, { Fragment } from 'react';
import './btnsGarzon.css';

const BtnsGarzon = () => {
    return (
        <Fragment>
            <div className="container-btns">
                <div>
                    <button className="btn-garzon">Enviar a Cocina</button>
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