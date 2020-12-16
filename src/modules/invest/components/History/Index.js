import React from 'react'
import { ArrowUpOutlined } from '@ant-design/icons';
import { Link, useRouteMatch } from 'react-router-dom';
import ModalConfirm from 'commons/components/ModalConfirm';
import DrawerHistory from './DrawerHistory';
const History = ({ value , setShowList}) => {
    const { path, url } = useRouteMatch();

    return <div className="history parent border-radius-5">
                <div className="top">
                    History
                </div>
                <div className="bottom">
                    <DrawerHistory/>
                </div>
            </div>
}

export default History;