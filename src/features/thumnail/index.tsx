import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import thumnailImg from '../../img/thumnail_Img.jpg'
thumnail.propTypes = {

};

function thumnail() {
    return (
        <div className="thumnail">
            <img src={thumnailImg} />
        </div>
    );
}

export default thumnail;