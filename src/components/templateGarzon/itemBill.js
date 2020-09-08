import React from 'react';

const ItemsInBill = (props) => {
    return (
        props.itemsInBill.map(itemInBill => {
            console.log(itemInBill);
            return (
                itemInBill.map(eachItem => {
                    return (
                        <div key={eachItem.name} className="container-items-bill">
                            <p className="bill-text">{eachItem.name}</p>
                            <p className="bill-text"> $ {eachItem.price.slice(1)} </p>
                            <p className="bill-text" onClick={props.delete}> &#xf2ed;</p>
                        </div>
                    )
                })
            );
        })
    );
}
export default ItemsInBill;