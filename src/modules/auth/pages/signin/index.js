import React, { useEffect, useState } from "react";
import { Card, Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";
import { FormattedMessage, injectIntl } from "react-intl";
import { Link } from "react-router-dom";
import { get } from "lodash";

import { ROUTE , PRODUCTION } from "commons/constants";
import * as actions from "modules/auth/redux/actions";
import "./styles.scss";

const SignInPage = ({ history , location }) => {
  const dispatch = useDispatch();
  const onFinish = (values) => {
    dispatch(
      actions.postLogin(values, (data) => {
        if (get(location, "state.from")) {
          const pathName = get(location, "state.from.pathname");
          const search = get(location, "state.from.search");
          history.push(`${pathName}${search}`);
          return;
        } else {
          history.push(ROUTE.HOME);
        }
      })
    );
  };

  useEffect(() => {
    if (process.env.REACT_APP_ENV === PRODUCTION) {
      const intervalBuyNow = setInterval(() => {
    
      }, 1000);

      return () => {
        clearInterval(intervalBuyNow);
      };
    } else return;
  }, []);

  return (
    <div className="sign-in-container">
      <div className="sign-in-box-container">
         
          <Card
            title={<FormattedMessage id="auth.signin.modal.title" />}
            className="card-login-custom"
          >
            <Form
              name="normal_login"
              className="login-form"
              onFinish={onFinish}
            >
              <label className="input-field-label">
                <FormattedMessage id="auth.signin.modal.input.field.label.email" />
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
                    message: (
                      <FormattedMessage id="auth.signin.modal.empty.message.email" />
                    ),
                  },
                ]}
              >
                <Input className="input-field" type="email" />
              </Form.Item>
              <label className="input-field-label">
                <FormattedMessage id="auth.signin.modal.input.field.label.password" />
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
                      <FormattedMessage id="auth.signin.modal.empty.message.password" />
                    ),
                  },
                ]}
              >
                <Input className="input-field" type="password" />
              </Form.Item>

              <Form.Item className="action">
                <Button
                  size="middle"
                  type="primary"
                  htmlType="submit"
                  className="primary-button"
                >
                  <FormattedMessage id="auth.signin.modal.button.login.label" />
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
                  to={`${ROUTE.SIGNUP}`.replace("//", "/")}
                >
                  <FormattedMessage id="auth.signin.modal.signup.label" />
                </Link>
              </Form.Item>
            </Form>
          </Card>
      </div>
    </div>
  );
};

export default injectIntl(SignInPage);
