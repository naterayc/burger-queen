import React, { Fragment } from 'react';
import FormSignIn from './formLogin';
import Logo from '../logo';
import './login.css'
const Login = () => {
  return (
    <Fragment>
      <div className="container-parent">
        <div className="container">
          <Logo />
          <FormSignIn />
        </div>
      </div>
    </Fragment>
  );
}

export default Login;