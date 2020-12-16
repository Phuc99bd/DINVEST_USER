import React, { useState } from 'react'
import { ArrowUpOutlined } from '@ant-design/icons';
import { Link, useRouteMatch } from 'react-router-dom';
import OneItem from './OneItem';

const renderItems = () => {
    let arrProduct = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let data = arrProduct.map((val, index) => {
        let isTop = index < 3 ? "top" : "";
        return <OneItem classname={"item-cost border-radius-5 " + isTop} value={'200.00'} position={'Member'} cost={'$500.00'}/>
    })
    return data;
}
const CostUpgrade = ({ value }) => {
    
    return <div className="cost-upgrade parent">
        {/* <OneItem value={'200.00'} position={'Member'} cost={'$500.00'}/>
        <OneItem value={'200.00'} position={'Member'} cost={'$500.00'}/>
        <OneItem value={'200.00'} position={'Member'} cost={'$500.00'}/> */}
        {
            renderItems()
        }
    </div>
}

export default CostUpgrade;