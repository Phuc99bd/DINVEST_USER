import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { Layout } from "antd";
import { ROUTE, USER_INFO_KEY } from "commons/constants";
import * as Cookies from "js-cookie";
import "./private.scss";
import { DashboardPage } from "modules/home";
import { InvestPage } from "modules/invest";
import { WalletPage } from "modules/wallets";
import { NetworkPage } from "modules/networks";
import MainSideBar from "commons/components/MainHeader/index";
import HeaderMain from "commons/components/HeaderMain/index";
import { SettingsPages } from "modules/settings";
import Notfound from "modules/notfound";

const PrivateLayout = () => {
  const [openKeys, setOpenKeys] = useState([]);
  const [showDrawer, setShowDrawer] = useState(false);

  const [modeMobile, setModeMobile] = useState(false);
  const [visible, setVisible] = useState(false);
  const [currentTabSidebar, setCurrentTabSidebar] = useState(
    window.location.pathname
  );

  useEffect(() => {
    onGetDefaultOpenKey();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  const handleResize = () => {
    const windowSize = window.innerWidth;
    if (windowSize < 1000) {
      setModeMobile(true);
    } else {
      setModeMobile(false);
    }
  };

  const handleLogout = () => {
    Cookies.remove("token");
    localStorage.removeItem(USER_INFO_KEY);
    window.location.href = window.location.origin + ROUTE.LOGIN;
  };

  const onGetDefaultOpenKey = () => {
    const { pathname } = window.location;
    let keys = [];
    switch (pathname) {
      case ROUTE.ORDER:
        keys = ["_myTransaction"];
        break;
      case ROUTE.WALLET_TRANSACTION:
        keys = ["_myTransaction"];
        break;
      case ROUTE.COMMISSIONS:
        keys = ["_myTransaction"];
        break;
      default:
        break;
    }
    setOpenKeys(keys);
  };

  const toggleSideBar = () => {
    setVisible(!visible);
    setShowDrawer(!showDrawer);
    if (!visible) {
      setOpenKeys([]);
      return;
    }
    onGetDefaultOpenKey();
  };
  return (
    <Layout className="private-layout-container">
      <MainSideBar
        showDrawer={showDrawer}
        modeMobile={modeMobile}
        setCurrentTabSidebar={setCurrentTabSidebar}
        setOpenKeys={setOpenKeys}
        openKeys={openKeys}
        visible={visible}
        current={currentTabSidebar}
        onLogout={handleLogout}
        setShowDrawer={setShowDrawer}
      />
      <Layout>
        <HeaderMain
          modeMobile={modeMobile}
          toggleSlider={toggleSideBar}
          visible={visible}
        />
        <div className="content-layout">
          <Switch>
            <Route exact path={ROUTE.DASHBOARD} component={DashboardPage} />
            <Route exact path={ROUTE.INVEST} component={InvestPage} />
            <Route exact path={ROUTE.WALLETS} component={WalletPage} />
            <Route path={ROUTE.NETWORKS} component={NetworkPage} />
            <Route path={ROUTE.SETTINGS} component={SettingsPages} />
            <Route path="*" exact={true} component={Notfound} />
          </Switch>
        </div>
      </Layout>
    </Layout>
  );
};

export default PrivateLayout;
