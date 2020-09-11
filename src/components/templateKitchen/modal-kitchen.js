
import React, { Fragment } from 'react';
import './modalk.css'

const ModalKitchen = (props) => {
    return (
        <Fragment>
            <div className="modalk">
                <div className="modal-contentk">
                    <p className="modal-textk">Pedido Terminado</p>
                    <p className="modal-text2">Tiempo transcurrido: {props.time} min</p>
                    <div>
                        <button onClick={props.close} className="btn-modalk"> OK </button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ModalKitchen;

