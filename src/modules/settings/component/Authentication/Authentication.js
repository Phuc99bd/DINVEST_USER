import { Input } from "antd";
import React from "react";
import InputAuthen from "./Input/InputAuthen";
const Authentication = () => {
  return (
    <div className="authentication parent">
      <div className="left">
        <div className="title">Change password</div>
        <div className="content">
          <InputAuthen inputTitle="Current password*" type="password" />
          <InputAuthen inputTitle="New password*" type="password" />
          <InputAuthen inputTitle="Confirm password*" type="password" />
          <div className="input-type">
            <Input className="button-save" type="button" value="Save now!" />
          </div>
        </div>
      </div>
      <div className="right">
        <div className="title">Change to another email</div>
        <div className="content">
          <div className="input-type">
            <div className="title">New email*</div>
            <div className="input-email">
              <Input className="input-change" />
              <Input className="button-change" type="button" value="Change!" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Authentication };
