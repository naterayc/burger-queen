import React, { Fragment }from 'react';

const OptionsMenu = () => {
    return (
        <Fragment>
            <div className="container-option-menu">
                <div className="menu-option">
                    <p className="text">Desayuno</p>
                </div>
                <div className="menu-option">
                    <p className="text">Comidas</p>
                </div>
            </div>
        </Fragment>
    );
}
export default OptionsMenu;