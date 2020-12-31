import React from "react";
import { formatNumber } from "helpers/formatNumber";

const ModalInvest = ({ product, investmentCurrent, onBuyInvestment }) => {
  let value =
    (investmentCurrent
      ? product.price - investmentCurrent.price
      : product.price) || 0;

  return (
    <div className="invest-modal">
      <div className="content-modal">
        <p>
          Do you want to {product?.title}: {formatNumber(value)}$
        </p>
        <img
          src={require("assets/images/loading/loader.svg")}
          width={50}
          height={50}
        />
      </div>
      <div className="button-modal">
        <div className="button border-radius-5" onClick={onBuyInvestment}>
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
