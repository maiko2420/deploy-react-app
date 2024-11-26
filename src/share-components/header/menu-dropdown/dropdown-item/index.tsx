import React from 'react';
import PropTypes from 'prop-types';
import logoTempt from '../../../../img/3524659.png';
import './style.css';
dropdownItem.propTypes = {

};

function dropdownItem() {
    return (
        <div className="card">
            <img src={logoTempt} className="card-img-top" />
            <b className="card-text">Test</b>

        </div>
    );
}

export default dropdownItem;