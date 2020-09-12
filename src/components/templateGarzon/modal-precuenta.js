import React from 'react';
import './modal.css'
import ItemsInBill from './itemBill';

const ModalPreBill = (props) => {
    return (
        <div className="modal">
            <div className="modal-contentPre">
                <div className="pre-check">
                    <div className="centered">
                        <p className="modal-text">Precuenta</p> <i class="fas fa-print icon"></i>
                    </div>
                    <div>
                        <p className="modal-text-1">{props.client}</p>
                    </div>
                    <div>
                        <p className="modal-text-2">{props.table}</p>
                    </div>
                    {props.items.length === 0 ?
                        <div className="container-items-bill">
                            <p className="bill-text">{props.item}</p>
                            <p className="bill-text"> {props.price} </p>
                            <p className="bill-text"> &#xf2ed;</p>
                        </div> :
                        <ItemsInBill key={props.id} itemsInBill={props.items} delete={props.delete} />
                    }
                    <div className="container-total-bill">
                        <p className="bill-total">Total</p>
                        <p className="bill-total">$ {props.total}</p>
                    </div>
                </div>
                <div>
                    <button onClick={props.close} className="btn-modalPre"> OK </button>
                </div>
            </div>
        </div>
    )
}

export default ModalPreBill;