import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { FormattedMessage, injectIntl } from "react-intl";
import { Link } from "react-router-dom";
import { get } from "lodash";
import FormReview from "../components/FormReview/index";
import EarnNow from "../components/EarnNow/index";
import RefLink from "../components/RefLink/index";
import { ROUTE , PRODUCTION } from "commons/constants";
import "./styles.scss";

const DashboardPage = ({ history, location }) => {
    return <div className="network-content mt-20" >
            <div className="network-review">
                <FormReview label={"text"} value={50} ></FormReview>
                <FormReview label={"text"} value={50} ></FormReview>
                <FormReview label={"text"} value={50} ></FormReview>
            </div>
            <div className="network-review">
                <FormReview label={"text"} value={50} ></FormReview>
                <FormReview label={"text"} value={50} ></FormReview>
                <FormReview label={"text"} value={50} ></FormReview>

            </div>
            <div className="menu-ref-earn">
                <EarnNow value={20}></EarnNow>
                <RefLink sponsorKey={"DKAWDWA"}></RefLink>
            </div>
        </div>
}   

export default injectIntl(DashboardPage);
