import React from "react";
import { NavLink, useRouteMatch, Switch, Route } from "react-router-dom";
import { Row, Col } from "antd";
import { ROUTE } from "commons/constants";
import { injectIntl } from "react-intl";
import ButtonNav from "commons/components/ButtonNav/index";
import "./styles.scss";
import GeneralPage from "./GeneralPage/index";
import Referals from "./Referals/index";

const NetworkPage = () => {
  const { path, url } = useRouteMatch();

  return (
    <div className="networks-main">
      <div className="networks-body">
        <Row className="networks-header">
          <Col md={8} xs={24}>
            <div class="nav-item">
              <NavLink
                to={`${url}${ROUTE.NETWORKS_GENERAL}`}
                className="box-btn"
                activeClassName="btn-active"
              >
                <ButtonNav title="General"></ButtonNav>
              </NavLink>
            </div>
          </Col>
          <Col md={8} xs={24}>
            <div class="nav-item">
              <NavLink
                to={`${url}${ROUTE.NETWORKS_REFERALS}`}
                className="box-btn"
                activeClassName="btn-active"
              >
                <ButtonNav title="Your referals"></ButtonNav>
              </NavLink>
            </div>
          </Col>
          <Col md={8} xs={24}>
            <div class="nav-item">
              <NavLink
                to={`${url}${ROUTE.NETWORK_REVENUE}`}
                className="box-btn"
                activeClassName="btn-active"
              >
                <ButtonNav title="Revenue"></ButtonNav>
              </NavLink>
            </div>
          </Col>
        </Row>
        <Row className="networks-content" gutter={0}>
          <Col xl={24} lg={24} md={24} xs={24} sm={24}>
            <Switch>
              <Route exact path={`${path}${ROUTE.NETWORKS_GENERAL}`}>
                <GeneralPage></GeneralPage>
              </Route>
              <Route exact path={`${path}${ROUTE.NETWORKS_REFERALS}`}>
                <Referals></Referals>
              </Route>
              <Route exact path={`${path}${ROUTE.NETWORK_REVENUE}`}>
                <div>c</div>
              </Route>
            </Switch>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default injectIntl(NetworkPage);
