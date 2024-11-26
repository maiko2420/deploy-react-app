import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import MenuDropDown from '../menu-dropdown';
menuHeaderItem.propTypes = {

};
interface menuHeaderItemInterface {
    name: string
}
function menuHeaderItem(props: menuHeaderItemInterface) {
    const header = props.name
    if (header != "Phụ kiện") {
        return (
            <li>
                <div className="btn1">
                    <a>{header}
                        <FontAwesomeIcon icon={faCaretDown} className='icon' />
                    </a>

                </div>
            </li>
        );
    }
    return (
        <li id="dropdown">
            <div className="btn1">
                <a>{header}
                    <FontAwesomeIcon icon={faCaretDown} className='icon' />
                </a>
                <MenuDropDown></MenuDropDown>
            </div>
        </li>
    );
}

export default menuHeaderItem;



