import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
SeenItem.propTypes = {

};
interface itemSeen {
    key: number,
    image: string,
    name: string,
    cost: String
}
function SeenItem(props: itemSeen) {
    return (
        <div className="item-lst-seen"></div>
    );
}

export default SeenItem;