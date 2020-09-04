import React from 'react';

const Bill = (props) => {
    return (
        <div className="bill">
            <p className="bill-text">{props.client}</p>
            <p className="bill-text">{props.table}</p>
            <div className="container-items-bill">
                <p className="bill-text">Agregue un producto</p>
                <p className="bill-text"> $0 </p>
                <p className="bill-text"> &#xf2ed;</p>
            </div>
            <div className="container-total-bill">
                <p className="bill-total">Total</p>
                <p className="bill-total"> $0</p>
            </div>
        </div>
    );
}

export default Bill;