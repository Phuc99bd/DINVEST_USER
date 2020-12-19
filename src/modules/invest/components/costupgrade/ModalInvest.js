import React, { useState } from "react";
import { ArrowUpOutlined } from "@ant-design/icons";
import { Link, useRouteMatch } from "react-router-dom";

const ModalInvest = ({ value, position }) => {
  return (
    <div className="invest-modal">
      <div className="content-modal">
        <p>
          Do you want to {position}: {value}
        </p>
        <img
          src={require("assets/images/loading/loader.svg")}
          width={50}
          height={50}
        />
      </div>
      <div className="button-modal">
        <div className="button border-radius-5">
          <span>Confirm!</span>
          <img
            src={require("assets/images/loading/loader.svg")}
            width={25}
            height={25}
          />
        </div>
      </div>
    </div>
  );
};

export default ModalInvest;
