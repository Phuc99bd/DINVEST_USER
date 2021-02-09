import React, { useEffect } from "react";
import { Button, Form, InputNumber } from "antd";
import "./styles.scss";
import { FormattedMessage } from "react-intl";
import { CheckOutlined } from "@ant-design/icons";
import * as numeral from "numeral";

const ExchangeModal = ({ wallet, onExchange }) => {
  const [formWithdraw] = Form.useForm();

  const onFinish = (values) => {
    let amount = numeral(values.amount).value();
    if (+amount < 0) return;
    onExchange(amount);
    cleanForm();
  };

  const cleanForm = () => {
    formWithdraw.setFieldsValue({ amount: "0" });
    formWithdraw.setFieldsValue({ wallet_address: "" });
  };
  useEffect(() => {
    cleanForm();
  }, []);

  return (
    <Form
      class="formWithdraw"
      form={formWithdraw}
      layout="vertical"
      onFinish={onFinish}
    >
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

export default ExchangeModal;
