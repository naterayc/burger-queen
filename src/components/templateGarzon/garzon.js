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
import ModalGarzon from './modal-garzon';
import ModalPreBill from './modal-precuenta';
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
    let [classBreackfast, setClassBreackfast] = useState(["menu-option-unselected"])
    let [classMeal, setClassMeal] = useState(["menu-option-unselected"])

    const menuBreackfast = () => {
        setClassBreackfast(classBreackfast = "menu-option");
        if (classMeal === "menu-option") {
            setClassMeal(classMeal = "menu-option-unselected")
        }
        setMenuToShow(menuToShow = menu2);
    }

    const menuMeal = () => {
        setClassMeal(classMeal = "menu-option");
        if (classBreackfast === "menu-option") {
            setClassBreackfast(classBreackfast = "menu-option-unselected")
        }
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
        setClientName(clientName = 'Cliente:');
        setTableNumber(tableNumber = 'Mesa:');
        setItemBill(itemBill = 'Agregue un producto');
        setItemPrice(itemPrice = '$0');
        setItemInBill(itemInBill = []);
        setBillTotal(0);
    }
    const [show, setShow] = useState(false);
    const [showModalPre, setShowModalPre] = useState(false)

    const sendToKitchen = async (e) => {
        e.preventDefault();

        if (itemInBill.length === 0) {
            return
        }

        try {

            const db = firebase.firestore();
            let pedido = itemInBill.map(order => {
                return (
                    order.reduce((result, item) => {
                        return `${result}${item}`
                    })
                )
            })
            // console.log(pedido)
            const order = {
                mesa: tableNumber,
                pedido: pedido,
                hora: Date.now()
            };
            console.log(order);
            await db.collection('orders').add(order);

        } catch (error) {
            console.log(error);
        }

        setClientName(clientName = 'Cliente:');
        setTableNumber(tableNumber = 'Mesa:');
        setItemBill(itemBill = 'Agregue un producto');
        setItemPrice(itemPrice = '$0');
        setItemInBill(itemInBill = []);
        setBillTotal(0);
        setShow(true);
    }

    const closeModal = () => {
        setShow(false);
    }

    const openModalPre = () => {
        setShowModalPre(true);
    }

    const closeModalPre = () => {
        setShowModalPre(false);
    }

    let [itemInBillAfterDelete, setItemInBillAfterDelete] = useState([]);
    const deleteItem = (e) => {

        let itemToDelete = e.currentTarget.previousSibling.previousSibling.textContent;
        let items = itemInBill.map(itemInBill => {
            return (
                itemInBill.map(eachItem => {
                    return eachItem.name
                }))
        });


        let itemsNames = items.map(items => {
            return (items.reduce((result, item) => {
                return `${result}${item}`
            }))
        });

        let index = itemsNames.indexOf(itemToDelete);

        itemInBill.splice(index, 1);

        setItemInBillAfterDelete(itemInBillAfterDelete = itemInBill);

        setItemInBill(itemInBill = itemInBillAfterDelete);

        setItemBill(itemBill = '');
        setItemPrice(itemPrice = '');

        setBillTotal(parseInt(billTotal) - parseInt((e.currentTarget.previousSibling.textContent).slice(4)));
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
                <OptionsMenu
                    classB={classBreackfast}
                    breackfast={menuBreackfast}
                    classM={classMeal}
                    meal={menuMeal} />
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
                <BtnsGarzon send={sendToKitchen} cancel={cancelOrder} showModal={openModalPre} />
            </div>
            {show === false ? null : <ModalGarzon show={show} close={closeModal} />}
            {showModalPre === false ? null :
                <ModalPreBill
                    close={closeModalPre}
                    client={clientName}
                    table={tableNumber}
                    items={itemInBill}
                    item={itemBill}
                    price={itemPrice}
                    total={billTotal}
                    delete={deleteItem} />}
        </Fragment>
    );
}

export default Garzon;
