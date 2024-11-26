import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import MenuHeaderItem from '../menu-header-item';
menuHeader.propTypes = {

};

function menuHeader() {
    return (
        <ul className="menuHeader">
            <MenuHeaderItem name="Điện thoại" />
            <MenuHeaderItem name="Laptop" />
            <MenuHeaderItem name="Phụ kiện" />
            <MenuHeaderItem name="Đồng hồ" />
            <MenuHeaderItem name="Tablet" />
            <MenuHeaderItem name="Máy cũ, thu cũ" />
        </ul>
    );
}

export default menuHeader;