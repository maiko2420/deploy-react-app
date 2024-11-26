import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import MenuDropDownItem from '../dropdown-item';
dropdownList.propTypes = {

};
interface dropdownListInterface {
    name: string
}
function dropdownList(props: dropdownListInterface) {
    const name = props.name;
    const count = 4;
    const listItem = [];
    for (let i = 0; i < count; i++) {
        listItem.push(
            <MenuDropDownItem key={i}></MenuDropDownItem>
        );
    }
    return (
        <div>
            <h4>{name}</h4>
            <div className="menu-child-item">
                {listItem}
            </div>
        </div>
    );
}

export default dropdownList;