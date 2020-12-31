import React, { useState } from "react";
import { ArrowUpOutlined } from "@ant-design/icons";
import { formatNumber } from "helpers/formatNumber";

const OneItem = ({
  value,
  position,
  cost,
  classname,
  setShowList,
  revenue,
  is_current,
  is_hidden,
  onClickShow,
}) => {
  return (
    <div className={classname}>
      <div className="top">
        <div className="top-left">
          <img
            src={require("assets/images/loading/loader.svg")}
            width={50}
            height={50}
          />
        </div>
        <div className="top-right">
          <p>{position}</p>
          <p>$ {formatNumber(value)}</p>
          <p>max revenue $ {formatNumber(revenue)}</p>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-left" onClick={() => setShowList(false)}>
          <span>Back</span>
        </div>
        <div
          className={`bottom-mid ${
            is_hidden && !is_current ? "upgrade-hidden" : ""
          }`}
          onClick={() => {
            !is_current && onClickShow();
          }}
        >
          {is_current ? (
            "current"
          ) : (
            <>
              <ArrowUpOutlined />
              <span>Upgrade</span>
            </>
          )}
        </div>
        <div className="bottom-right">
          <span>{formatNumber(cost)}$</span>
        </div>
      </div>
    </div>
  );
};

export default OneItem;
