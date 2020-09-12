import React, { Fragment, useState, useEffect } from "react";
import LogoSmallSalon from "./logo-salon";
import InsertIconTable from "./icon-table";
import { firebase } from '../../firebase';

const Salon = () => {
  const usuario = JSON.parse(sessionStorage.getItem("user"));
  let [ordersToServe, setOrdersToServe] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const db = firebase.firestore();
        const data = await db.collection('orders').where("hora", "==", "terminado")
          .get()
        data.docs.map(doc => {
          setOrdersToServe(ordersToServe = [...ordersToServe, ({ id: doc.id, ...doc.data() })])

          console.log(ordersToServe);
        })
      } catch (error) {
        console.log(error);
      }

    }
    getOrders();
  }, [])

  const deleteOrder = async (e) => {
    e.preventDefault();
    let id = e.currentTarget.id;

    try {
      const db = firebase.firestore();
      await db.collection('orders').doc(id).delete()
    } catch (error) {
      console.log(error);
    }


    const arrOrderToServe = ordersToServe.filter(order => order.id !== id);
      setOrdersToServe(arrOrderToServe);
  }


  return (
    <Fragment>
      <div className="container-parent2">
        <h1 className="title-kitchen"> Chef: {usuario.user} </h1>
        <h2 className="kitchen">Salón</h2>
        <h3 className="orders">Pedidos listos para servir</h3>
        <div>
          <LogoSmallSalon />
        </div>
        <div className="container-table">
          <InsertIconTable delete={deleteOrder} orders={ordersToServe} />
        </div>
      </div>
    </Fragment>
  );
};

export default Salon;
