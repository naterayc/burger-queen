import React from 'react';

const ItemsInBill = (props) => {
    return (
        <div key={props.item} className="container-items-bill">
            <p className="bill-text">{props.item}</p>
            <p className="bill-text"> {props.price} </p>
            <p className="bill-text"> &#xf2ed;</p>
        </div>
    );
}
export default ItemsInBill;