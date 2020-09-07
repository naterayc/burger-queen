import React, { Fragment, useState, useEffect } from 'react';
import './garzon.css';
import ItemsMenu from './items-menu';
import OptionsMenu from './options-menu';
import LogoSmall from '../logo-small';
import BtnSalon from './btn-salon';
import BtnsGarzon from './btns-garzon';
import Identification from './identification';
import Bill from './bill';

const Garzon = () => {
    const usuario = JSON.parse(sessionStorage.getItem('user'));
    const user = usuario.user;

    let [clientName, setClientName] = useState('Cliente');

    const handleInputChange = (event) => {
        setClientName(
            clientName = `Cliente: ` + event.target.value
        );
    }

    let [tableNumber, setTableNumber] = useState('Mesa:');

    const handleInputChanges = (event) => {
        setTableNumber(
            tableNumber = `Mesa: ` + event.target.value
        );
    }

    let [menu, setMenu] = useState([]);

    // De forma similar a componentDidMount y componentDidUpdate
    useEffect(() => {
        fetch('menu.json')
            .then(response => response.json())
            .then(data => setMenu(menu = data));

    }, []);

    let [menu2, setMenu2] = useState([]);

    // De forma similar a componentDidMount y componentDidUpdate
    useEffect(() => {
        fetch('desayuno.json')
            .then(response => response.json())
            .then(data => setMenu2(menu2 = data));
    }, []);

    let [menuToShow, setMenuToShow] = useState([]);

    const menuBreackfast = () => {
        setMenuToShow(menuToShow = menu2);
    }

    const menuMeal = () => {
        setMenuToShow(menuToShow = menu);
    }

    let [itemBill, setItemBill] = useState('Agregue un producto');
    let [itemPrice, setItemPrice] = useState('$0');
    const addItemtoBill = (e) => {
        setItemBill(itemBill = e.currentTarget.firstChild.textContent);
        setItemPrice(itemPrice = e.currentTarget.lastChild.textContent);
    }

    return (
        <Fragment>
            <div className="container-parent2">
                <Identification usuario={user} />
                <div className="container-input">
                    <input
                        type="text"
                        placeholder=" Comensal"
                        name="client"
                        className="inputs"
                        onChange={handleInputChange}
                        autoComplete="off" />
                </div>
                <div className="container-input">
                    <input
                        type="text"
                        placeholder=" Mesa"
                        name="table"
                        className="inputs"
                        onChange={handleInputChanges}
                        autoComplete="off" />
                </div>
                <OptionsMenu breackfast={menuBreackfast} meal={menuMeal} />
                <div className="container-menu">
                    {menuToShow.length === 0 ?
                        <div className="text"> Seleccione un menú </div> :
                        <ItemsMenu
                            option={menuToShow}
                            addItem={addItemtoBill}
                            name={itemBill}
                            price={itemPrice}
                        />}
                </div>
                <BtnSalon />
                <LogoSmall />
                <Bill
                    client={clientName}
                    table={tableNumber}
                    item={itemBill}
                    price={itemPrice}
                />
                <BtnsGarzon />
            </div>
        </Fragment>
    );
}

export default Garzon;