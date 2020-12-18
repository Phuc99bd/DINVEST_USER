import { Col } from "antd";
import React from "react";
import FormItem from "./FormItem";
import "../styles.scss";

const FormReview = () => {
  return (
    <>
      <Col md={8} xs={24}>
        <FormItem
          Item={
            <>
              <span> 6 active</span>
              <span> 55 referals</span>
            </>
          }
        ></FormItem>
      </Col>
      <Col md={8} xs={24}>
        <FormItem
          Item={
            <>
              <span> 6 active</span>
            </>
          }
        ></FormItem>
      </Col>
      <Col md={8} xs={24}>
        <FormItem
          Item={
            <>
              <span> 6 active</span>
              <span> 55 referals</span>
            </>
          }
        ></FormItem>
      </Col>
      <Col md={8} xs={24}>
        <FormItem
          Item={
            <>
              <span> 6 active</span>
              <span> 55 referals</span>
            </>
          }
        ></FormItem>
      </Col>
      <Col md={8} xs={24}>
        <FormItem
          Item={
            <>
              <span> 6 active</span>
              <span> 55 referals</span>
            </>
          }
        ></FormItem>
      </Col>
      <Col md={8} xs={24}>
        <FormItem
          Item={
            <>
              <span> 6 active</span>
              <span> 55 referals</span>
            </>
          }
        ></FormItem>
      </Col>
    </>
  );
};

export default FormReview;
