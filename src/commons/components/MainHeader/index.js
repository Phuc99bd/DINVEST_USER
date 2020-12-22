/* eslint-disable */
import React from "react";
import cn from "classnames";
import { Layout, Menu, Drawer } from "antd";
import { Link } from "react-router-dom";
import { ROUTE } from "commons/constants";

import "./styles.scss";

import { FormattedMessage, injectIntl } from "react-intl";
import {
  DashboardOutlined,
  DingdingOutlined,
  DribbbleOutlined,
  MoneyCollectOutlined,
  SettingOutlined,
  WalletOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;
const rootSubMenuKeys = ["_myTransaction"];

const MainSideBar = ({
  visible,
  openKeys,
  current,
  setOpenKeys,
  setCurrentTabSidebar,
  modeMobile,
  showDrawer,
  setShowDrawer,
}) => {
  // const { userInfo } = useSelector(state => state.auth);
  const handleClickMenu = (e) => {
    setCurrentTabSidebar(e.key);
  };

  const handleOpenChangeMenu = (openKeysList) => {
    const latestOpenKey = openKeysList.find(
      (key) => openKeys.indexOf(key) === -1
    );

    if (rootSubMenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(openKeysList);
      return;
    }

    setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
  };

  const itemMenu = [
    {
      id: 1,
      icon: <DashboardOutlined />,
      title: <FormattedMessage id={"menu.dashboard"} />,
      link: ROUTE.HOME,
      subMenu: [],
    },
    {
      id: 2,
      icon: <WalletOutlined />,
      title: <FormattedMessage id={"menu.wallets"} />,
      link: ROUTE.WALLETS,
      subMenu: [],
    },
    {
      id: 3,
      icon: <MoneyCollectOutlined />,
      title: <FormattedMessage id={"menu.invest"} />,
      link: ROUTE.INVEST,
      subMenu: [],
    },
    {
      id: 4,
      icon: <DribbbleOutlined />,
      title: <FormattedMessage id={"menu.networks"} />,
      link: ROUTE.NETWORKS + ROUTE.NETWORKS_GENERAL,
      subMenu: [],
    },
    {
      id: 5,
      icon: <SettingOutlined />,
      title: <FormattedMessage id={"menu.settings"} />,
      link:
        ROUTE.SETTINGS +
        ROUTE.SETTING_PERSONAL +
        ROUTE.SETTING_AUTHENTICATION +
        ROUTE.SETTING_SECURITY,
      subMenu: [],
    },
  ];

  const renderMenu = (showContent) => {
    return (
      <>
        <div className="showLogo">
          <center>
            <Link to={ROUTE.HOME}>
              <DingdingOutlined className="logo-main" />
            </Link>
          </center>
        </div>
        <Menu
          className="sidebar-menu-custom"
          mode="inline"
          onClick={handleClickMenu}
          onOpenChange={handleOpenChangeMenu}
          openKeys={openKeys}
          selectedKeys={[current]}
        >
          {itemMenu.map((ele, key) => (
            <Menu.Item
              className={cn(
                "menu-item-custom",
                showContent && "menu-item-hide"
              )}
              key={ele.link}
            >
              <div className="menu-sub_title">
                <Link className="link-sidebar" to={ele.link}>
                  {!showContent && (
                    <div>
                      {ele.icon && <div className="icon-menu">{ele.icon}</div>}
                      {ele.title && (
                        <div className="menu-text">{ele.title}</div>
                      )}
                    </div>
                  )}
                </Link>
              </div>
            </Menu.Item>
          ))}
        </Menu>
      </>
    );
  };
  return (
    <>
      {modeMobile && (
        <Drawer
          placement="right"
          visible={showDrawer}
          placement="left"
          width={150}
          className="mode-drawer-custom"
          onClose={() => setShowDrawer(false)}
        >
          {renderMenu(false)}
        </Drawer>
      )}

      {!modeMobile && (
        <Sider
          className="sidebar-custom"
          collapsed={visible}
          collapsible
          trigger={null}
          width={150}
        >
          {renderMenu(visible)}
        </Sider>
      )}
    </>
  );
};

export default injectIntl(MainSideBar);
