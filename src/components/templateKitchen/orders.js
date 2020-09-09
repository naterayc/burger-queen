import React, { Fragment } from 'react';
import './order.css';
import ItemInOrder from './itemInOrder';

const Order = (props) => {
    return (
     props.orders.map(orders => {
            return (           
            <Fragment key={orders.mesa}>
                <div className="container-order">
                    <h4 className="table-number">{orders.mesa}</h4>
                    
                    <ItemInOrder ordersKitchen={orders}/>
                    
                    <div className="center">
                        <button className="btn-prepair">Preparar</button>
                    </div>
                </div>
            </Fragment>
         )
        }) 
    );
}

export default Order;