import React from "react";
import { Layout, Dropdown, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { FormattedMessage } from "react-intl";
import * as Cookies from "js-cookie";
import { get } from "lodash";

import { ROUTE, USER_INFO_KEY } from "commons/constants";
import "./styles.scss";
import { useParams, useLocation } from "react-router-dom";

const { Header } = Layout;
const MAPPING_TITLE_WITH_ROUTE = {
  [ROUTE.POOL]: <FormattedMessage id="menu.pools" />,
  [ROUTE.WALLET]: <FormattedMessage id="menu.wallets" />,
  [ROUTE.NETWORKS]: <FormattedMessage id="menu.networks" />,
  [ROUTE.SETTINGS]: <FormattedMessage id="menu.settings" />,
  [ROUTE.DASHBOARD]: <FormattedMessage id="menu.dashboard" />,
};

const handleLogout = () => {
  Cookies.remove("token");
  localStorage.removeItem(USER_INFO_KEY);
  window.location.href = window.location.origin + ROUTE.LOGIN;
};

const SubMenuAvatar = () => {
  return (
    <Menu>
      <Menu.Item onClick={handleLogout}>
        <FormattedMessage id="mainSideBar.logout" />
      </Menu.Item>
    </Menu>
  );
};

const HeaderMain = ({ toggleSlider, visible, modeMobile }) => {
  const { userInfo } = useSelector((state) => state.auth);
  console.log(userInfo);
  const { pathname } = useLocation();
  const onToggleSideBar = () => {
    toggleSlider();
  };
  const renderTitle = () => {
    for (let key in MAPPING_TITLE_WITH_ROUTE) {
      if (pathname.indexOf(key) !== -1) {
        return MAPPING_TITLE_WITH_ROUTE[key];
      }
    }
    return "";
  };

  return (
    <Header className="header-container">
      <div className="title-header">{renderTitle()}</div>
      <div className="logo-header">
        <div className="close-mobile">
          {modeMobile && (
            <MenuOutlined onClick={onToggleSideBar} className="icon" />
          )}
        </div>
        <div className="col-right">
          <Dropdown overlay={SubMenuAvatar} trigger={["click"]}>
            <div
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              <div>
                <span className="styleName">
                  Hi {get(userInfo, "last_name", "")}{" "}
                  {get(userInfo, "first_name", "")}
                </span>
                <img
                  width={40}
                  height={40}
                  className="image-avatar"
                  src={require("assets/images/loading/loader.svg")}
                  alt="logo"
                />
              </div>
            </div>
          </Dropdown>
        </div>
      </div>
    </Header>
  );
};

export default HeaderMain;
