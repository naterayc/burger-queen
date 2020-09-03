import React, { Fragment } from 'react';
import './formLogin.css';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

const FormSignIn = () => {

    const {register, errors, handleSubmit} = useForm();

   let history = useHistory();

    const onSubmit = (userName, e) => {
        sessionStorage.setItem('user', JSON.stringify(userName));
        e.target.reset();
        history.push('/Area');
    } 

    return (
        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                <input
                    type="text"
                    placeholder=" Nombre de usuario           &#xf007;"
                    name="user"
                    className="inputs"
                    autoComplete="off"
                    ref={register({
                        required: {
                            value: true, 
                            message: 'Nombre es requerido'
                            }, 
                        minLength: {
                            value: 2, 
                            message: 'Mínimo 2 carácteres'
                            }
                        })}>
                </input>
                </div>
                <div>
                    <span className="error-msg">
                        {errors?.user?.message}
                    </span>
                </div>
                    <button type="submit" className="btn">
                        Ingresar
                    </button>
            </form>
        
        </Fragment>
    );
}

export default FormSignIn;