import React from "react";
import OneItem from "./OneItem";

const renderItems = ({
  setShowList,
  listInvestment,
  investmentCurrent,
  onClickShow,
}) => {
  let data = listInvestment.map((val, index) => {
    let isTop = index < 3 ? "top" : "";
    return (
      <OneItem
        setShowList={setShowList}
        classname={"item-cost border-radius-5 " + isTop}
        value={
          investmentCurrent && investmentCurrent?.position < val.position
            ? val.price - investmentCurrent.price
            : val.price
        }
        position={val.title}
        cost={val.price}
        revenue={(val.price * val.max_revenue) / 100}
        is_current={investmentCurrent?.position === val.position}
        is_hidden={investmentCurrent?.position >= val.position}
        onClickShow={() => onClickShow(val)}
        investmentCurrent={investmentCurrent}
      />
    );
  });
  return data;
};
const CostUpgrade = ({
  setShowList,
  listInvestment,
  investmentCurrent,
  onClickShow,
}) => {
  return (
    <div className="cost-upgrade parent">
      {renderItems({
        setShowList,
        listInvestment,
        investmentCurrent,
        onClickShow,
      })}
    </div>
  );
};

export default CostUpgrade;
