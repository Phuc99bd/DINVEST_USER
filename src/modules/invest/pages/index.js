import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import CostUpgrade from "../components/costupgrade/Index";
import History from "../components/History/Index";
import Packages from "../components/Packages/Index";
import PackagesUpgrade from "../components/PackagesUpgrade/Index";
import "./styles.scss";
import * as actions from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const InvestPage = () => {
  const { path, url } = useRouteMatch();
  const dispatch = useDispatch();
  const [isShowList, setShowList] = useState(!!window.location.hash || false);
  const { dataCurrentInvest, listInvestment } = useSelector(
    (state) => state.invest
  );

  console.log(dataCurrentInvest);
  useEffect(() => {
    dispatch(actions.getCurrentInvest({}, () => {}));
    dispatch(actions.getListInvestment({}, () => {}));
  }, []);

  return (
    <div className="invest">
      {!isShowList ? (
        <>
          <div className="invest-top">
            <Packages
              setShowList={setShowList}
              invest={dataCurrentInvest?.current_investment}
            />
            <PackagesUpgrade
              setShowList={setShowList}
              invest={dataCurrentInvest?.next_investment}
            />
          </div>
          <div className="invest-bottom">
            <History />
          </div>
        </>
      ) : (
        <div>
          <CostUpgrade setShowList={setShowList} />{" "}
        </div>
      )}
      {}
    </div>
  );
};

export default InvestPage;
