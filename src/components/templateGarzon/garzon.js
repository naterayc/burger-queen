import React, { Fragment, useState, useEffect } from 'react';
import './garzon.css';
import ItemsMenu from './items-menu';
import OptionsMenu from './options-menu';
import LogoSmall from '../logo-small';
import BtnSalon from './btn-salon';
import BtnsGarzon from './btns-garzon';
import Identification from './identification';
import Bill from './bill';
import { firebase } from '../../firebase'
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
    let [itemInBill, setItemInBill] = useState([]);
    let [billTotal, setBillTotal] = useState(0);

    const addItemtoBill = (e) => {
        setItemBill(itemBill = e.currentTarget.firstChild.textContent);
        setItemPrice(itemPrice = e.currentTarget.lastChild.textContent);
        let itemAdded = [{ name: itemBill, price: itemPrice }];
        setItemInBill([...itemInBill, itemAdded]);
        setBillTotal(parseInt(billTotal) + parseInt(itemPrice.slice(1)));
    }

    const cancelOrder = () => {
        setItemInBill(itemInBill = []);
        console.log(itemInBill);
        setBillTotal(0);
    }

    useEffect(() => {
        const obtenerDatos = async () => {
            try {
                const db = firebase.firestore();
                const data = await db.collection('orders').get()
                data.docs.map(doc => {
                    const dataF = ({ id: doc.id, ...doc.data() })
                    console.log(dataF)
                })
            } catch (error) {
                console.log(error);
            }

        }
        obtenerDatos();
    }, [])

    const sendToKitchen = async (e) => {
        e.preventDefault();

        if (itemInBill.length === 0) {
            console.log('vacio');
            return
        }

        try {

            const db = firebase.firestore();
            let pedido = itemInBill.map(order => {
                return (
                    order.reduce((result, item)=> {
                        return `${result}${item}`
                    })
                )
            })
            console.log(pedido)
            const order = {
                mesa: tableNumber,
                pedido: pedido,
                hora: Date.now()
            };
            console.log(order);
            const data = await db.collection('orders').add(order);

        } catch (error) {
            console.log(error);
        }
        console.log(itemInBill);
    }

    const deleteItem = () => {
        console.log('holi');
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
                        />}
                </div>
                <BtnSalon />
                <LogoSmall />
                <Bill
                    client={clientName}
                    table={tableNumber}
                    items={itemInBill}
                    item={itemBill}
                    price={itemPrice}
                    total={billTotal}
                    delete={deleteItem}
                />
                <BtnsGarzon send={sendToKitchen} cancel={cancelOrder} />
            </div>
        </Fragment>
    );
}

export default Garzon;