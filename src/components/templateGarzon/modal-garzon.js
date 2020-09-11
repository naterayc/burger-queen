import React, { Fragment } from 'react';
import './modal.css'

const ModalGarzon = (props) => {
    return (
        <Fragment>
            <div className="modal">
                <div className="modal-content">
                    <p className="modal-text">Pedido Enviado</p>
                    <div>
                        <button onClick={props.close} className="btn-modal"> OK </button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ModalGarzon;