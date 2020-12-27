import { Input } from "antd";
import React from "react";

const InputUser = ({ inputTitle, value, name }) => {
  return (
    <div className="input-type">
      <p className="title">{inputTitle}</p>
      <Input type="text" defaultValue={value} name={name} required />
    </div>
  );
};

export { InputUser };
