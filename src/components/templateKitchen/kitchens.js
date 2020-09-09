import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
        const data = await db.collection('orders').get()
        data.docs.map(doc => {
          setDataF( dataF = [...dataF, ({ id: doc.id, ...doc.data() })])
        })
      } catch (error) {
        console.log(error);
      }

    }
    obtenerDatos();
  }, [])
console.log(dataF);

  return (
    <Fragment>
      <div className="container-parent2">
        <h1 className="title-kitchen"> Chef: {usuario.user} </h1>
        <h2 className="kitchen">Cocina</h2>
        <h3 className="orders">Pedidos</h3>
        <LogoKitchen />
        <div className="container-orders">
          <Order orders={dataF}/>
        </div>
        <button>
          <Link to="/area">Ir al inicio</Link>
        </button>
      </div>
    </Fragment>
  );
};

export default Kitchen;
