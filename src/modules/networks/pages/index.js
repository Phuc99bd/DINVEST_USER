import React from "react";
import { NavLink, useRouteMatch, Switch, Route } from "react-router-dom";
import { Row , Col } from "antd";
import { ROUTE } from "commons/constants";
import { injectIntl } from "react-intl";

const NetworkPage =  ()=>{
    const { path, url } = useRouteMatch();


    return <div className="networks-main">
              <div className="networks-body">
        <Row className="networks-header">
            <Col md={8} xs={24}>
            <NavLink
              to={`${url}${ROUTE.NETWORKS_GENERAL}`}
              className="box-btn"
              activeClassName="btn-active"
            >
              test
            </NavLink>
            </Col>
            <Col md={8} xs={24}>
            <NavLink
              to={`${url}${ROUTE.NETWORKS_REFERALS}`}
              className="box-btn"
              activeClassName="btn-active"
            >revenue</NavLink>
            </Col>
            <Col md={8} xs={24}>
                <NavLink
                to={`${url}${ROUTE.NETWORK_REVENUE}`}
                className="box-btn"
                activeClassName="btn-active"
                >revenue</NavLink>
            </Col>
        </Row>
        <Row className="networks-content" gutter={0}>
         <Col xl={24} lg={24} md={24} xs={24} sm={24}>
            <Switch>
              <Route exact path={`${path}${ROUTE.NETWORKS_GENERAL}`}>
             <div>a</div>
              </Route>
              <Route exact path={`${path}${ROUTE.NETWORKS_REFERALS}`}>
             <div>b</div>
              </Route>
              <Route exact path={`${path}${ROUTE.NETWORK_REVENUE}`}>
             <div>c</div>
              </Route>
              </Switch>
            </Col>
        </Row>
        </div>
    </div>
}

export default injectIntl(NetworkPage);