import React from "react";
import UserInfor from "./userinfor/UserInfor";

import { InputUser } from "./Input/Input";
import { DatePicker, Space, Menu, Dropdown, Input } from "antd";
import moment from "moment";
import { DownOutlined } from "@ant-design/icons";
const Personal = () => {
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.alipay.com/"
        >
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item key="1">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.taobao.com/"
        >
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Divider />
      {/* <Menu.Item key="3" disabled>
                3rd menu item（disabled）
            </Menu.Item> */}
    </Menu>
  );

  const dateFormat = "YYYY/MM/DD";
  return (
    <div className="personal parent">
      <UserInfor name="Nguyen Dat" link="Link referals" code="CaiXfgmDX" />
      <div className="bottom">
        <div className="input-parent">
          <InputUser inputTitle="First name*" value="Dat" />
          <InputUser inputTitle="Last name*" value="Nguyen" />
        </div>
        <div className="input-parent">
          <div className="input-type">
            <p className="title">Birthday</p>
            <DatePicker
              defaultValue={moment("2015/01/01", dateFormat)}
              format={dateFormat}
            />
          </div>
          <div className="input-type">
            <p className="title">Birthday</p>
            <Dropdown overlay={menu}>
              <a
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                <span>
                  <span>Male</span>
                  <DownOutlined />
                </span>
              </a>
            </Dropdown>
          </div>
        </div>
        <div className="input-parent">
          <InputUser inputTitle="Address" value="12/2, Bình Thạnh" />
          <InputUser inputTitle="Country" value="Vietnam" />
        </div>
        <div className="input-parent">
          <InputUser inputTitle="Address" value="12/2, Bình Thạnh" />
          <div className="input-type button">
            <Input value="Save now!" type="button" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personal;
