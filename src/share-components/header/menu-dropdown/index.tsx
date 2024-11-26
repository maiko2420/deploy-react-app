import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import MenuDropdownList from './dropdown-list';
menuDropDown.propTypes = {

};

function menuDropDown() {
    return (
        <div className="dropdown-content">
            <div className="row-dropdown">
                <div className='col1-dropdown'>
                    <MenuDropdownList name="Phụ kiện di động"></MenuDropdownList>
                </div>
                <div className='col2-dropdown'>
                    <MenuDropdownList name="Thiết bị âm thanh"></MenuDropdownList>
                </div>
            </div>
            <div className="row-dropdown">
                <div className='col1-dropdown'>
                    <MenuDropdownList name="Thiết bị nhà thông minh"></MenuDropdownList>
                </div>
                <div className='col2-dropdown'>
                    <MenuDropdownList name="Phụ kiện Laptop"></MenuDropdownList>
                </div>
            </div>
            <div className="row-dropdown">
                <div className='col1-dropdown'>
                    <MenuDropdownList name="Thiết bị lưu trữ"></MenuDropdownList>
                </div>
                <div className='col2-dropdown'>
                    <MenuDropdownList name="Thương hiệu hàng đầu"></MenuDropdownList>
                </div>
            </div>
        </div>
    );
}

export default menuDropDown;