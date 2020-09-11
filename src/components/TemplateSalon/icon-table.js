import React, { Fragment } from 'react';
import './templateSalon.css';
import imgOrders from '../../img/imgOrders.png';


const InsertIconTable = () => {
   return (
     <Fragment>
       <div className="icon-table">
           <p className="number-table">2</p>
         <img src={imgOrders} className="img-table" alt="icon" />
       </div>
     </Fragment>
   ); 
}
export default InsertIconTable;