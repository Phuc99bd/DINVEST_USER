import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { injectIntl } from "react-intl";
import FormReview from "../components/FormReview/index";
import EarnNow from "../components/EarnNow/index";
import RefLink from "../components/RefLink/index";
import "./styles.scss";
import { useSelector } from "react-redux";
import * as actions from "../redux/actions";
import LineChart from "../components/LineChartDInvest/index";

const DashboardPage = ({ history }) => {
  const { userInfo } = useSelector((state) => state.auth);
  const [commsisionMember, setCommissionMember] = useState({});
  const [commsisionRef, setCommissionRef] = useState({}),
    dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      actions.getCommissionMember({}, (data) => {
        setCommissionMember(data);
      })
    );
    dispatch(
      actions.getCommissionRef({}, (data) => {
        setCommissionRef(data);
      })
    );
  }, []);

  return (
    <div className="network-content mt-20">
      <div className="network-review">
        <FormReview
          label={"Active"}
          value={commsisionMember?.active || 0}
        ></FormReview>
        <FormReview
          label={"Total Binary"}
          value={commsisionMember?.total_binary || 0}
        ></FormReview>
        <FormReview
          label={"Total Referals"}
          value={commsisionMember?.total_referals || 0}
        ></FormReview>
      </div>
      <div className="network-review">
        <FormReview
          label={"Total bonus"}
          value={commsisionRef?.total_bonus}
        ></FormReview>
        <FormReview
          label={"Total Commission direct"}
          value={commsisionRef?.total_commission_direct || 0}
        ></FormReview>
        <FormReview
          label={"Total Commission indirect f1"}
          value={commsisionRef?.total_commussion_indirect_f1 || 0}
        ></FormReview>
      </div>
      <div className="menu-ref-earn">
        <EarnNow userInfo={userInfo} history={history}></EarnNow>
        <RefLink userInfo={userInfo}></RefLink>
      </div>
      <div className="main-line-chart">
        <div className="header-linechart">
          D INVEST{" "}
          <p>
            {" "}
            In: <span></span> Out: <span></span>{" "}
          </p>
        </div>
        <LineChart></LineChart>
      </div>
    </div>
  );
};

export default injectIntl(DashboardPage);
