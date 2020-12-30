import React, { useState } from "react";
import { ArrowUpOutlined } from "@ant-design/icons";
import { Link, useRouteMatch } from "react-router-dom";
import { formatNumber } from "helpers/formatNumber";

const Packages = ({ invest, setShowList }) => {
  const { path, url } = useRouteMatch();
  // if package null show text Now , else
  return (
    <div className="packages parent border-radius-5">
      <div className="parent-top">
        <div className="top-left">
          <img
            src={require("assets/images/loading/loader.svg")}
            width={50}
            height={50}
          />
        </div>
        <div className="top-right">
          {invest ? (
            <>
              <span>Package {invest?.title}</span>
              <span> {formatNumber(invest?.price)} $</span>
            </>
          ) : (
            <span>Now. You does not exist package invest yet</span>
          )}
        </div>
      </div>
      {invest && (
        <div className="parent-bottom">
          <Link
            to={`${url}#buy`}
            onClick={() => setShowList(true)}
            className="button-packages border-radius-5"
          >
            <ArrowUpOutlined />
            {invest ? "Upgrade" : "Buy"} now
          </Link>
        </div>
      )}
    </div>
  );
};

export default Packages;
