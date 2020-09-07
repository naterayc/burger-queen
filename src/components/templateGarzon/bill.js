import React from 'react';
import ItemsInBill from './itemBill';

const Bill = (props) => {
    return (
        <div className="bill">
            <p className="bill-text">{props.client}</p>
            <p className="bill-text">{props.table}</p>
            {props.items.length === 0 ?
                <div className="container-items-bill">
                    <p className="bill-text">{props.item}</p>
                    <p className="bill-text"> {props.price} </p>
                    <p className="bill-text"> &#xf2ed;</p>
                </div> :
                <ItemsInBill key={props.id} itemsInBill={props.items} />
            }
            <div className="container-total-bill">
                <p className="bill-total">Total</p>
                <p className="bill-total">$ {props.total}</p>
            </div>
        </div>
    );
}

export default Bill;