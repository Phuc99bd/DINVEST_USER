import React, { useEffect } from "react";
import { Button, Form, InputNumber, Input } from "antd";
import "./styles.scss";
import { get } from "lodash";
import SelectOption from "commons/components/SelectOption/SelectOption";
import { FormattedMessage } from "react-intl";
import { CheckOutlined } from "@ant-design/icons";
import * as numeral from "numeral";

const WithdrawMoal = ({ wallet, onWithdraw }) => {
  const [formWithdraw] = Form.useForm();

  const onSelectAmount = (percent) => {
    formWithdraw.setFieldsValue({ amount: (wallet.amount * percent) / 100 });
  };
  const onFinish = (values) => {
    let amount = numeral(values.amount).value();
    onWithdraw(wallet.unit, values.toAddress, amount);
  };
  useEffect(() => {
    formWithdraw.setFieldsValue({ amount: "0" });
    formWithdraw.setFieldsValue({ wallet_address: "" });
  }, []);

  return (
    <Form
      class="formWithdraw"
      form={formWithdraw}
      layout="vertical"
      onFinish={onFinish}
    >
      <p>Wallet address</p>
      <Form.Item
        name="toAddress"
        rules={[
          {
            required: true,
            message: <FormattedMessage id="dashboard.transferModal.message" />,
          },
        ]}
      >
        <Input class="w-100pc" placeholder={"Please enter !"} />
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
      <SelectOption onClickOption={onSelectAmount} />
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

export default WithdrawMoal;
