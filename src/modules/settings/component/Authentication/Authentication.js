import { Input } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import InputAuthen from "./Input/InputAuthen";
import {
  changePassword,
  onChangeEmail,
  onVerifyEmail,
} from "modules/settings/redux/actions";
import ModalConfirm from "commons/components/ModalConfirm";
import VerifyModal from "modules/wallets/components/Wallet/VerifyModal";

const Authentication = () => {
  const [formPassword, setFormPassword] = useState({
    currentPassword: "",
    password: "",
    newPassword: "",
  });
  const dispatch = useDispatch();
  const [isShow, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const onSubmit = () => {
    if (
      formPassword.currentPassword === "" ||
      formPassword.password === "" ||
      formPassword.newPassword === ""
    ) {
      toast.error("Please enter your full details");
      return;
    }
    if (formPassword.password !== formPassword.newPassword) {
      toast.error(`Passwords do not match`);
      return;
    }
    dispatch(
      changePassword({
        current_password: formPassword.currentPassword,
        password: formPassword.password,
      })
    );
    setFormPassword({ currentPassword: "", password: "", newPassword: "" });
  };

  const onChangeEmailA = () => {
    dispatch(onChangeEmail({ email }));
    setShow(true);
  };

  const onVerify = (code) => {
    dispatch(
      onVerifyEmail({ email, code }, () => {
        setShow(false);
      })
    );
  };

  return (
    <div className="authentication parent">
      <div className="left">
        <div className="title">Change password</div>
        <div className="content">
          <InputAuthen
            inputTitle="Current password*"
            type="password"
            value={formPassword.currentPassword}
            onChange={(e) =>
              setFormPassword({
                ...formPassword,
                currentPassword: e.target.value,
              })
            }
          />
          <InputAuthen
            inputTitle="New password*"
            type="password"
            value={formPassword.password}
            onChange={(e) =>
              setFormPassword({ ...formPassword, password: e.target.value })
            }
          />
          <InputAuthen
            inputTitle="Confirm password*"
            type="password"
            value={formPassword.newPassword}
            onChange={(e) =>
              setFormPassword({ ...formPassword, newPassword: e.target.value })
            }
          />
          <div className="input-type">
            <Input
              className="button-save"
              type="button"
              value="Save now!"
              onClick={onSubmit}
            />
          </div>
        </div>
      </div>
      <div className="right">
        <div className="title">Change to another email</div>
        <div className="content">
          <div className="input-type">
            <div className="title">New email*</div>
            <div className="input-email">
              <Input
                className="input-change"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                className="button-change"
                type="button"
                value="Change!"
                onClick={onChangeEmailA}
              />
            </div>
          </div>
        </div>
      </div>
      <ModalConfirm
        visible={isShow}
        setVisible={setShow}
        title={`Verify Authenticator`}
        MyForm={<VerifyModal onVerify={onVerify}></VerifyModal>}
      />
    </div>
  );
};

export { Authentication };
