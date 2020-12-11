import React, { useEffect, useState } from "react";
import { Card, Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";
import { FormattedMessage, injectIntl } from "react-intl";
import { Link } from "react-router-dom";
import { get } from "lodash";

import { ROUTE , PRODUCTION } from "commons/constants";
import "./styles.scss";

const DashboardPage = ({ history, location }) => {
    return <div className="network-content">
            
        </div>
}   

export default injectIntl(DashboardPage);
