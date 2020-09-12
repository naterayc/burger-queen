import React, { Fragment } from 'react';
import './templateSalon.css';
import imgOrders from '../../img/imgOrders.png';


const InsertIconTable = (props) => {
  return (
    props.orders.map(orders => {
      return (
        <Fragment>
          <div className="icon-table" id={orders.id} onClick={props.delete}>
            <p className="number-table">{orders.mesa}</p>
            <img src={imgOrders} className="img-table" alt="icon" />
          </div>
        </Fragment>
      )
    })
  )
}
export default InsertIconTable;