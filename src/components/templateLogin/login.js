import React, { Fragment } from 'react';
import FormSignIn from './formLogin';
import Logo from '../logo';
import './login.css'
const Login = () => {
  return (
    <Fragment>
        <div className="container">
            <Logo/>
            <FormSignIn />
        </div>
    </Fragment>
  );
}

export default Login;