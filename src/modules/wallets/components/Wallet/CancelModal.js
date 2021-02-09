import React, { useEffect } from "react";
import { Button, Form } from "antd";
import "./styles.scss";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

const CancelModal = ({ setCancel, onCancel }) => {
  const [formCancel] = Form.useForm();

  const onFinish = () => {
    onCancel();
    formCancel.setFieldsValue({ code: "" });
  };
  const onClickCancel = () => {
    setCancel(false);
  };
  useEffect(() => {
    formCancel.setFieldsValue({ code: "" });
  }, []);

  return (
    <Form
      class="formVerify"
      form={formCancel}
      layout="vertical"
      onFinish={onFinish}
    >
      <div className="t-center form-submit">
        <Button htmlType="submit" className="btn-confirm-tran">
          Delete
          <CheckOutlined className="icon-confirm" />
        </Button>
        <Button
          htmlType="button"
          className="btn-cancel-tran"
          onClick={onClickCancel}
        >
          Cancel
          <CloseOutlined className="icon-confirm" />
        </Button>
      </div>
    </Form>
  );
};

export default CancelModal;
