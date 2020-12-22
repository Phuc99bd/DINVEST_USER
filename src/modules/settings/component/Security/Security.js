import { Input, Button } from "antd";
import React from "react";

const Security = () => {
  return (
    <div className="security parent">
      <div className="title">Choose security type</div>
      <div className="content">
        <Button className="email">Email</Button>
        <Button className="authy">Authy</Button>
      </div>
    </div>
  );
};
export default Security;
