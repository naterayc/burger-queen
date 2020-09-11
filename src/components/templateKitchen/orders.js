import React, { Fragment, useState } from 'react';
import './order.css';
import ItemInOrder from './itemInOrder';
import ModalKitchen from './modal-kitchen';

const Order = (props) => {


    return (
        props.orders.map((orders) => {
            return (
                <Fragment>
                    <div id={orders.id} className="container-order">
                        <h4 className="table-number">{orders.mesa}</h4>
                        <div className="align">
                            <ItemInOrder key={props.orders}
                                ordersKitchen={orders}
                            />
                        </div>
                        <div id={orders.hora} className="center">
                            <button
                                id={orders.id}
                                className='btn-prepair'
                                onClick={props.finish} >
                                Preparar
                            </button>
                        </div>
                    </div>
                    {props.show === false ? null : <ModalKitchen time={props.time} show={props.show} close={props.closeModal} />}
                </Fragment>
            )
        })
    );
}

export default Order;