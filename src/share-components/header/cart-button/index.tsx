import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
cartButtom.propTypes = {

};

function cartButtom() {
    return (
        <div className="cart">
            <FontAwesomeIcon icon={faCartShopping} className='img' />
        </div>
    );
}

export default cartButtom;