import React, { Fragment, useState } from 'react';
import './garzon.css';
import ItemsMenu from './items-menu';
import OptionsMenu from './options-menu';
import LogoSmall from '../logo-small';
import BtnSalon from './btn-salon';
import BtnsGarzon from './btns-garzon';

const Garzon = () => {
    const usuario = JSON.parse(sessionStorage.getItem('user'));

    let [clientName, setClientName] = useState('Cliente');

    const handleInputChange = (event) => {
        setClientName(
            clientName = `Cliente: ` + event.target.value
        )
    }

    let [tableNumber, setTableNumber] = useState('Mesa:');

    const handleInputChanges = (event) => {
        setTableNumber(
            tableNumber = `Mesa: ` + event.target.value
        )
    }
    return (
        <Fragment>
            <div className="container-parent2">
                <h1 className="identification">Garzon: {usuario.user}</h1>
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
                <OptionsMenu />
                <div className="container-menu">
                    <div className="container-items">
                        <ItemsMenu />
                    </div>
                </div>
                <BtnSalon />
                <LogoSmall />
                <div className="bill">
                    <p className="bill-text">{clientName}</p>
                    <p className="bill-text">{tableNumber}</p>
                    <div className="container-items-bill">
                        <p className="bill-text">Agregue un producto</p>
                        <p className="bill-text"> $0 </p>
                        <p className="bill-text"> &#xf2ed;</p>
                    </div>
                    <div className="container-total-bill">
                        <p className="bill-total">Total</p>
                        <p className="bill-total"> $0</p>
                    </div>
                </div>
                <BtnsGarzon />
            </div>
        </Fragment>
    );
}

export default Garzon;