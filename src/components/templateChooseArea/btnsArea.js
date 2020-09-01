import React, { Fragment } from 'react';
import './btns.css'
import {Link} from 'react-router-dom';

const BtnsArea = () => {
    return(
        <Fragment>
            <Link to="/garzon" className="no-decoration">
                <button className="btn"> Garzon </button>
            </Link> 
            <Link to="/kitchen" className="no-decoration">
                <button className="btn"> Chef </button>
            </Link>
        </Fragment>
    );
}

export default BtnsArea;