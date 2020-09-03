import React, { Fragment } from 'react';
import './order.css'

const Order = () => {
    return(
        <Fragment>
            <div className="container-order">
                <h4 className="table-number">Mesa 5</h4>
                <p className="order-text">
                    1 Hamburguesa sencilla
                </p>
                <p className="order-text">
                    1 Hamburguesa doble
                </p>
                <p className="order-text">
                    1 Hamburguesa doble
                </p>
                <p className="order-text">
                    1 Hamburguesa doble
                </p>
                <p className="order-text">
                    2 Bebida 500ml
                </p>
                <div className="center">
                    <button className="btn-prepair">Preparar</button>
                </div>
            </div>
        </Fragment>
    );
}

export default Order;