import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../share-components/header'
import Thumnail from '../../features/thumnail'
import ListSP from '../../features/listSP';
PageAll.propTypes = {

};

function PageAll() {
    return (
        <div className="App">
            <Header></Header>
            <Thumnail></Thumnail>
            <ListSP hot={true}></ListSP>
        </div>
    );
}

export default PageAll;