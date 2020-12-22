import React from "react";

const TabHeader = ({ headTitle, srcImg, description }) => {
  return (
    <div className="button-head-settings">
      <img
        src={require("assets/images/loading/loader.svg")}
        width={50}
        height={50}
      />
      <span>{headTitle}</span>
      <span>{description}</span>
    </div>
  );
};

export default TabHeader;
