import React, { useEffect, useState } from "react";
import { Button, Form, InputNumber, Select } from "antd";
import { useDispatch } from "react-redux";
import "./styles.scss";
import { get } from "lodash";
import { FormattedMessage } from "react-intl";
import { CheckOutlined } from "@ant-design/icons";
import * as numeral from "numeral";

const SwapModal = ({ wallet, onSwap }) => {
  const [formSwap] = Form.useForm();

  const onFinish = (values) => {
    let amount = numeral(values.amount).value();
    if (+amount < 0) return;
    onSwap(wallet.unit, amount, values.toCurrency);
  };
  useEffect(() => {
    formSwap.setFieldsValue({ amount: "0", toCurrency: "" });
  }, [wallet]);

  return (
    <Form
      class="formSwap"
      form={formSwap}
      layout="vertical"
      onFinish={onFinish}
    >
      <p>Selection currency</p>
      <Form.Item
        name="toCurrency"
        rules={[
          {
            required: true,
            message: <FormattedMessage id="dashboard.transferModal.message" />,
          },
        ]}
      >
        <Select class="w-100pc form-control" value={null}>
          {wallet.swap.map((e) => {
            return <option value={e.currency}>{e.label}</option>;
          })}
        </Select>
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
        <InputNumber min="0" class="w-100pc" placeholder={"Please enter !"} />
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
