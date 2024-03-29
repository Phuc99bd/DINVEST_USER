import { Input } from "antd";
import React from "react";

const InputAuthen = ({ inputTitle, value, onChange }) => {
  return (
    <div className="input-type">
      <p className="title">{inputTitle}</p>
      <Input.Password value={value} onChange={onChange} />
    </div>
  );
};

export default InputAuthen;
