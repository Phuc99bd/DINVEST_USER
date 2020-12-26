import React from "react";
import { ArrowUpOutlined } from "@ant-design/icons";
import { Link, useRouteMatch } from "react-router-dom";
const PackagesUpgrade = ({ invest, setShowList }) => {
  const { path, url } = useRouteMatch();
  /**
   * invest exist show else null
   * text: Max
   */
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
              <span>{invest.title}</span>
              <span>$ {invest.price}</span>
            </>
          ) : (
            <span>Your current package max now . Can't upgrade</span>
          )}
        </div>
      </div>
      {invest ? (
        <div className="parent-bottom">
          <Link
            to={`${url}#buy`}
            onClick={() => setShowList(true)}
            className="button-packages border-radius-5"
          >
            <ArrowUpOutlined />
            Upgrade now
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default PackagesUpgrade;
