import React from 'react';
import './garzon.css'

const ItemsMenu = (props) => {
    if (props.option === undefined){
        return(
            <div className="text">Seleccione una opcion</div>
        );
    }
    return (
        props.option.map(item => {
            return (
                <div key={item.id} className="item-menu">
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