import { Input, Button } from "antd";
import React from "react";
import { Authy } from "./Authy/Authy";
import { useState } from "react";

const Security = () => {
  const [isShowAuth, setShowAuth] = useState(false);
  const onClick = () => {
    setShowAuth(!isShowAuth);
    // console.log(isShowAuth);
  };
  const showAuth = () => {
    if (isShowAuth == true) {
      return <Authy />;
    }
  };
  return (
    <div className="security parent">
      <div className="title">Choose security type</div>
      <div className="content">
        <Button className="email">Email</Button>
        <Button className="authy" onClick={onClick}>
          Authy
        </Button>
      </div>
      {showAuth()}
    </div>
  );
};
export default Security;
