import React from "react";
import { ArrowUpOutlined } from "@ant-design/icons";
import { Link, useRouteMatch } from "react-router-dom";
import { formatNumber } from "helpers/formatNumber";

const PackagesUpgrade = ({ invest, investCurrent, setShowList }) => {
  const { url } = useRouteMatch();
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
              <span>
                ${" "}
                {formatNumber(
                  investCurrent
                    ? invest.price - investCurrent.price
                    : invest.price
                )}
              </span>
            </>
          ) : (
            <span>Next package upgrade You're own lastest package!</span>
          )}
        </div>
      </div>
      {invest && invest.position !== 10 ? (
        <div className="parent-bottom">
          <Link
            to={`${url}#buy`}
            onClick={() => setShowList(true)}
            className="button-packages border-radius-5"
          >
            <ArrowUpOutlined />
            {investCurrent ? "Upgrade now" : "Buy now"}
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default PackagesUpgrade;
