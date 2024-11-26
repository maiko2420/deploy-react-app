import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import LogoRow from './logo-row';
import MenuHeader from './menu-header';
import CartButton from './cart-button';
import LoginButton from './login-buton';
header.propTypes = {

};

function header() {
    return (
        <div className="menu">
            <LogoRow></LogoRow>
            <MenuHeader></MenuHeader>
            <CartButton></CartButton>
            <LoginButton></LoginButton>
        </div>
    );
}
export default header;