import { Input } from "antd";
import React from "react";

const InputUser = ({ inputTitle, value }) => {
  return (
    <div className="input-type">
      <p className="title">{inputTitle}</p>
      <Input value={value} readOnly />
    </div>
  );
};

export { InputUser };
