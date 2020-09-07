import React from 'react';
import './garzon.css'

const ItemsMenu = (props) => {

    return (
        props.option.map(item => {
            return (
                <div key={item.id} className="item-menu" onClick={props.addItem}>
                    <div className="box">
                        <p className="text">{item.name}</p>
                    </div>
                    <div className="box-price">
                        <p className="price">$ {item.price}</p>
                    </div>
                </div>
            );
        })
    );
}

export default ItemsMenu;