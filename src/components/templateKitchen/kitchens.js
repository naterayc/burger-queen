import React, { Fragment, useEffect, useState } from "react";
import LogoKitchen from './logo-kitchen';
import './identificationKitchen.css'
import Order from "./orders";
import { firebase } from '../../firebase';



const Kitchen = () => {

  const usuario = JSON.parse(sessionStorage.getItem('user'));
  let [dataF, setDataF] = useState([]);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const db = firebase.firestore();
        const data = await db.collection('orders').orderBy('hora', 'asc').get()
        data.docs.map(doc => {
          setDataF(dataF = [...dataF, ({ id: doc.id, ...doc.data() })])
        })
      } catch (error) {
        console.log(error);
      }

    }
    obtenerDatos();
  }, [])

  const [showM, setShowM] = useState(false);
  const [timeT, setTimeT] = useState(0);

  const setFinish = (e) => {

    //e.preventDefault();

    const btnToUpdate = e.target;
    const id = e.target.parentElement.parentElement.id;

    if (btnToUpdate.textContent === 'Terminar') {
      let dateT = Date.now();
      let dateOrder = btnToUpdate.parentElement.id;
      setTimeT(((dateT - dateOrder) / 60000).toFixed(2));

      console.log('se abre modal');

      setShowM(true);

      const updateOrder = async (id, data) => {
        try {
          const db = firebase.firestore();
          await db.collection("orders").doc(id).update(data);
        } catch (error) {
          console.log(error);
        }
      }

      updateOrder(e.target.parentElement.parentElement.id, {
        hora: "terminado"
      })


      const arrOrder = dataF.filter(order => order.id !== id);
      setDataF(arrOrder);
    }

    btnToUpdate.className = "btn-finish";
    btnToUpdate.textContent = "Terminar";
  }


  const closeModalK = () => {
    setShowM(false);
  }

  return (
    <Fragment >
      <div className="container-parent3">
        <h1 className="title-kitchen"> Chef: {usuario.user} </h1>
        <h2 className="kitchen">Cocina</h2>
        <h3 className="orders">Pedidos</h3>
        <LogoKitchen />
        <div className="container-orders" >
          <Order orders={dataF} finish={setFinish} time={timeT} show={showM} closeModal={closeModalK} />
        </div>
      </div>
    </Fragment>
  );
};

export default Kitchen;
