import { Input } from "antd";
import React from "react";

const InputAuthen = ({ inputTitle, value, type }) => {
  return (
    <div className="input-type">
      <p className="title">{inputTitle}</p>
      <Input.Password value={value} />
    </div>
  );
};

export default InputAuthen;
