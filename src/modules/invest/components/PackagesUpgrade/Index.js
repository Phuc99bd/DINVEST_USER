import React from 'react'
import { ArrowUpOutlined } from '@ant-design/icons';
import { Link, useRouteMatch } from 'react-router-dom';
const PackagesUpgrade = ({ value , setShowList}) => {
    const { path, url } = useRouteMatch();

    return <div className="packages parent border-radius-5">
                <div className="parent-top">
                    <div className="top-left"><img src={require("assets/images/loading/loader.svg")} width={50} height={50}/></div>
                    <div className="top-right">
                        <span>Package</span>
                        <span>$ {value} invest</span>
                    </div>
                </div>
                <div className="parent-bottom">
                    <Link to={`${url}#buy`} onClick={()=>setShowList(true)} className="button-packages border-radius-5"><ArrowUpOutlined />Upgrade now</Link>
                </div>
            </div>
}

export default PackagesUpgrade;