import React from "react";

const FormItem = ({ Item }) => {
  return (
    <div className="form-item">
      <div className="item-img">
        <img
          src={require("assets/images/loading/loader.svg")}
          width={50}
          height={50}
        />
      </div>
      <div className="item-content">{Item}</div>
    </div>
  );
};

export default FormItem;
