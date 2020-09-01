import React, { Fragment } from 'react';
import '../templateLogin/login.css';
import logoInitial from '../../img/logoInitial.png';
import BtnsArea from './btnsArea';
import './choose.css';

const ChooseArea = () => {
    return (
        <Fragment>
            <div className="container">
                <img src={logoInitial} alt="logo" className="logo"/>
                <h1 className="title">Seleccione su area</h1>
                <BtnsArea/>
            </div>
        </Fragment>
    );
}

export default ChooseArea;