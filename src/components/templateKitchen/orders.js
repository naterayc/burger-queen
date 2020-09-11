import React, { Fragment, useState } from 'react';
import './order.css';
import ItemInOrder from './itemInOrder';
import ModalKitchen from './modal-kitchen';

const Order = (props) => {

    let [btnText, setBtnText] = useState("Preparar");
    let [btnClass, setBtnClass] = useState("btn-prepair");

    const setFinish = (e) => {

        if (props.orders.filter(item => item === e.target.id)) {
            setBtnText("Terminar");
            setBtnClass("btn-finish");
        }
    }

    return (
        props.orders.map(orders => {
            return (
                <Fragment key={orders.mesa}>
                    <div className="container-order">
                        <h4 className="table-number">{orders.mesa}</h4>

                        <ItemInOrder
                            ordersKitchen={orders}
                        />
                        <div key={orders.id} className="center" >
                            <button
                                id={orders.id}
                                className={btnClass}
                                onClick={setFinish} >
                                {btnText}
                            </button>
                        </div>


                    </div>
                </Fragment>
            )
        })
    );
}

export default Order;