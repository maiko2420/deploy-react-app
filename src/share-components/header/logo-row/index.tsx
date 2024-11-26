import React from 'react';
import PropTypes from 'prop-types';
import imgShop from '../../../img/logoShop.png';
import './style.css';
logorow.propTypes = {

};

function logorow() {
    return (
        <div className="logoRow">
            <img src={imgShop} className="logo" />
        </div>
    );
}

export default logorow;