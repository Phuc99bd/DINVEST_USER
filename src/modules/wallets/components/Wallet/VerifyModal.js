import React, { useEffect } from "react";
import { Button, Form, InputNumber } from "antd";
import "./styles.scss";
import { FormattedMessage } from "react-intl";
import { CheckOutlined } from "@ant-design/icons";

const VerifyModal = ({ onVerify }) => {
  const [formVerify] = Form.useForm();

  const onFinish = (values) => {
    onVerify(values.code);
    formVerify.setFieldsValue({ code: "" });
  };
  useEffect(() => {
    formVerify.setFieldsValue({ code: "" });
  }, []);

  return (
    <Form
      class="formVerify"
      form={formVerify}
      layout="vertical"
      onFinish={onFinish}
    >
      <p>Code</p>
      <Form.Item
        name="code"
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

export default VerifyModal;
