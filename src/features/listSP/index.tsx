import React from 'react';
import PropTypes from 'prop-types';
import './style.css'
import ListHot from './list-hot';
ListSP.propTypes = {

};
interface ListSPInterface {
    hot: boolean
}
function ListSP(props: ListSPInterface) {

    return (
        <div className='listSP'>
            <p className="header-list">Danh sách nổi bật</p>
            {props.hot && <ListHot></ListHot>}

        </div>
    );
}

export default ListSP;