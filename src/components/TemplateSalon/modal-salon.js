import React, { Fragment } from 'react';
import './modal-salon.css'

const ModalSalon = (props) => {
    return (
        <Fragment>
            <div className="modal-salon">
                <div className="modal-contentS">
                    <p className="modal-textS">Pedido Entregado</p>
                    <div>
                        <button onClick={props.close} className="btn-modalS"> OK </button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ModalSalon;