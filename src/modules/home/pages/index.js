import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { FormattedMessage, injectIntl } from "react-intl";
import { get } from "lodash";
import FormReview from "../components/FormReview/index";
import EarnNow from "../components/EarnNow/index";
import RefLink from "../components/RefLink/index";
import "./styles.scss";
import { useSelector } from "react-redux";

const DashboardPage = ({ history }) => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <div className="network-content mt-20">
      <div className="network-review">
        <FormReview label={"text"} value={50}></FormReview>
        <FormReview label={"text"} value={50}></FormReview>
        <FormReview label={"text"} value={50}></FormReview>
      </div>
      <div className="network-review">
        <FormReview label={"text"} value={50}></FormReview>
        <FormReview label={"text"} value={50}></FormReview>
        <FormReview label={"text"} value={50}></FormReview>
      </div>
      <div className="menu-ref-earn">
        <EarnNow userInfo={userInfo} history={history}></EarnNow>
        <RefLink userInfo={userInfo}></RefLink>
      </div>
    </div>
  );
};

export default injectIntl(DashboardPage);
