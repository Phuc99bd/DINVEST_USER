import { Row, Col } from "antd";
import { ROUTE } from "commons/constants";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink, Route, Switch, useRouteMatch } from "react-router-dom";
import { Authentication } from "../component/Authentication/Authentication";
import Personal from "../component/Personal/Personal";
import Security from "../component/Security/Security";
import TabHeader from "../component/TabHeader/TabHeader";
import "./styles.scss";

const SettingsPages = () => {
  const { path, url } = useRouteMatch();
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <div className="settings-main">
      <div className="settings-header">
        <Row className="settings-tabs">
          <Col md={4} xs={24}>
            <div class="nav-item">
              <NavLink
                to={`${url}${ROUTE.SETTING_PERSONAL}`}
                className="tab personal"
                activeClassName="tab-active"
              >
                <TabHeader
                  headTitle="Personal"
                  description="Update your personal infor"
                />
              </NavLink>
            </div>
          </Col>
          <Col md={4} xs={24}>
            <div class="nav-item">
              <NavLink
                to={`${url}${ROUTE.SETTING_AUTHENTICATION}`}
                className="tab authentication"
                activeClassName="tab-active"
              >
                <TabHeader
                  headTitle="Authentication"
                  description="Change your password"
                />
              </NavLink>
            </div>
          </Col>
          <Col md={4} xs={24}>
            <div class="nav-item">
              <NavLink
                to={`${url}${ROUTE.SETTING_SECURITY}`}
                className="tab security"
                activeClassName="tab-active"
              >
                <TabHeader
                  headTitle="Security"
                  description="Multi Layered Security"
                />
              </NavLink>
            </div>
          </Col>
        </Row>
      </div>
      <Row className="networks-content border-radius-5" gutter={0}>
        <Col xl={24} lg={24} md={24} xs={24} sm={24}>
          <Switch>
            <Route exact path={`${path}${ROUTE.SETTING_PERSONAL}`}>
              <Personal userInfo={userInfo} />
            </Route>
            <Route exact path={`${path}${ROUTE.SETTING_AUTHENTICATION}`}>
              <Authentication />
            </Route>
            <Route exact path={`${path}${ROUTE.SETTING_SECURITY}`}>
              <Security userInfo={userInfo} />
            </Route>
          </Switch>
        </Col>
      </Row>
    </div>
  );
};

export default SettingsPages;
