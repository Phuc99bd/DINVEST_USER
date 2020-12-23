import React, { useEffect } from "react";
import { Card, Form, Input, Button, message } from "antd";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

import { ROUTE } from "commons/constants";
import * as actions from "modules/auth/redux/actions";
import "./styles.scss";

const SignUpPage = ({ history, location }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { setFieldsValue } = form;
  const url = new URLSearchParams(location.search);
  const sponsorKey = url.get("sponsorKey") || url.get("sponsorkey");
  useEffect(() => {
    if (!sponsorKey) return () => {};
    setFieldsValue({
      sponsorKey: sponsorKey.toLowerCase(),
    });
  }, [url, setFieldsValue]);

  const isDisable = sponsorKey ? true : false;

  const onFinish = (values) => {
    const password = values?.password;
    const confirmPassword = values?.confirm_password;
    if (!password || !confirmPassword) {
      message.warning("Invalid password");
      return;
    }
    if (password !== confirmPassword) {
      message.warning("Password and confirm password do not match");
      return;
    }
    delete values.confirm_password;
    dispatch(
      actions.postSignup(values, () => {
        history.push(ROUTE.LOGIN);
      })
    );
  };

  return (
    <div className="sign-up-container">
      <div className="sign-up-box-container">
        <Card
          title={<FormattedMessage id="auth.signup.modal.title" />}
          className="card-login-custom"
        >
          <Form
            form={form}
            name="normal_login"
            className="login-form"
            onFinish={onFinish}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <div style={{ width: "45%" }}>
                <label className="input-field-label">
                  <FormattedMessage id="auth.signup.modal.input.field.label.firstname" />
                  <span>
                    {" "}
                    <FormattedMessage id="auth.signin.modal.required.mark" />
                  </span>
                </label>
                <Form.Item
                  name="first_name"
                  rules={[
                    {
                      required: true,
                      message: (
                        <FormattedMessage id="auth.signup.modal.empty.message.firstname" />
                      ),
                    },
                  ]}
                >
                  <Input className="input-field" />
                </Form.Item>
              </div>

              <div style={{ width: "45%" }}>
                <label className="input-field-label">
                  <FormattedMessage id="auth.signup.modal.input.field.label.lastname" />
                  <span>
                    {" "}
                    <FormattedMessage id="auth.signin.modal.required.mark" />
                  </span>
                </label>
                <Form.Item
                  name="last_name"
                  rules={[
                    {
                      required: true,
                      message: (
                        <FormattedMessage id="auth.signup.modal.empty.message.lastname" />
                      ),
                    },
                  ]}
                >
                  <Input className="input-field" />
                </Form.Item>
              </div>
            </div>

            <label className="input-field-label">
              <FormattedMessage id="auth.signup.modal.input.field.label.email" />
              <span>
                {" "}
                <FormattedMessage id="auth.signin.modal.required.mark" />
              </span>
            </label>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: (
                    <FormattedMessage id="auth.signup.modal.empty.message.email" />
                  ),
                },
              ]}
            >
              <Input className="input-field" />
            </Form.Item>

            <label className="input-field-label">
              <FormattedMessage id="auth.signup.modal.input.field.label.password" />
              <span>
                {" "}
                <FormattedMessage id="auth.signin.modal.required.mark" />
              </span>
            </label>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: (
                    <FormattedMessage id="auth.signup.modal.empty.message.password" />
                  ),
                },
              ]}
            >
              <Input className="input-field" type="password" />
            </Form.Item>

            <label className="input-field-label">
              <FormattedMessage id="auth.signup.modal.input.field.label.confirm.password" />
              <span>
                {" "}
                <FormattedMessage id="auth.signin.modal.required.mark" />
              </span>
            </label>
            <Form.Item
              name="confirm_password"
              rules={[
                {
                  required: true,
                  message: (
                    <FormattedMessage id="auth.signup.modal.empty.message.confirm.password" />
                  ),
                },
              ]}
            >
              <Input className="input-field" type="password" />
            </Form.Item>

            <label className="input-field-label">
              <FormattedMessage id="auth.signup.modal.input.field.label.sponsorKey" />
              <span>
                {" "}
                <FormattedMessage id="auth.signin.modal.required.mark" />
              </span>
            </label>
            <Form.Item
              name="sponsorKey"
              rules={[
                {
                  required: true,
                  message: (
                    <FormattedMessage id="auth.signup.modal.empty.message.sponsorKey" />
                  ),
                },
              ]}
            >
              <Input className="input-field" disabled={isDisable} />
            </Form.Item>

            <Form.Item className="action">
              <Button
                size="middle"
                type="primary"
                htmlType="submit"
                className="primary-button"
              >
                <FormattedMessage id="auth.signin.modal.button.signup.label" />
              </Button>
            </Form.Item>

            <Form.Item className="action">
              <Link
                className="forgot-button"
                to={`${ROUTE.FORGOT_PASSWORD}`.replace("//", "/")}
              >
                <FormattedMessage id="auth.signin.modal.forgot.password.label" />
              </Link>
              <Link
                className="sign-up-link"
                to={`${ROUTE.LOGIN}`.replace("//", "/")}
              >
                <FormattedMessage id="auth.signin.modal.login.label" />
              </Link>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default SignUpPage;
