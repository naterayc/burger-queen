import React, {Fragment, useState} from 'react';
import './formLogin.css';
import {useForm} from 'react-hook-form';
import {Link} from 'react-router-dom';

const FormSignIn = () => {

    const {register, errors, handleSubmit} = useForm();
    let [userName, setUsername] = useState('');

    const handleInputChange = (event) => {
        setUsername(
            userName = event.target.value
        )
    }

    const onSubmit = (userName, e) => {
        //console.log(userName);
        sessionStorage.setItem('user', JSON.stringify(userName));
        e.target.reset();
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
                    onChange={handleInputChange}
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
                        <Link to="/Area" className="no-decoration">Ingresar</Link>
                    </button>
            </form>
        
        </Fragment>
    );
}

export default FormSignIn;