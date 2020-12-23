import React, { useEffect } from "react";
import { Button, Form, InputNumber } from "antd";
import * as numeral from "numeral";
import { FormattedMessage } from "react-intl";
import { CheckOutlined } from "@ant-design/icons";
import SelectOption from "commons/components/SelectOption/SelectOption";
import "./styles.scss";

const FormEarn = ({ onConfirm, amount }) => {
  amount = +amount || 0;
  const [formCommissions] = Form.useForm();

  const onFinish = (values) => {
    const valueAmount = numeral(values.amount).value();
    if (+valueAmount < 0) {
      return;
    }
    onConfirm(valueAmount);
  };

  useEffect(() => {
    formCommissions.setFieldsValue({ amount: "0" });
  }, []);

  const onSelectAmount = (percent) => {
    formCommissions.setFieldsValue({ amount: (amount * percent) / 100 });
  };

  return (
    <div class="modal-earn-now">
      <Form
        class="formCommission"
        form={formCommissions}
        layout="vertical"
        onFinish={onFinish}
      >
        <label>Amount available: {amount.toFixed(2)} $</label>

        <Form.Item
          name="amount"
          rules={[
            {
              required: true,
              message: (
                <FormattedMessage id="dashboard.transferModal.message" />
              ),
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
    </div>
  );
};

export default FormEarn;
