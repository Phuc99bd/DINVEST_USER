import { Col } from "antd";
import React, { useEffect, useState } from "react";
import FormItem from "./FormItem";
import "../styles.scss";
import { useDispatch } from "react-redux";
import * as actions from "modules/home/redux/actions";

const FormReview = () => {
  const dispatch = useDispatch();
  const [commsisionMember, setCommissionMember] = useState({}),
    [commsisionRef, setCommissionRef] = useState({});
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
    <>
      <Col md={8} xs={24}>
        <FormItem
          Item={
            <>
              <span> {commsisionMember?.active || 0} active</span>
              <span> {commsisionMember?.total_referals || 0} referals</span>
            </>
          }
        ></FormItem>
      </Col>
      <Col md={8} xs={24}>
        <FormItem
          Item={
            <>
              <span> {commsisionRef?.total_bonus} bonus</span>
            </>
          }
        ></FormItem>
      </Col>
      <Col md={8} xs={24}>
        <FormItem
          Item={
            <>
              <span> {commsisionRef?.total_commission_direct} direct</span>
              <span>
                {" "}
                {commsisionRef?.total_commussion_indirect_f1} indirect
              </span>
            </>
          }
        ></FormItem>
      </Col>
    </>
  );
};

export default FormReview;
