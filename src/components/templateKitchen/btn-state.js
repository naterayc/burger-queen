import React from 'react';

const BtnState = (props) => {
    console.log(props.id)
    return (
        <div key={props.id} className="center">
            <button
                id={props.id}
                className={props.class}
                onClick={props.change} >
                {props.text}
            </button>
        </div>
    );
}

export default BtnState;