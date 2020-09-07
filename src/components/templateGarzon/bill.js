import React from 'react';
import ItemsInBill from './itemBill';

const Bill = (props) => {
    return (
        <div className="bill">
            <p className="bill-text">{props.client}</p>
            <p className="bill-text">{props.table}</p>
            {/* <div className="container-items-bill">
                <p className="bill-text">{props.item}</p>
                <p className="bill-text"> {props.price} </p>
                <p className="bill-text"> &#xf2ed;</p>
    </div> */}
            {
                <ItemsInBill item={props.item} price={props.price} /> ?
                    <ItemsInBill item={props.item} price={props.price} /> :
                    <ItemsInBill item={props.item} price={props.price} />
            }
            <div className="container-total-bill">
                <p className="bill-total">Total</p>
                <p className="bill-total"> $0</p>
            </div>
        </div>
    );
}

export default Bill;