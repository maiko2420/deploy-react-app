import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../list-item';
import { forEachChild } from 'typescript';
ListHot.propTypes = {

};

function ListHot() {
    const list = []
    for (let i = 0; i < 12; i++) {
        list.push(
            <ListItem key={i} name='' cost={0} hot={true} outOfStock={false} image=''></ListItem>
        )
    }
    return (
        <div className='list-show'>
            {list}
        </div>

    );
}

export default ListHot;