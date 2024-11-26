import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import imgItem from '../../../img/3524659.png'
import LogoHot from './logoHot'
ListItem.propTypes = {

};
interface ListItem {
    hot: boolean,
    image: string,
    name: string,
    cost: number,
    outOfStock: boolean
}
function ListItem(props: ListItem) {
    return (
        <div>
            <div className="show-item">
                <img className="logoSP" src={imgItem} />
                {
                    props.hot && <LogoHot></LogoHot>
                }
                <div className="titleSP">
                    <div className="NameSP">
                        <p>Tên sản phẩm</p>
                    </div>
                    <div className="CostSP">
                        <p>100.000VNĐ</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ListItem;