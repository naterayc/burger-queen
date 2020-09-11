import React, { Fragment }from 'react';

const OptionsMenu = (props) => {
    return (
        <Fragment>
            <div className="container-option-menu">
                <div className={props.classB} onClick={props.breackfast}>
                    <p className="text">Desayuno</p>
                </div>
                <div className={props.classM} onClick={props.meal}>
                    <p className="text">Comidas</p>
                </div>
            </div>
        </Fragment>
    );
}
export default OptionsMenu;