import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import SeenPage from './seen-page';
import Carousel from 'react-bootstrap/Carousel';

import 'bootstrap/dist/css/bootstrap.min.css';


seen.propTypes = {

};

function seen() {
    return (
        <div className='seen'>
            <p className="header-seen">Sản phẩm đã xem</p>
            <SeenPage></SeenPage>
        </div>
    );
}

export default seen;