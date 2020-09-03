import React, { useState, useEffect } from 'react';
import './garzon.css'

const ItemsMenu = () => {
    let [menu, setMenu] = useState([]);

    // De forma similar a componentDidMount y componentDidUpdate
    useEffect(() => {
        fetch('menu.json')
            .then(response => response.json())
            .then(data => setMenu( menu = data ));
    });

    return (
        menu.map(item => {
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