import React from 'react';

const ItemInOrder = (props) => {
    return (
        props.ordersKitchen.pedido.map(order => {
            return (
                <p className="order-text"> {order.name} </p >
            )
        })
    )
}

export default ItemInOrder;