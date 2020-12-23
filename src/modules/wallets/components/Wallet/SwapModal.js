import React, { useEffect, useState } from "react";
import { Button, Form, InputNumber } from "antd";
import { useDispatch } from "react-redux";
import "./styles.scss";
import { get } from "lodash";
import { toast } from "react-toastify";
import SelectOption from "commons/components/SelectOption/SelectOption";
import { FormattedMessage } from "react-intl";
import { CheckOutlined } from "@ant-design/icons";

const SwapModal = ({ wallet }) => {
  const [formSwap] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };
  useEffect(() => {
    formSwap.setFieldsValue({ amount: "0" });
  }, []);

  return (
    <Form
      class="formSwap"
      form={formSwap}
      layout="vertical"
      onFinish={onFinish}
    >
      <p>Selection currency</p>
      <Form.Item
        name="wallet_address"
        rules={[
          {
            required: true,
            message: <FormattedMessage id="dashboard.transferModal.message" />,
          },
        ]}
      >
        <select class="w-100pc form-control">
          {wallet.swap.map((e) => {
            return <option value={e.unit}>{e.label}</option>;
          })}
        </select>
      </Form.Item>

      <p>Amount</p>
      <Form.Item
        name="amount"
        rules={[
          {
            required: true,
            message: <FormattedMessage id="dashboard.transferModal.message" />,
          },
        ]}
      >
        <InputNumber class="w-100pc" placeholder={"Please enter !"} />
      </Form.Item>
      <hr></hr>
      <div className="t-center form-submit">
        <Button htmlType="submit" className="btn-confirm-tran">
          <FormattedMessage id="dashboard.button.confirm" />{" "}
          <CheckOutlined className="icon-confirm" />
        </Button>
      </div>
    </Form>
  );
};

export default SwapModal;
