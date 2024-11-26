import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../share-components/header'
import Thumnail from '../../features/thumnail'
import Seen from '../../features/seen'
import ListSP from '../../features/listSP';
PageHome.propTypes = {

};

function PageHome() {
    return (
        <div className="App">
            <Header></Header>
            <Thumnail></Thumnail>
            <Seen></Seen>
            <ListSP hot={true}></ListSP>
        </div>
    );
}

export default PageHome;