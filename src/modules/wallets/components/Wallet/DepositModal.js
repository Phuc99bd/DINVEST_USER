import React from "react";
import { Button, Form } from "antd";
import { CopyTwoTone } from "@ant-design/icons";
import "./styles.scss";
import QRCode from "qrcode.react";
import { get } from "lodash";
import { toast } from "react-toastify";
import { CopyToClipboard } from "react-copy-to-clipboard";

const DepositModal = ({ wallet }) => {
  const [formDeposit] = Form.useForm();

  const onFinish = (values) => {};

  const onCopy = () => {
    toast.success("Copy Success! 🆗", { draggable: true });
  };

  return (
    <Form
      class="formDeposit"
      form={formDeposit}
      layout="vertical"
      onFinish={onFinish}
    >
      <CopyToClipboard onCopy={onCopy} text={get(wallet, "address", "")}>
        <div className="address-deposit">
          <input type="text" value={get(wallet, "address", "")} readOnly />
          <span>
            <CopyTwoTone />
          </span>
        </div>
      </CopyToClipboard>
      <div className="canvas-qrcode">
        <QRCode size={160} value={get(wallet, "address", "")} />
      </div>
      <hr></hr>
      <div className="t-center form-submit">
        <Button htmlType="button" className="btn-confirm-tran">
          Scan to deposit
        </Button>
      </div>
    </Form>
  );
};

export default DepositModal;
