import { Button, Input } from "antd";
import React, { useState } from "react";

import { SelectFormPhone } from "./Select/Select";

const Authy = ({ title }) => {
  return (
    <div className="authy">
      <div className="select-region input-authy">
        <div className="title">{title}</div>
        <SelectFormPhone />
      </div>
      <div className="type-phone input-authy">
        <div className="title">{title}</div>
        <Input />
      </div>
      <div className="button-save input-authy">
        <div className="title">{title}</div>
        <Button>Save now!</Button>
      </div>
    </div>
  );
};

export { Authy };
