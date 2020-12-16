import React, { useState } from 'react'
import { ArrowUpOutlined } from '@ant-design/icons'
const showModal = () =>{
    console.log('con cac');
}
const OneItem = ({ value,position, cost,classname}) => {

    return <div className={classname}>
        <div className="top">
            <div className="top-left">
            <img src={require("assets/images/loading/loader.svg")} width={50} height={50} />
            </div>
            <div className="top-right">
                <p>{position}</p>
                <p>$ {value}</p>
                <p>max revenue $ {value}</p>
            </div>
        </div>
        <div className="bottom">
            <div className="bottom-left"><span>Back</span></div>
            <div className="bottom-mid" onClick={showModal()}><ArrowUpOutlined/><span>Upgrade</span></div>
            <div className="bottom-right"><span>{cost}</span></div>
        </div>
    </div>
}

export default OneItem;